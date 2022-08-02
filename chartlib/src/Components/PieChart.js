import React from 'react'
import { Pie } from 'react-chartjs-2'

export default function PieChart({chartData}) {
  return (
    <div style={{width: '70%', margin: 'auto'}}>
        <Pie data={chartData}/>
    </div>
  )
}
