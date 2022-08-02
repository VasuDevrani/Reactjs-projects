import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineChart({chartData}) {
  return (
    <div style={{width: '70%', margin: 'auto'}}>
        <Line data={chartData}/>
    </div>
  )
}
