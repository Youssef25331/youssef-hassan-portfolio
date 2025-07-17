"use client"
import React from 'react'
import Snowfall from 'react-snowfall'

const SnowfallEffect = () => {
  return (
    <div className="w-full h-full fixed -z-1">
      <Snowfall wind={[0, 0]} radius={[0.4, 0.1]} snowflakeCount={60} speed={[1, 2]} style={{ display: 'flex', width: '100vw' }} />
    </div>
  )
}

export default SnowfallEffect
