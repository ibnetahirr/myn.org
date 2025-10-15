"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Advance_Table = dynamic(() => import("@/components/Table/Advance_Table"), {ssr: false});

const page = () => {
    return (
      <DefaultLayout>
        <Advance_Table />
      </DefaultLayout>
    );
};

export default page;
