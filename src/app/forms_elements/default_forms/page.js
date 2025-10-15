"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Default_Forms = dynamic(() => import("@/components/Forms_Elements/Default_Forms"), {ssr: false});

const page = () => {
    return (
      <DefaultLayout>
        <Default_Forms />
      </DefaultLayout>
    );
};

export default page;