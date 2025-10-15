"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Cheatsheet = dynamic(() => import("@/components/uiKits/Cheatsheet"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Cheatsheet />
        </DefaultLayout>
    )
}

export default page