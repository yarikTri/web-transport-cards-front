import { FC } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import '../style/InputField.css';

interface SearchValue {
  value: string;
  setValue: (value: string) => void;
  onSubmit: () => void;
  loading?: boolean;
  placeholder?: string;
  buttonTitle?: string;
}

const InputField: FC<SearchValue> = ({
  value,
  setValue,
  onSubmit,
  placeholder,
  buttonTitle,
}) => {
  return (
    <InputGroup className="custom-mb-3">
      <Form.Control
        className="custom-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="outline-secondary my-custom-button"
        onClick={onSubmit}
      >
        {buttonTitle}
      </Button>
    </InputGroup>
  );
};

export default InputField;
