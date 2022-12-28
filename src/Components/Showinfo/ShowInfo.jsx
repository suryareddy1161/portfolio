import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Showinfo.css'

const ShowInfo = () => {
    const [movie, setMovie] = useState({})
    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`).then((res) => {
            //console.log(res.data)
            setMovie(res.data)
            window.scrollTo(0,0)
        })
    }, [])
    console.log(movie)
    
  return (
    <div>
        <div className='showinfo'>
            <h1 >Show info</h1>
            </div>
            <div className='cardshow'>
                <div >
                    <div>
                        <h4>Streamed on</h4>
                          <span>{movie.network?.name}</span>  
                    </div>
                    <div>
                        <h4>Status</h4>
                        <span>{movie.status}</span>
                    </div>
                </div>
                <div >
                    <div>
                        <h4>sheduled</h4>
                         <span>{movie.schedule?.days}</span>  
                    </div>
                    <div>
                        <h4>Geners</h4>
                        {
                            movie && movie.genres ?
                            movie.genres.map((item)=>{
                                return(
                                    <span >{item}</span>
                                )
                            })
                            :
                            " "
                        }
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default ShowInfo
