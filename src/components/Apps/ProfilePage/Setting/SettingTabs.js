import React, { useState } from 'react';
import {Card, CardHeader, CardBody, Nav, NavItem, NavLink, TabContent, TabPane, Col,} from 'reactstrap';
import SettingProfile from './SettingProfile';
import ActivityTimeline from './ActivityTimeline';
import SecurityCard from './SecurityCard';
import PrivacyCard from './PrivacyCard';
import NotificationSettings from './NotificationSettings';
import Subscription from './Subscription';
import Connection from './Connection';
import TimeSpent from "@/components/Apps/ProfilePage/Setting/TimeSpent";
import Link from "next/link";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const SettingTabs = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = (tab) => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };

  const handleDeleteClick = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        );
      }
    });
  };
  return (
    <>

    <Col lg={12} xxl={12}>
      
    <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <SettingProfile/>
          </TabPane>
          <TabPane tabId="2">
            <ActivityTimeline/>
          </TabPane>
          <TabPane tabId="3">
            <SecurityCard/>
          </TabPane>
          <TabPane tabId="4">
            <PrivacyCard/>
          </TabPane>
          <TabPane tabId="5">
            <NotificationSettings/>
          </TabPane>
          <TabPane tabId="6">
            <Subscription/>
          </TabPane>
          <TabPane tabId="7">
            <Connection/>
          </TabPane>
        </TabContent>
    </Col>
    
    
      
    </>
  )
}

export default SettingTabs
