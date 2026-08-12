import React, { useEffect, useState } from 'react'
import { data } from 'react-router'
import { useLoaderData } from 'react-router'

function Github() {

  const data = useLoaderData()

  // const [data,setData] = useState([])

  // useEffect(()=>{
  //   fetch("https://api.github.com/users/1024sarvesh")
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //     setData(data)
  //   })
  // },[])

  return (
    <div className='text-center text-white bg-gray-600 m-4 p-4 text-3xl'>Github Followers:{data.followers}
    <img src={data.avatar_url} alt="Git_Picture" width={250} />
    </div>
    
  )
}

export default Github



export const githubInfo = async()=>{
  const res = await fetch("https://api.github.com/users/1024sarvesh")
  return res.json()
}