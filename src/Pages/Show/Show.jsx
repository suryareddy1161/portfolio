import React from 'react'
import { useEffect } from 'react'
import './Show.css'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../../Components/Star/Star'
import arrowLeft from '../../Components/pictures/arrow-left.png'
import arrowRight from '../../Components/pictures/arrow-right.png'

const Show = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  useEffect(() => {
    axios.get('https://api.tvmaze.com/shows').then((res) => {
      //console.log(res.data)
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  console.log(data)
  const handlePage = (direction) => {
    if (direction === "next" && page < data.length / 30) {
      setPage(page + 1)
    } else if (direction === "previous" && page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <div>
      <div className='containers'>
        <div>
          <h1> 🆃🆅  🅱🅻🅰🅽🅳 </h1>
        </div>
      </div>
      <div className='showcontainer'>
        <h1>Last Added Shows</h1>
        <div className='cardcontainer'>

          {
            data.map((item, id) => {
              if (id + 1 <= page * 30 && id >= (page - 1) * 30) {
                return (
                  <div key={id} >
                    <div className='showh'>
                      <div className='card'>
                        <Link to={`/movie/${item.id}`}><img className='img' src={item.image.medium}></img></Link>
                        <Stars stars={item.rating.average} />
                        <div className='name'>{item.name}</div>
                      </div>
                    </div>
                  </div>
                )
              }
            }
            )
          }

        </div>
        <div className='btn' >
          <img className='btnprev' src={arrowLeft} onClick={() => handlePage("previous")} />
          <span className='page'>Page - {page}</span>
          <img className='btnnext' src={arrowRight} onClick={() => handlePage("next")} />
          <div className='bottombar'></div>
        </div>
        
      </div>
    </div>
  )
}

export default Show
