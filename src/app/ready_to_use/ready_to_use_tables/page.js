import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import Ready_To_Use_Tables from "@/components/Ready_to_Use/Ready_To_Use_Tables";

const page = () => {
    return (
      <DefaultLayout>
        <Ready_To_Use_Tables />
      </DefaultLayout>
    );
};

export default page;