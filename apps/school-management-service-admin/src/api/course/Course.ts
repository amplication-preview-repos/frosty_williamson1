import { ClassModel } from "../classModel/ClassModel";
import { Grade } from "../grade/Grade";

export type Course = {
  classes?: Array<ClassModel>;
  createdAt: Date;
  description: string | null;
  duration: number | null;
  grades?: Array<Grade>;
  id: string;
  title: string | null;
  updatedAt: Date;
};
