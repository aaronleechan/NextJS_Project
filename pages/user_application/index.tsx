import React from 'react';
import PrimaryLayout from '../../components/Layout/primary/PrimaryLayout';
import SidebarLayout from '../../components/Layout/sidebar/SidebarLayout';

import {
  PersonalName,
  Email,
  Password,
  Phone,
} from '../../components/user_application_form';

import { FormsyComponent } from '../../components/commons';

const UserApplication = () => {
  const onSubmit = (obj: any) => {
    console.log({ ' obj ': obj });
  };

  return (
    <section>
      <h1>This is Sample Application Form </h1>
      <FormsyComponent onSubmit={onSubmit}>
        <PersonalName name={'personal_name'} />
        <Email name={'email'} />
        <Password name={'password'} />
        <Phone name={'phoneNumber'} />
      </FormsyComponent>
    </section>
  );
};

export default UserApplication;

UserApplication.getLayout = (page: any) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
