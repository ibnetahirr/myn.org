"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import dynamic from "next/dynamic";
const Setting = dynamic(() => import('@/components/Apps/ProfilePage/Setting'), { ssr: false });

const page = () => {
    return (
        <DefaultLayout>
            <Setting />
        </DefaultLayout>
    );
};

export default page;