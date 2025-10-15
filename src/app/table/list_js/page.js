"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const List_Js = dynamic(() => import("@/components/Table/List_Js"), {ssr: false});

const page = () => {
    return (
      <DefaultLayout>
        <List_Js />
      </DefaultLayout>
    );
};

export default page;
