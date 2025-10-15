"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Widgets = dynamic(() => import("@/components/Widgets"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Widgets />
        </DefaultLayout>
    );
};

export default page;