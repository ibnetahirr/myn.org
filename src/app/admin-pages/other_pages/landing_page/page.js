"use client";
import React from 'react';
import dynamic from "next/dynamic";
const LandingPage = dynamic(() => import("@/components/Pages/Other_Pages/Landing_Page"), { ssr: false });

const page = () => {
    return (
        <LandingPage/>
    );
};

export default page;