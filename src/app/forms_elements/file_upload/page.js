import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import File_Upload from "@/components/Forms_Elements/File_Upload";

const page = () => {
    return (
      <DefaultLayout>
        <File_Upload />
      </DefaultLayout>
    );
};

export default page;