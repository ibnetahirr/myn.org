"use client"
import Breadcrumbs from '@/components/CommonElements/Breadcrumbs'
import {Container} from "reactstrap";
import BlogPost from "@/components/Apps/BlogPage/BlogDeatils/BlogPost";

const Index = () => {
    return (
        <Container fluid>
            <Breadcrumbs mainTitle="Blog Details" title="Apps" path={["Blog Page", "Blog Details"]}/>
            <BlogPost/>
        </Container>
    )
}

export default Index