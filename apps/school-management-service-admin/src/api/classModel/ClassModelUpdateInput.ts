import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type ClassModelUpdateInput = {
  course?: CourseWhereUniqueInput | null;
  endTime?: Date | null;
  startTime?: Date | null;
};
