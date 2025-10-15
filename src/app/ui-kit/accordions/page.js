"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Accordions = dynamic(() => import("@/components/uiKits/Accordions"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Accordions />
        </DefaultLayout>
    )
}

export default page