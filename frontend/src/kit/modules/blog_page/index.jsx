import React, { useContext, useEffect } from 'react'
import Layout from '../../components/layout'
import Posts from './posts/index'
import { secondaryDataContext } from '../../../contexts/SecondaryDataContext';

export default function BlogPage() {

    const { fetchPosts, posts } = useContext(secondaryDataContext);

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <Layout>
            <main> 
                <Posts posts={posts} />
            </main>
        </Layout>
    )
}
