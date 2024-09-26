import React from 'react'
import './lodo-squire.css'
const Lodosquire = (props) => {
  return (
    <>
      <div className="lodo-squire-parent" style={{backgroundColor:props.bg,borderRadius:props.brr}}>
        <div className="lodo-squire-child" >
            <div className="circle-div" style={{backgroundColor:props.bg}}></div>
            <div className="circle-div" style={{backgroundColor:props.bg}}></div>
            <div className="circle-div" style={{backgroundColor:props.bg}}></div>
            <div className="circle-div" style={{backgroundColor:props.bg}}></div>
        </div>
      </div>
    </>
  )
}

export default Lodosquire
