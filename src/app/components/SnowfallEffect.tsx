"use client"
import React, { useEffect, useState } from 'react'
import Snowfall from 'react-snowfall'

const SnowfallEffect = () => {

  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [reloader, setReloader] = useState(true)

  useEffect(() => {
    setReloader(!reloader)
    console.log(dimensions)
  }, [dimensions])

  return (
    <div className="w-full h-full fixed -z-1">
      {reloader ?
        <Snowfall wind={[0, 0]} radius={[0.4, 0.1]} snowflakeCount={60} speed={[1, 2]} style={{ display: 'flex', width: '100vw' }} />
        :
        <Snowfall wind={[0, 0]} radius={[0.4, 0.1]} snowflakeCount={60} speed={[1, 2]} style={{ display: 'flex', width: '100vw' }} />

      }
    </div>
  )
}

export default SnowfallEffect
