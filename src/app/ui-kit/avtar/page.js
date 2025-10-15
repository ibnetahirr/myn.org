"use client"
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Avtar = dynamic(() => import("@/components/uiKits/Avtar"), {ssr: false});

const AvtarPage = () => {
    return (
        <DefaultLayout>
            <Avtar />
        </DefaultLayout>
    )
}

export default AvtarPage