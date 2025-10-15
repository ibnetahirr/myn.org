import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import Typeahead from "@/components/Forms_Elements/Typeahead";

const page = () => {
    return (
      <DefaultLayout>
        <Typeahead />
      </DefaultLayout>
    );
};

export default page;