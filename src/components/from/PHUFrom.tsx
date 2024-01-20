import { ReactNode } from "react";
import { FormProvider, SubmitErrorHandler, useForm } from "react-hook-form";

type TFromConfig = {
  defaultValues?: Record<string, any>;
};
type TForm = {
  onSubmit: SubmitErrorHandler<any>;
  children: ReactNode;
} & TFromConfig;
const PHUFrom = ({ onSubmit, children, defaultValues }: TForm) => {
  const formConfig: TFromConfig = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}> {children}</form>;
    </FormProvider>
  );
};

export default PHUFrom;
