import type { Education, Experience, EmploymentType, Salary } from "./vacancy";

export interface VacancyFilters {
  location?: string;
  education?: Education;
  experience?: Experience;
  employmentType?: EmploymentType;
  socialSupport?: boolean;
  certification?: boolean;
  specialty?: string;
  salary?: Salary;
}

export interface FiltersState {
  filters: VacancyFilters;
}
