import { ClassModelUpdateManyWithoutCoursesInput } from "./ClassModelUpdateManyWithoutCoursesInput";
import { GradeUpdateManyWithoutCoursesInput } from "./GradeUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  classes?: ClassModelUpdateManyWithoutCoursesInput;
  description?: string | null;
  duration?: number | null;
  grades?: GradeUpdateManyWithoutCoursesInput;
  title?: string | null;
};
