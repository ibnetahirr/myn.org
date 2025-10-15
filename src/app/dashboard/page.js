"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Education = dynamic(() => import("@/components/Dashboard"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Education/>
        </DefaultLayout>
    )
}

export default page