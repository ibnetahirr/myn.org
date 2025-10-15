"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const AlignmentThing = dynamic(() => import("@/components/uiKits/AlignmentThing"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <AlignmentThing />
        </DefaultLayout>
    )
}

export default page