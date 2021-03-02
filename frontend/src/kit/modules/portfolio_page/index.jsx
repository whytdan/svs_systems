import React, { useContext, useEffect } from 'react'
import { secondaryDataContext } from '../../../contexts/SecondaryDataContext'
import Layout from '../../components/layout'
import Posts from './posts/index'

export default function PortfolioPage() {

    const { fetchProjects, projects } = useContext(secondaryDataContext);

    useEffect(() => {
        fetchProjects()
    }, [])

    return (
        <Layout>
            <main> 
                <Posts projects={projects} />
            </main>
        </Layout>
    )
}
