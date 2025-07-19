"use client"
import React, { useEffect, useState } from 'react'
import Snowfall from 'react-snowfall'

const SnowfallEffect = () => {


  return (
    <div className="fixed -z-1">
      <Snowfall wind={[0, 0]} radius={[0.4, 0.1]} snowflakeCount={90} speed={[1, 2]} style={{
        top: 0,
        left: 0,
        width: '200rem',
        height: '100vh',
      }} />
    </div>
  )
}

export default SnowfallEffect
