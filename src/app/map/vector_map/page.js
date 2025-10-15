"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";
const Vector_Map = dynamic(() => import("@/components/Map/Vector_Map"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Vector_Map />
        </DefaultLayout>
    )
}

export default page
