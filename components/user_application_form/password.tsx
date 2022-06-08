import React, { useState } from 'react';
import { TextInput } from '../commons';
import { PASSWORD_REG_EXP } from '../../util/validators';

interface PasswordProps {
  name: string;
}

const Password: React.FC<PasswordProps> = (props: PasswordProps) => {
  const { name } = props;

  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <>
      <TextInput
        required
        label={'Password'}
        name={name}
        type={'password'}
        id={name}
        value={password}
        onValueChange={(val) => setPassword(val)}
        validations={{
          matchRegexp: PASSWORD_REG_EXP,
        }}
        validationErrors={{
          required: 'New Password is required',
          matchRegexp: 'New Password does not meet the requirements',
        }}
      />

      <TextInput
        required
        label={'Confirm Password'}
        name={`confirm_${name}`}
        type={'password'}
        id={`confirm_${name}`}
        value={confirmPassword}
        onValueChange={(val) => setConfirmPassword(val)}
        validations={{
          equalsField: 'password',
          matchRegexp: PASSWORD_REG_EXP,
        }}
        validationErrors={{
          matchRegexp: 'New Password does not meet the requirements',
          equalsField: 'Password do not match',
          required: 'New Password is required',
        }}
      />
    </>
  );
};

export default Password;
