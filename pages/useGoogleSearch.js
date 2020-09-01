import  { useState, useEffect} from 'react'
import API_KEY from './keys'

const CONTEXT_KEY="d59e42b33286ca6fd"

const useGoogleSearch =(term) => {// in this file useGoogleSearch.js file we had created a custom hook
    const [data, setData]=useState(null)// when era is a input this hook is called

    useEffect(() =>// async effect
    {
        const fetchData= async()=>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json()) 
            .then(result =>{
                setData(result)
            })
        }

        fetchData()

    },[term])//data layer variable
  return {data}
}

export default useGoogleSearch
