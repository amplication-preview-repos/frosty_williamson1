import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GradeWhereInput = {
  course?: CourseWhereUniqueInput;
  grade?: IntNullableFilter;
  id?: StringFilter;
  student?: StringNullableFilter;
};
