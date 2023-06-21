import '../css/sightseeing.css'
// import Touristattraction from '../components/touristattraction'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Sightseeing() {
  const [sightseeing, setSightseeing] = useState(null)

  useEffect(() => {
    fetch('/sightseeing.json')
      .then((response) => response.json())
      .then((touristResult) => {
        setSightseeing(touristResult.sightseeing)
      })
  }, [])
  return (
    <>
      <h1>Sightseeing</h1>
      <div className="touristattractions">
        {sightseeing && (
          <ul className="tourismUl">
            {sightseeing.map((tourism) => (
              <li key={tourism.id} className="touristlist">
                <Link to={`/sightseeing/${tourism.touristattraction}`}>
                  <h2>{tourism.touristattraction}</h2>
                  <p>Time to get there from the apartment: {tourism.time}</p>
                  <img
                    src={tourism.picture}
                    alt="Tourist attraction images"
                    className="touristImages"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Sightseeing
