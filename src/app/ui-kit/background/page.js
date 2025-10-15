"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Background = dynamic(() => import("@/components/uiKits/Background"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Background />
        </DefaultLayout>
    )
}

export default page