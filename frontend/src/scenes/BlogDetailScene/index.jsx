import React from 'react'
import { Helmet } from 'react-helmet'
import BlogDetailPage from '../../kit/modules/blog_detail_page'

export default function BlogDetailScene() {
    return (
        <>
        <Helmet>
            <title>Blog Detail</title>
        </Helmet>
        <BlogDetailPage/>
        </>
    )
}
