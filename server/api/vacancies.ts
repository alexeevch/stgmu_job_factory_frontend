import vacancies from "../data/mock/vacancies.json";

export default defineEventHandler(() => {
  return {
    data: vacancies,
    total: vacancies.length,
  };
});
