import Breadcrumbs from '@/components/CommonElements/Breadcrumbs'
import React from 'react'
import BlogCard from "@/components/Apps/BlogPage/Blog/BlogCard";
import {Container} from "reactstrap";

const Blog = () => {


    return (
        <Container fluid>
            <Breadcrumbs mainTitle="Blog" title="Apps" path={["Blog page", "Blog"]}/>

            <BlogCard/>
        </Container>
    )
}

export default Blog