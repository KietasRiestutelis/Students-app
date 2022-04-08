import React from 'react'
import { useSearchParams } from "react-router-dom"
import data from "../data/data.json";

// usesearchparams yra kaip hooksas.

function Users() {
    console.log(data);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchTerm = searchParams.get("name") || "";

    function handleSearch (e) {
        const name = e.target.value;

        if (name) {
            setSearchParams({name});
        } else {
            setSearchParams({});
        }
    }

  return (
    <div>
        <h1>Vartotojai</h1>
        <input type="text" value={searchTerm} onChange={handleSearch}/>
        <ul>
            {data
            .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((user, i)=>(<li key={i}>{user.name}, {user.age}</li>))}
        </ul>
    </div>
  )
}

export default Users