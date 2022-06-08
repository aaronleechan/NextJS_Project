import React, { useState } from 'react';
import { TextInput } from '../commons';
import { PHONE_REG_EXP } from '../../util/validators';

interface PhoneProps {
  name: string;
}

const Phone: React.FC<PhoneProps> = (props: PhoneProps) => {
  const { name } = props;

  const [phoneNumber, setPhoneNumber] = useState<string>('');

  return (
    <TextInput
      required
      label={'Phone Numer'}
      name={name}
      type={'text'}
      id={name}
      value={phoneNumber}
      onValueChange={(val) => setPhoneNumber(val)}
      validations={{
        matchRegexp: PHONE_REG_EXP,
      }}
      validationErrors={{
        required: 'Phone number is required',
        matchRegexp: 'Phone number is invalid.',
      }}
    />
  );
};

export default Phone;
