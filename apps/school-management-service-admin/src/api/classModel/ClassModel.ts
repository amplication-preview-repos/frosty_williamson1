import { Course } from "../course/Course";

export type ClassModel = {
  course?: Course | null;
  createdAt: Date;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  updatedAt: Date;
};
