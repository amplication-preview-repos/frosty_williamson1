import { Course } from "../course/Course";

export type Grade = {
  course?: Course | null;
  createdAt: Date;
  grade: number | null;
  id: string;
  student: string | null;
  updatedAt: Date;
};
