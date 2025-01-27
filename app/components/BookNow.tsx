"use client"
import React from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
const BookNow = () => {
    useEffect(()=>{
        (async function () {
          const cal = await getCalApi({"namespace":"30min"});
          cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])
  return (
    <div className='w-full h-full flex flex-col items-center gap-12'>
      <h1 className='text-6xl text-white font-semibold font-body'>We'd love to help.</h1>
        <Cal namespace="30min"
	  calLink="fahad-n8uphu/30min"
	  style={{width:"100%",height:"100%",overflow:"scroll"}}
	  config={{"layout":"month_view"}}/>;
    </div>
  )
}

export default BookNow