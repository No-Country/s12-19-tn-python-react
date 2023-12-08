import React, { useEffect, useState } from "react";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
import useSimpleFilterState from "../../store/SimpleFilterStore";

const DateComponent = () => {
  const { setDates } = useSimpleFilterState();

  const [date, setDate] = useState([]);
  useEffect(() => {
   
    // Actualiza el estado global con las fechas seleccionadas
    setDates(date.map(date => date ? date.format('YYYY-MM-DD') : null));
  }, [date, setDates])

  const [value, setValue] = useState(null);
  const disabledDate = (current) => {
    if (date.length > 0) {
      const tooLate = date[0] && current.diff(date[0], "days") >= 1000;
      const tooEarly = date[1] && date[1].diff(current, "days") >= 1000;
      return !!tooEarly || !!tooLate;
    }
    return false;
  };

  const onOpenChange = (open) => {
    if (open) {
      // Establece un arreglo vacío cuando se abre el selector de fechas
      setDate([null, null]);
    }
  };

  return (
    <RangePicker
      className="home__button--date"
      value={date || value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => {
        setDate(val);
      }}
      onChange={(val) => {
        setValue(val);
      }}
      onOpenChange={onOpenChange}
      changeOnBlur
    />
  );
};

export default DateComponent;
