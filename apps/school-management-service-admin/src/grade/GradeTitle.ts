import { Grade as TGrade } from "../api/grade/Grade";

export const GRADE_TITLE_FIELD = "student";

export const GradeTitle = (record: TGrade): string => {
  return record.student?.toString() || String(record.id);
};
