import React from 'react'

export const ScrollToTop = ({ children, location }) => {
    React.useLayoutEffect(() => window.scrollTo(0, 0), [location.pathname])
    return children
}