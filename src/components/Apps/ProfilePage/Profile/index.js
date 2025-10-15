"use client"
import React, {useEffect, useState} from 'react';
import ProfileAppTabs from './profileAppTabs';
import FriendsCard from './FriendsCard';
import FeaturedPost from './FeaturedPost';
import FeaturedStories from './FeaturedStories';
import ProfileCard from './ProfileCard';
import AboutMe from './AboutMe';
import Breadcrumbs from '@/components/CommonElements/Breadcrumbs';
import GLightbox from "glightbox";
import 'glightbox/dist/css/glightbox.min.css';

const Profile = () => {

    useEffect(() => {
        GLightbox({
            selector: ".glightbox",
        });
    }, []);

    const [data,setData] = useState("tab1");
    return (
        <div className="container-fluid">
            <Breadcrumbs  mainTitle="Profile" title="Apps" path={["Profile","Profile"]}  />
            <div className="row">
                {/* <div className="col-lg-3">
                    <ProfileAppTabs data={data} setData={setData}/>
                    <FriendsCard />
                    <FeaturedPost />
                </div>
                <FeaturedStories data={data}/> */}
                <div className="col-lg-12 col-xxl-3 order--1-lg col-box-12">
                    <ProfileCard />
                    <AboutMe />
                </div>
            </div>
        </div>
    );
};

export default Profile;