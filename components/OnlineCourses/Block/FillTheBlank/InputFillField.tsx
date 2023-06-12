import React, { FC } from "react";
import { useFormContext } from "react-hook-form";
interface Props {
  index: number;
}
const InputFillField: FC<Props> = ({ index }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input
        {...register(`input-${index}`, { required: true })}
        type="text"
        className="my-1 rounded-lg border px-4 py-2"
        placeholder="Nhập vào đáp án"
      />
    </>
  );
};

export default InputFillField;
