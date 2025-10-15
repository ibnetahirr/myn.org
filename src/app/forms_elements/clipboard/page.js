"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Clipboard = dynamic(() => import("@/components/Forms_Elements/Clipboard"), {ssr: false});

const page = () => {
    return (
      <DefaultLayout>
        <Clipboard />
      </DefaultLayout>
    );
};

export default page;