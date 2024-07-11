import { UseFormReturn } from "react-hook-form";
import { FieldsForm, Imaster } from "../init";

export interface RenderFieldProps {
  field: Imaster;
  index: number;
  formReturn: UseFormReturn<FieldsForm>;
}
