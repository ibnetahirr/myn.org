"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Alert = dynamic(() => import("@/components/uiKits/Alert"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Alert />
        </DefaultLayout>
    )
}

export default page