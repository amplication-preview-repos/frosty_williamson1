import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ClassModelCreateInput = {
  course?: CourseWhereUniqueInput | null;
  endTime?: Date | null;
  startTime?: Date | null;
};
