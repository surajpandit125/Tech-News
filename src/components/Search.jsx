import React from 'react'
import { UseGlobalContext } from './Context'
const  search = () => {
  const {query, searchPost} = UseGlobalContext();
  return (
    <>
           <h1>Suraj pandit Website</h1>
           <from onSubmit={(e) =>e.preventDefault() }>
             <div>
              <input 
              type="text"
              placeholder="search here"
              value={query}
              onChange={(e) => searchPost(e.target.value)}
              />
             </div>
           </from>

</>
  )
}

export default search