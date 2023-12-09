import useSimpleFilterState from '../../store/SimpleFilterStore';
import { InputNumber, Button } from 'antd';

const ImputNumber = () => {
  const { numberOfPersons, setNumberOfPersons } = useSimpleFilterState();
  const onChange = (value) => {

    setNumberOfPersons(value);
  };
  return (
    <div>
      <InputNumber
        placeholder='Numero de personas'
        className='home__input--numberofperson'
        min={0} max={20}
        onChange={onChange}
        value={numberOfPersons}
      />
    </div>
  );
};

export default ImputNumber;
