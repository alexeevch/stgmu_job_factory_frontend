import { defineStore } from "pinia";
import type { Vacancy } from "@/types/vacancy/vacancy";

interface ApiResponse {
  data: Vacancy[];
  total: number;
}

interface VacancyState {
  vacancies: Vacancy[];
  loading: boolean;
  error: string | null;
  total: number;
}

export const useVacancyStore = defineStore("vacancy", {
  state: (): VacancyState => ({
    vacancies: [],
    loading: false,
    error: null,
    total: 0,
  }),

  getters: {
    getVacancyById: (state) => (id: number) => {
      return state.vacancies.find((vacancy) => vacancy.id === id);
    },
  },

  actions: {
    async fetchVacancies() {
      this.loading = true;
      this.error = null;

      try {
        const { data } = await useFetch<ApiResponse>("/api/vacancies");

        if (data.value) {
          this.vacancies = data.value.data;
          this.total = data.value.total;
        }
      } catch (error) {
        this.error = "Ошибка при загрузке вакансий";
        console.error("Error fetching jobs:", error);
      } finally {
        this.loading = false;
      }
    },

    async fetchVacancyById(id: number) {
      this.loading = true;
      this.error = null;

      try {
        const { data } = await useFetch<{ data: Vacancy }>(
          `/api/vacancies/${id}`,
        );
        return data.value;
      } catch (error) {
        this.error = "Ошибка при загрузке вакансии";
        console.error("Error fetching job:", error);
        return null;
      } finally {
        this.loading = false;
      }
    },
  },
});
