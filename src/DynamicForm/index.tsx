import { useEffect, useState } from "react";
// import axios from "axios";
import {
  testData,
  useInitMaster,
  FieldsForm,
  useInitShape,
  EnumShape,
} from "./init";
import { useForm } from "react-hook-form";
import RenderField from "./RenderField";
import { Button } from "@/components/ui/button";
import { Form, FormItem, FormLabel } from "@/components/ui/form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

const DynamicForm = () => {
  const initMaster = useInitMaster();
  const initShape = useInitShape();
  const [fields, setFields] = useState(initMaster);
  const [shape, setShape] = useState(initShape);

  // const formSchema = z.object({
  //   username: z.string().min(2).max(50),
  // });
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     master: testData,
  //   },
  // });
  const formReturn = useForm<FieldsForm>({
    defaultValues: {
      master: testData,
      shape: initShape,
    },
  });
  const { handleSubmit, watch, setValue } = formReturn;
  const master = watch("master");
  // useEffect(() => {
  //   axios
  //     .get("/api/form/fields")
  //     .then((response) => {
  //       setFields(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching form fields", error);
  //     });
  // }, []);

  const handleSend = () => {
    console.log(master);
  };

  const handleClear = () => {
    setValue("master", testData);
  };
  useEffect(() => {
    setFields(testData);

    setShape({
      [EnumShape.className]: "formClassName",
      [EnumShape.formWidth]: 1200,
      [EnumShape.columnNum]: 2,
      [EnumShape.clearName]: "清除",
      [EnumShape.submitName]: "送出",
    });
  }, []);

  return (
    <div
      className={`flex justify-center w-full m-auto p-2 border border-solid border-gray-400 rounded-lg ${
        shape[EnumShape.className]
      }`}
      style={{
        width: `${shape[EnumShape.formWidth]}px`,
      }}
    >
      <Form {...formReturn}>
        <form onSubmit={handleSubmit(handleSend)}>
          <div className="flex flex-wrap w-full">
            {fields.map((field, index) => {
              return (
                <FormItem
                  className="flex items-center mb-1 px-2"
                  style={{
                    width: `${100 / shape[EnumShape.columnNum]}%`,
                  }}
                  key={"div" + field.id}
                >
                  <FormLabel className="w-3/12 text-right mr-2">
                    {field.text}
                  </FormLabel>

                  <div className="flex-1 text-left">
                    <RenderField
                      field={field}
                      index={index}
                      formReturn={formReturn}
                    />
                  </div>
                </FormItem>
              );
            })}
          </div>
          <div className="flex justify-center flex-1">
            <Button type="button" className="m-2" onClick={handleClear}>
              {shape[EnumShape.clearName]}
            </Button>
            <Button className="m-2">{shape[EnumShape.submitName]}</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DynamicForm;
