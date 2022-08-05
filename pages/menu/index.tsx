import React from 'react';
import PrimaryLayout from '../../components/Layout/primary/PrimaryLayout';
import SidebarLayout from '../../components/Layout/sidebar/SidebarLayout';

const Menu = () => {
  return (
    <section>
      <h1>Menu Creator</h1>
    </section>
  );
};

export default Menu;

Menu.getLayout = (page: any) => {
  return (
    <PrimaryLayout>
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
