import React from 'react'
import { Link } from 'react-router-dom'

const MushroomInfo = ({ data }) => {
  const linken = '/svamp/' + data.swedishName
  return (
    <div>

      {/*<Link to={linken}>{data.swedishName}</Link> <br /> */}

    </div>
  )
}
export default MushroomInfo
