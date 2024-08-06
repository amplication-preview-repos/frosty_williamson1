import { SortOrder } from "../../util/SortOrder";

export type ClassModelOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
};
