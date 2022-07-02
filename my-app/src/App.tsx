import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "./components/input/Select/Select";
import InputText from "./components/input/Text/Text";

export type IFormInput = {
  firstName: string;
  lastName: string;
  favorite: number;
};

type OptionsType = {
  name: string;
  value: number;
}[];

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
  const options: OptionsType = [
    { name: "pizza", value: 1 },
    { name: "sushi", value: 2 },
  ];
  console.log(watch("firstName"));
  console.log(watch("favorite"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        control={control}
        name="firstName"
        rules={{ required: true }}
      />
      <InputText control={control} name="lastName" />
      <Select control={control} name="favorite" options={options} />
      <input type="submit" />
      {errors.firstName && <span>error</span>}
    </form>
  );
}
