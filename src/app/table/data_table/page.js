import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import Data_Table from "@/components/Table/Data_Table";

const page = () => {
    return (
      <DefaultLayout>
        <Data_Table />
      </DefaultLayout>
    );
};

export default page;
