import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const Chart = () => {
  const d3Chart = useRef()

  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/qdq3-9eqn.json')
      .then((response) => response.json())
      .then((data) => {
        const dates = [...new Set(data.map((each) => each.day.slice(0, 10)))]
        console.log(dates)

        let countsByDate = []
        dates.map((time) => {
          let date = time
          let count = 0

          return time
        })
      })
  })

  return (
    <div id='d3-container'>
      <svg ref={d3Chart}></svg>
    </div>
  )
}

export default Chart
