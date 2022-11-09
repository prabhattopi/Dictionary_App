import { useContext, useEffect, useState } from "react"
import { InputContext } from "../App";
import Antonyms from "./Antonyms";
import Example from "./Example";
import Meaning from "./Meaning";
import Synonym from "./Synonym";


const Results = () => {

    const [response,setResponse]=useState(null)
    const [error,setError]=useState("")
    const { inputValue} = useContext(InputContext);
    const [loading,setLoading]=useState(false)

    const fetchData=async(param)=>{
        try{
            setLoading(true)
            const res=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${param}`)
            setResponse(await res.json())
            setError(null)
        }
        catch(err){
            setError(error)
        }
        finally{
            setLoading(false)
        }

    }
    useEffect(()=>{
    if(inputValue.length){
        fetchData(inputValue)
    }    return ()=>fetchData

    },[inputValue])
  if(loading){
    return (
      <div className="flex flex-col space-y-3 animate-pulse p-4 mx-auto max-w-2xl">
         <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
         <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
         <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
         <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
        
      </div>
    )
  }
  if(error){
    return <h3 className="text-center mt-10 font-semibold text-gray-500">No Definisions Found 😥</h3>
  }
  return (
    <div className="container mx-auto p-4 max-w-2xl">
     {
        response&&(
        <div>
        <h3 className="text-2xl font-bold mt-4">Meaning & Defination</h3>
        <Meaning  mean={response}/>
        <h3 className="text-2xl font-bold mt-4">Example:</h3>
        <Example  mean={response}/>
        <h3 className="text-2xl font-bold mt-4">Synonym:</h3>
        <Synonym mean={response}/>
        <h3 className="text-2xl font-bold mt-4">Antonym:</h3>
        <Antonyms mean={response}/>
     </div>
        )
     }

    </div>
  )
}

export default Results