import { useLocation } from '@remix-run/react'
import { load } from 'fathom-client'
import { useEffect } from 'react'

const Fathom = () => {
    useEffect(() => {
        load('QPZGXLRS', {
            // includedDomains: ['your.site.domain'],
            spa: "auto"
        })
    }, [])

    return null
}

export default Fathom;