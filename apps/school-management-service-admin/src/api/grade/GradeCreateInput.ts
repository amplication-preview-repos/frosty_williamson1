import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type GradeCreateInput = {
  course?: CourseWhereUniqueInput | null;
  grade?: number | null;
  student?: string | null;
};
