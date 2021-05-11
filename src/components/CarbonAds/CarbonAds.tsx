import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './CarbonAds.css'

interface ICarbonAds { }

const CarbonAds: React.FC<ICarbonAds> = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const el = useRef(null)
  const location = useLocation()

  useEffect(() => {
    el.current.innerHTML = ''

    const s = document.createElement('script')
    let mounted = true

    s.id = '_carbonads_js'
    s.src = '//cdn.carbonads.com/carbon.js?serve=CK7DC27N&placement=docsgetleonai'
    s.addEventListener('load', () => {
      if (mounted) {
        setIsLoaded(true)
      }
    })

    el.current.appendChild(s)

    return () => { mounted = false }
  }, [isLoaded, location.pathname])

  return (
    <div ref={el} className="carbon-ads" />
  )
}

export default CarbonAds
