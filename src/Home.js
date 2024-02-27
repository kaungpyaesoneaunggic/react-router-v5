import BlogList from "./BlogList";
import useFetch from "./useFetch";
import React from 'react'

export default function Home() {
  const { error, isPending, data: blogs } = useFetch('https://json-server-vercel-kpsa.vercel.app/blogs/')
  return (
    
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  )
}

