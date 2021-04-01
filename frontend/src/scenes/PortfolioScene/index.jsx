import React from 'react'
import { Helmet } from 'react-helmet'
import PortfolioPage from '../../kit/modules/portfolio_page'

export default function PortfolioScene() {
    return (
        <>
        <Helmet>
            <title>Портфолио</title>
        </Helmet>
        <PortfolioPage/>
        </>
    )
}
