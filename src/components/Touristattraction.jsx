// Källa/Inspiration: https://medium.com/@ariefbadal21/learn-reactjs-with-me-array-find-dbbdeafe4633

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styled from 'styled-components'

const DivT = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const PS = styled.p`
  font-size: 20px;
`

function Touristattraction() {
  const { id } = useParams()
  const [sightseeing, setSightseeing] = useState(null)
  useEffect(() => {
    fetch('./sightseeing.json')
      .then((response) => response.json())
      .then((touristResult) => {
        setSightseeing(touristResult.sightseeing)
      })
  }, [])
  const tourismLink =
    sightseeing &&
    sightseeing.find((idParam) => idParam.touristattraction === id)
  return (
    <>
      <DivT>
        {tourismLink && (
          <>
            <h1>{id}</h1>
            <PS>Time to get there from the apartment: {tourismLink.time}</PS>
            <img
              src={tourismLink.picture}
              alt="Tourist attraction images"
              className="touristImages"
            />
            <PS>Description:</PS>
            <PS>{tourismLink.description}</PS>
          </>
        )}
      </DivT>
    </>
  )
}

export default Touristattraction
