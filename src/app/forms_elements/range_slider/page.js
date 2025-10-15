"use client";
import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import RangeSlider from "@/components/Forms_Elements/RangeSlider";

const page = () => {
    return (
        <DefaultLayout>
            <RangeSlider/>
        </DefaultLayout>
    );
};

export default page;