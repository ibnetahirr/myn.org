"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Bullet = dynamic(() => import("@/components/uiKits/Bullet"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Bullet />
        </DefaultLayout>
    )
}

export default page