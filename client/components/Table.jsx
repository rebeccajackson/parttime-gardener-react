import React from 'react'
import {Link} from 'react-router-dom'

import months from '../../data/months'


const Table = ({match}) => {
  const monthsArr = months.months

  return(

    <div className='table'>
      
      <div className='months-header grid12'>
        {monthsArr.map(index => 
          <div className={`${index.season} ${index.name} month-letter`}>
            <Link to={`${match.url}/months`}>
                {index.name.charAt(0)}
            </Link> 
          </div>
        )}
      </div>
    
      <div className='planting-month'>

      </div> 
    </div>

  )
}

export default Table