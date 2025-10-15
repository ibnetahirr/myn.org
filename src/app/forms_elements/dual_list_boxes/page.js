"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Dual_List_Boxes = dynamic(() => import("@/components/Forms_Elements/Dual_List_Boxes"), {ssr: false});

const page = () => {
    return (
      <DefaultLayout>
        <Dual_List_Boxes />
      </DefaultLayout>
    );
};

export default page;