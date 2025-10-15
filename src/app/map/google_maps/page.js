import React from 'react';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Google_Maps from "@/components/Map/Google_Maps";

const page = () => {
    return (
        <DefaultLayout>
            <Google_Maps />
        </DefaultLayout>
    )
}

export default page
