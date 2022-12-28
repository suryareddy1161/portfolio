import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Staring.css'
const Staring = () => {
  const [person, setPerson] = useState([])
  const { id } = useParams()


  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}?embed=cast`).then((res) => {
      setPerson(res.data._embedded.cast)
      //console.log(responst.data)   
    })
  }, [])
  console.log(person)
  return (
    <div>
      <div>
        <h1 className='staring'>Starring</h1>
        <div className='cardst'>
          {
            person.map((ele, id) => {
              return (
                <div >
                  <div className='cardstr'>
                    <div>
                      <img className='imgstaring' alt="Avatar" src={ele.person.image.medium}></img>
                    </div>
                    <div className='namestarring'>{ele.person.name} as {ele.character.name}</div>
                    
                  </div>
                  <div className='barstaring'></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='bar'></div>
    </div>
  )
}

export default Staring
