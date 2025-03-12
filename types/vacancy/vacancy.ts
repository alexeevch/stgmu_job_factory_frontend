export interface Vacancy {
  id: number;
  title: string;
  company: {
    name: string;
    logo?: string;
  };
  salary: Salary;
  description: string;
  location: string;
  publishedAt: string;
  education: Education;
  experience: Experience;
  employmentType: EmploymentType;
  socialSupport: boolean;
  certification: boolean;
  specialty: string;
}

export type Education = "graduate" | "bachelor" | "master" | "specialist";
export type Experience = "no-experience" | "1-3" | "3-5" | "5+";
export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "temporary";
export type Salary = {
  from: number;
  to: number;
};
