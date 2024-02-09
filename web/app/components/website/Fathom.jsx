import { load } from 'fathom-client'
import { useEffect } from 'react'

const Fathom = () => {
    if (process.env.NODE_ENV !== 'production') {
        return null;
    }

    useEffect(() => {
        load('QPZGXLRS', {
            // includedDomains: ['your.site.domain'],
            spa: "auto"
        })
    }, [])

    return null
}

export default Fathom;