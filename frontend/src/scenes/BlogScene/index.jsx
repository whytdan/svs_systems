import React from 'react'
import { Helmet } from 'react-helmet'
import BlogPage from '../../kit/modules/blog_page'

export default function BlogScene() {
    return (
        <>
        <Helmet>
            <title>Блог</title>
        </Helmet>
        <BlogPage/>
        </>
    )
}
