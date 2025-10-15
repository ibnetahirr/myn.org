import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import Form_Validation from "@/components/Forms_Elements/Form_Validation";

const page = () => {
    return (
      <DefaultLayout>
        <Form_Validation />
      </DefaultLayout>
    );
};

export default page;