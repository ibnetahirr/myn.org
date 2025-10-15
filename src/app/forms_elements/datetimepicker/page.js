"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Datetimepicker = dynamic(() => import("@/components/Forms_Elements/Datetimepicker"), {ssr: false});

const page = () => {
    return (
      <DefaultLayout>
        <Datetimepicker />
      </DefaultLayout>
    );
};

export default page;