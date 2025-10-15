"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Badges = dynamic(() => import("@/components/uiKits/Badges"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Badges />
        </DefaultLayout>
    )
}

export default page