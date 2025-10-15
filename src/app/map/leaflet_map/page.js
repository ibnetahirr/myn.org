"use client";
import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import dynamic from "next/dynamic";

const Leaflet_Map = dynamic(() => import("@/components/Map/Leaflet_Map"), {ssr: false});

const page = () => {
    return (
        <DefaultLayout>
            <Leaflet_Map/>
        </DefaultLayout>
    )
}

export default page
