"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Base_Input = dynamic(() => import("@/components/Forms_Elements/Base_Input"), {ssr: false});

const page = () => {
    return (
      <DefaultLayout>
        <Base_Input />
      </DefaultLayout>
    );
};

export default page;