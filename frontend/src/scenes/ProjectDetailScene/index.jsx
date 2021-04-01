import React from 'react'
import { Helmet } from 'react-helmet'
import ProjectDetailPage from '../../kit/modules/project_detail_page'

export default function ProjectDetailScene() {
    return (
        <>
        <Helmet>
            <title>Portfolio Detail Page</title>
        </Helmet>
        <ProjectDetailPage/>
        </>
    )
}
