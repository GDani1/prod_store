
import React, { useState } from 'react'
import classes from './Counter.module.scss'
type Props = {}

export const Counter = () => {

    const [count, setCount]=useState(0)

  return (
    <div className={classes.count} onClick={()=>setCount(count+1)}>{count}</div>
  )
}