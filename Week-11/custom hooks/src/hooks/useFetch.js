import React, { useEffect, useState } from "react";

export function usePostTitle()
{
    const [post,setPost]=useState({});

    async function getPosts()
    {
        const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");

        const json=await response.json();
        setPost(json);
    }

    useEffect(()=>{
        getPosts();
    },[])

    return post.title;
}

export function useFetch(url)
{
    const [finalData,setFinalData]=useState({});
    const [loading,setLoading]=useState(true);

    async function getData()
    {
        setLoading(true);
        const response=await fetch(url);
        const json=await response.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(()=>{
        getData();
    },[url])


    //just to make useFetch good 
    //resending request to backend to check if the backend data is changed or not
    //to get real time data

    useEffect(()=>{
        setInterval(getData,10*1000);  //every 10 sec
    },[]);

    // write cleanup code

    //can ask question to add retry time here 10sec the user will give retry time
    // https://jsonplaceholder.typicode.com/posts/ + postno + retrytime
    //week 11-1 at 54min
    return {
        finalData,
        loading};
}