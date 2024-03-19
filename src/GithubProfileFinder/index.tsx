import { useState } from 'react' 
import {useEffect} from 'react'
import User  from './UserCard'
import { leapfrog } from 'ldrs'

function GithubProfile() {
  
  const [userName, setUserName] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading,setLoading] = useState(true)
  function handleSubmit(){
    fetchInformation()  
  }

  async function fetchInformation(){
    setLoading(true)
    const fetched = await fetch(`https://api.github.com/users/${userName}`)
    const jsonFetched = await fetched.json()
    if(jsonFetched){
        setLoading(false)
        setUserData(jsonFetched)
        setUserName('')
    }
    console.log(jsonFetched)
  }

  useEffect(()=>{
   fetchInformation()
  },[])
  
  leapfrog.register()
  if(loading){
    return <h1 className=" font-bold ">
<l-leapfrog
  size="40"
  speed="2.5" 
  color="black" 
></l-leapfrog></h1>
  }
      
  return (
    <>
    <div className=" flex flex-col bg-gray-300 h-screen items-center justify-center gap-5">

    <div className="flex flex-row items-center justify-center gap-5">

    <input type="text" placeholder="Enter ur UserName" value={userName}
    onChange={(event)=>{setUserName(event.target.value)}}/>

    <button className=" bg-whited" onClick={handleSubmit}>Search</button> 
    </div>

    <div>
    {userData ? <User user={userData}/> : ""}
    </div>

    </div>
    </>
  )
}

export default GithubProfile




// Default values shown
