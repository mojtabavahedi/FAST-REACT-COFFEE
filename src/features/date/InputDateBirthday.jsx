import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
function InputDateBirthday({ control }) {
  return (
    <Controller
      control={control}
      name="dob"
      rules={{ required: true }} //optional
      render={({
        field: { onChange, name, value },
        fieldState: { invalid, isDirty }, //optional
        formState: errors, //optional, but necessary if you want to show an error message
      }) => (
        <>
          <DatePicker
            value={value || ""}
            onChange={(date) => {
              onChange(date?.isValid ? date.format("YYYY/MM/DD") : "");
            }}
            calendar={persian}
            locale={persian_fa}
            format={"YYYY/MM/DD"}
            calendarPosition="bottom-right"
            placeholder=" روز / ماه / سال"
          />
        </>
      )}
    />
  );
}

export default InputDateBirthday;
