"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Checkbox_Radio = dynamic(() => import("@/components/Forms_Elements/Checkbox_Radio"), {ssr: false});

const page = () => {
    return (
      <DefaultLayout>
        <Checkbox_Radio />
      </DefaultLayout>
    );
};

export default page;