"use client"
import React from 'react';
import {Container, Row} from "reactstrap";
import ProfileCards from "@/components/Dashboard/ProfileCards";
import LectureCard from "@/components/Dashboard/LectureCard";
import ProgressCards from "@/components/Dashboard/ProgressCards";

const Education = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <ProfileCards/>
                    <LectureCard/>
                    <ProgressCards/>
                </Row>
            </Container>
        </>
    );
};

export default Education;