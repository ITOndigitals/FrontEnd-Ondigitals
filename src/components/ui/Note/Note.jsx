import classes from "./Note.module.scss"
import React from 'react'

export default function Note({isSuccess,icon, backgroundColor,content}) {
  return (
   <>
   <div className={classes["notification"]} style={{backgroundColor:`${backgroundColor}`}}>
    {icon}
    <p>{content}</p>
   </div>
   </>
  )
}
