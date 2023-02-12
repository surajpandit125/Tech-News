//Context creation 
//Provider
//Consumer lenghty remove useContext hook
//UseContext hook

import React, { useContext, useState , useReducer,useEffect} from "react";
import reducer from "./reducer";
import search from "./Search";


let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading : true,
    query :" ",
    nbPages :0,
    page : 0,
    hits : [],
};
const AppContext = React.createContext();



// then create a provider function 
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer , initialState);


    const fecthApiAData = async (url) =>{

        dispatch({type:"SET_LOADING"});
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);

            dispatch({
                type:"GET_STORIES",
                payload:{
                    hits:data.hits,
                    nbPages:data.nbPages,
                },
            })

                
        }catch(error){
            console.log(error);
        }
    
};
//To remove the post
const removePost = (post_id) =>{
    dispatch({type: "REMOVE_POST", payload:post_id});

};
//Search 
const searchPost = (searchQuery) =>{
    dispatch({
    type: "SEARCH_QUERY",
 payload: searchQuery,
});
}
useEffect(() => {
    fecthApiAData( `${API}query=${state.query}&page=${state.page}`);
},[state.query]);


    return <AppContext.Provider value={{...state,removePost,searchPost}}>
    {children}
    </AppContext.Provider>
};


//custom hook create
const UseGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider , UseGlobalContext};