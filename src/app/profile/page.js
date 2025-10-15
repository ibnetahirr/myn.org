"use client";
import React from 'react'
import DefaultLayout from '@/components/Layouts/DefaultLayout'
import dynamic from "next/dynamic";
const Profile = dynamic(() => import('@/components/Apps/ProfilePage/Profile'), {ssr: false});

const page = () => {
  return (
    <DefaultLayout>
        <Profile />
    </DefaultLayout>
  )
}

export default page