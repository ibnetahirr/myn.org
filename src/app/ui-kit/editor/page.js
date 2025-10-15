"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("@/components/uiKits/Editor"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Editor />
        </DefaultLayout>
    )
}

export default page