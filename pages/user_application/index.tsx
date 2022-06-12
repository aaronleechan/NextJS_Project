import React from 'react';
import {
  PersonalName,
  Email,
  Password,
  Phone,
} from '../../components/user_application_form';
import { FormsyComponent } from '../../components/commons';

const UserApplication = () => {

  const onSubmit =(obj: any) =>{
    console.log({" obj ": obj})
  }

  return (
    <div>
      <h1>This is Sample Application Form </h1>
      <FormsyComponent onSubmit={onSubmit}>
        <PersonalName name={'personal_name'} />
        <Email name={'email'} />
        <Password name={'password'} />
        <Phone name={'phoneNumber'} />
      </FormsyComponent>
    </div>
  );
};

export default UserApplication;
