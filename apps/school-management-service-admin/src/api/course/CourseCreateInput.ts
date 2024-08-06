import { ClassModelCreateNestedManyWithoutCoursesInput } from "./ClassModelCreateNestedManyWithoutCoursesInput";
import { GradeCreateNestedManyWithoutCoursesInput } from "./GradeCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  classes?: ClassModelCreateNestedManyWithoutCoursesInput;
  description?: string | null;
  duration?: number | null;
  grades?: GradeCreateNestedManyWithoutCoursesInput;
  title?: string | null;
};
