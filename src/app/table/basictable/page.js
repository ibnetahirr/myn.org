"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const BasicTable = dynamic(() => import("@/components/Table/BasicTable"), {ssr: false});

const page = () => {
    return (
      <DefaultLayout>
        <BasicTable />
      </DefaultLayout>
    );
};

export default page;
