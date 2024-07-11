import { Controller } from "react-hook-form";
import { EnumFields, EnumFormType, nameMaster } from "../init";
import { RenderFieldProps } from "./init";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Fragment } from "react/jsx-runtime";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Textarea } from "@/components/ui/textarea";

const RenderField = (props: RenderFieldProps) => {
  const { field: input, index, formReturn } = props;
  const { control } = formReturn;

  switch (input.type) {
    case EnumFormType.textbox:
      return (
        <Controller
          control={control}
          name={nameMaster(index, EnumFields.value)}
          render={({ field }) => (
            <Input
              type="text"
              value={field.value as unknown as string}
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
            />
          )}
        />
      );
    case EnumFormType.dropdownlist:
      return (
        <Controller
          control={control}
          name={nameMaster(index, EnumFields.value)}
          // rules={{ required: true }}
          render={({ field }) => {
            return (
              <Select
                name={field.name}
                value={field.value as unknown as string}
                onValueChange={(e) => {
                  console.log(e);
                  field.onChange(e);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="請選擇" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {input.options &&
                      input.options.map((option) => (
                        <SelectItem key={option.id} value={option.value}>
                          {option.text}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              // <select
              //   name={field.name}
              //   value={field.value as unknown as string}
              //   onChange={(e) => {
              //     field.onChange(e.target.value);
              //   }}
              // >
              //   {input.options &&
              //     input.options.map((option) => (
              //       <option key={option.id} value={option.value}>
              //         {option.text}
              //       </option>
              //     ))}
              // </select>
            );
          }}
        />
      );
    case EnumFormType.radio:
      return (
        <Controller
          control={control}
          name={nameMaster(index, EnumFields.value)}
          render={({ field }) => {
            return (
              <>
                <RadioGroup className="flex">
                  {input.options &&
                    input.options.map((option) => (
                      <Fragment key={option.id}>
                        <RadioGroupItem
                          id={option.id}
                          onClick={(e) => {
                            field.onChange(e);
                          }}
                          value={option.value}
                          // checked={
                          //   option.value === (field.value as unknown as string)
                          // }
                        />

                        <Label key={option.id} htmlFor={option.id}>
                          {option.text}
                        </Label>
                      </Fragment>
                    ))}
                </RadioGroup>
                {/* {input.options &&
                  input.options.map((option) => (
                    <label key={option.id}>
                      <input
                        type="radio"
                        onChange={(e) => {
                          field.onChange(e.target.value);
                        }}
                        name={input.name}
                        value={option.value}
                        checked={
                          option.value === (field.value as unknown as string)
                        }
                      />
                      {option.text}
                    </label>
                  ))} */}
              </>
            );
          }}
        />
      );
    case EnumFormType.checkbox:
      return (
        <Controller
          control={control}
          name={nameMaster(index, EnumFields.value)}
          render={({ field }) => {
            return (
              <>
                {input.options &&
                  input.options.map((option) => (
                    <Fragment key={option.id}>
                      <Checkbox
                        id={option.id}
                        name={option.name}
                        value={option.value}
                        checked={(field.value as unknown as string[]).includes(
                          option.value
                        )}
                        onClick={(e) => {
                          const value = (e.target as HTMLInputElement).value;
                          const fieldArray: string[] = Array.isArray(
                            field.value
                          )
                            ? (field.value as unknown as string[])
                            : [];
                          const index = fieldArray.findIndex(
                            (el) => el === value
                          );
                          if (index === -1) {
                            fieldArray.push(value);
                          } else {
                            fieldArray.splice(index, 1);
                          }
                          field.onChange(fieldArray);
                        }}
                      />
                      <Label
                        key={option.id}
                        htmlFor={option.id}
                        className="m-1"
                      >
                        {option.text}
                      </Label>
                    </Fragment>
                  ))}
                {/* {input.options &&
                  input.options.map((option) => (
                    <label key={option.id}>
                      <input
                        type="checkbox"
                        name={option.name}
                        value={option.value}
                        checked={(field.value as unknown as string[]).includes(
                          option.value
                        )}
                        onChange={(e) => {
                          const value = e.target.value;
                          const fieldArray: string[] = Array.isArray(
                            field.value
                          )
                            ? (field.value as unknown as string[])
                            : [];
                          const index = fieldArray.findIndex(
                            (el) => el === e.target.value
                          );
                          if (index === -1) {
                            fieldArray.push(value);
                          } else {
                            fieldArray.splice(index, 1);
                          }
                          field.onChange(fieldArray);
                        }}
                      />
                      {option.text}
                    </label>
                  ))} */}
              </>
            );
          }}
        />
      );
    case EnumFormType.calendar:
      return (
        <Controller
          control={control}
          name={nameMaster(index, EnumFields.value)}
          render={({ field }) => {
            const date = field.value as unknown as Date;
            return (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(e) => {
                      field.onChange(e);
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              // <input
              //   type="date"
              //   name={input.name}
              //   value={field.value as unknown as string}
              //   onChange={(e) => {
              //     field.onChange(e.target.value);
              //   }}
              // />
            );
          }}
        />
      );
    case EnumFormType.textarea:
      return (
        <Controller
          control={control}
          name={nameMaster(index, EnumFields.value)}
          render={({ field }) => (
            <Textarea
              value={field.value as unknown as string}
              onChange={(e) => {
                field.onChange(e.target.value);
              }}
            />
          )}
        />
      );
    default:
      return null;
  }
};

export default RenderField;
