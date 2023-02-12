import React, { useEffect } from 'react'
// import Storie s from "./components/stories";use
import { UseGlobalContext } from './Context';


const Stories = () => {
const {hits, isLoading , removePost} = UseGlobalContext();   
    // let isLoading = true;

if(isLoading)
    return(
    <>
        <h1>Loading...</h1>
    </>
    );

  return (
    <>
        {/* <h2>My Tech News Post</h2> */}
        <div className='stories_div'>
        {hits.map((curPost)=>{
            const {title, author, objectID, url,num_comments} = curPost;
            return (
                <>
                    <div className='card' key={objectID}>
                        <h2>{title}</h2>
                        <p>
                            By <span>{author}</span> | <span>{num_comments}</span> comments
                        </p>

                        <div className='card-button'>
                            <a href={url} target="_blank">
                                Read More
                            </a>
                            {/* if objectID is match then remove the post bocz all post have different objectID post so */}
                            <a href='#' onClick={() =>removePost(objectID)}>
                            Remove
                            </a>
                        </div>
                    </div>
                </>
            )
        }

        )}
        </div>
    </>
  )
};

export default Stories