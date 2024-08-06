import { SortOrder } from "../../util/SortOrder";

export type GradeOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  grade?: SortOrder;
  id?: SortOrder;
  student?: SortOrder;
  updatedAt?: SortOrder;
};
