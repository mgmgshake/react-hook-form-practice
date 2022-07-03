import * as React from "react";
import {
  useController,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

type OptionsType = {
  name: string;
  value: number;
}[];

export default function InputRadio<T extends FieldValues>(props: any) {
  const { options, ...controlProps }: { options: OptionsType } = props;
  const { field, fieldState } = useController(
    controlProps as UseControllerProps<T>
  );
  return (
    <div>
      <RadioGroup {...field}>
        {options.length &&
          options.map((option) => {
            return (
              <FormControlLabel
                value={option.value}
                control={<Radio />}
                label={option.name}
              />
            );
          })}
      </RadioGroup>
    </div>
  );
}
