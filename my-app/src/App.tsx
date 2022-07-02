import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputText from "./components/input/Text/Text";

export type IFormInput = {
  firstName: string;
  lastName: string;
};

export default function App() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      firstName: "test",
    },
    mode: "onSubmit",
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log({ data });

  console.log(watch("firstName"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        control={control}
        name="firstName"
        rules={{ required: true }}
      />
      <InputText control={control} name="lastName" />
      <input type="submit" />
      {errors.firstName && <span>error</span>}
    </form>
  );
}
