import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "./components/input/Select/Select";
import InputText from "./components/input/Text/Text";
import InputRadio from "./components/Radio/ Radio";

export type IFormInput = {
  firstName: string;
  lastName: string;
  favorite: number;
  radiotest: number;
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
  const radioOptions: OptionsType = [
    { name: "dog", value: 1 },
    { name: "cat", value: 2 },
    { name: "other", value: 3 },
  ];
  console.log(watch("firstName"));
  console.log(watch("favorite"));
  console.log(watch("radiotest"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        control={control}
        name="firstName"
        rules={{ required: true }}
      />
      <InputText control={control} name="lastName" />
      <Select control={control} name="favorite" options={options} />
      <InputRadio control={control} name="radiotest" options={radioOptions} />
      <input type="submit" />
      {errors.firstName && <span>error</span>}
    </form>
  );
}
