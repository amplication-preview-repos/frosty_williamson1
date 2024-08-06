import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type GradeUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  grade?: number | null;
  student?: string | null;
};
