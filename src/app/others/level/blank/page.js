"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Api = dynamic(() => import('@/components/Apps/Api'), { ssr: false });

const page = () => {
    return (
      <DefaultLayout>
        <Api />
      </DefaultLayout>
    );
};

export default page;