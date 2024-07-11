import { FieldPath } from "react-hook-form";

export enum EnumShape {
  className = "className",
  formWidth = "formWidth",
  columnNum = "columnNum",
  clearName = "clearName",
  submitName = "submitName",
}
export interface Ishape {
  [EnumShape.className]: string;
  [EnumShape.formWidth]: number;
  [EnumShape.columnNum]: number;
  [EnumShape.clearName]: string;
  [EnumShape.submitName]: string;
}

export const useInitShape = () => ({
  [EnumShape.className]: "",
  [EnumShape.columnNum]: 0,
  [EnumShape.formWidth]: 0,
  [EnumShape.clearName]: "",
  [EnumShape.submitName]: "",
});

export enum EnumFormType {
  textbox = "textbox",
  dropdownlist = "dropdownlist",
  radio = "radio",
  calendar = "calendar",
  checkbox = "checkbox",
  textarea = "textarea",
}

export enum EnumFields {
  /** 序號 */
  id = "id",
  /** 欄位型別 */
  type = "type",
  /** tag name */
  name = "name",
  /** tag value */
  value = "value",
  /** 顯示文字 */
  text = "text",
  /** 多筆選項 */
  options = "options",
  // /** 幾個欄位 */
}

export interface Imaster {
  [EnumFields.id]: string;
  [EnumFields.type]: EnumFormType;
  [EnumFields.name]: string;
  [EnumFields.value]: string;
  [EnumFields.text]: string;
  [EnumFields.options]?: Ioption[];
}
export enum enumOptions {
  id = "id",
  name = "name",
  value = "value",
  text = "text",
}

export interface Ioption {
  [enumOptions.id]: string;
  [enumOptions.name]: string;
  [enumOptions.value]: string;
  [enumOptions.text]: string;
}

export const useInitMaster = (): Imaster[] => [];

export const testData: Imaster[] = [
  {
    [EnumFields.id]: "1",
    [EnumFields.type]: EnumFormType.textbox,
    [EnumFields.name]: "textboxName",
    [EnumFields.value]: "",
    [EnumFields.text]: "textbox",
  },
  {
    [EnumFields.id]: "2",
    [EnumFields.type]: EnumFormType.dropdownlist,
    [EnumFields.name]: "dropdownlistName",
    [EnumFields.value]: "",
    [EnumFields.text]: "dropdownlist",
    [EnumFields.options]: [
      {
        [enumOptions.id]: "",
        [enumOptions.name]: "",
        [enumOptions.value]: "null",
        [enumOptions.text]: "",
      },
      {
        [enumOptions.id]: "dropdownlist1",
        [enumOptions.name]: "dropdownlist1",
        [enumOptions.value]: "dropdownlist1",
        [enumOptions.text]: "dropdownlist1",
      },
      {
        [enumOptions.id]: "dropdownlist2",
        [enumOptions.name]: "dropdownlist2",
        [enumOptions.value]: "dropdownlist2",
        [enumOptions.text]: "dropdownlist2",
      },
      {
        [enumOptions.id]: "dropdownlist3",
        [enumOptions.name]: "dropdownlist3",
        [enumOptions.value]: "dropdownlist3",
        [enumOptions.text]: "dropdownlist3",
      },
    ],
  },
  {
    [EnumFields.id]: "3",
    [EnumFields.type]: EnumFormType.radio,
    [EnumFields.name]: "radioName",
    [EnumFields.value]: "",
    [EnumFields.text]: "radio",
    [EnumFields.options]: [
      {
        [enumOptions.id]: "radio1",
        [enumOptions.name]: "radio1",
        [enumOptions.value]: "radio1",
        [enumOptions.text]: "radio1",
      },
      {
        [enumOptions.id]: "radio2",
        [enumOptions.name]: "radio2",
        [enumOptions.value]: "radio2",
        [enumOptions.text]: "radio2",
      },
      {
        [enumOptions.id]: "radio3",
        [enumOptions.name]: "radio3",
        [enumOptions.value]: "radio3",
        [enumOptions.text]: "radio3",
      },
    ],
  },
  {
    [EnumFields.id]: "4",
    [EnumFields.type]: EnumFormType.checkbox,
    [EnumFields.name]: "checkboxName",
    [EnumFields.value]: "",
    [EnumFields.text]: "checkbox",
    [EnumFields.options]: [
      {
        [enumOptions.id]: "checkbox1",
        [enumOptions.name]: "checkbox1",
        [enumOptions.value]: "checkbox1",
        [enumOptions.text]: "checkbox1",
      },
      {
        [enumOptions.id]: "checkbox2",
        [enumOptions.name]: "checkbox2",
        [enumOptions.value]: "checkbox2",
        [enumOptions.text]: "checkbox2",
      },
      {
        [enumOptions.id]: "checkbox3",
        [enumOptions.name]: "checkbox3",
        [enumOptions.value]: "checkbox3",
        [enumOptions.text]: "checkbox3",
      },
    ],
  },
  {
    [EnumFields.id]: "5",
    [EnumFields.type]: EnumFormType.calendar,
    [EnumFields.name]: "calendarName",
    [EnumFields.value]: "",
    [EnumFields.text]: "calendar",
  },
  {
    [EnumFields.id]: "6",
    [EnumFields.type]: EnumFormType.textarea,
    [EnumFields.name]: "textareaName",
    [EnumFields.value]: "",
    [EnumFields.text]: "textarea",
  },
  {
    [EnumFields.id]: "7",
    [EnumFields.type]: EnumFormType.textbox,
    [EnumFields.name]: "textboxName2",
    [EnumFields.value]: "",
    [EnumFields.text]: "textbox2",
  },
];

export interface FieldsForm {
  master: Imaster[];
  shape: Ishape;
}

export const nameMaster = (
  number: number,
  field: FieldPath<typeof EnumFields>
): FieldPath<FieldsForm> => `master.${number}.${field}`;
