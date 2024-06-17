import { useState, useEffect } from "react"

export const Search = () => {
    const [searchBar, setSearchBar] = useState()

    useEffect(()=>{
        fetch('https://podcast-api.netlify.app')
        .then(response => response.json())
        .then(data => setSearchBar(data))
        .catch(error => {throw error})
    })

    return(
        <></>
    )
}