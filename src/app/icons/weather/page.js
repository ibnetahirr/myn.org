import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import Weather from "@/components/Icons/Weather";

const page = () => {
    return (
      <DefaultLayout>
        <Weather />
      </DefaultLayout>
    );
};

export default page;
