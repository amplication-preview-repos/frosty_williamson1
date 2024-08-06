import { ClassModelListRelationFilter } from "../classModel/ClassModelListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { GradeListRelationFilter } from "../grade/GradeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseWhereInput = {
  classes?: ClassModelListRelationFilter;
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  grades?: GradeListRelationFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
