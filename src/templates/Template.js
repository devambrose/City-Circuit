import React from "react"

export function Loader(){
    return(
        <>
        <div className="lds-roller">
            <div></div><div></div>
            <div></div><div></div>
            <div></div><div></div>
            <div></div><div></div>
        </div>
        </>
    )
} 
export function Coin (props){

    return(
        <div className='app-round coin'>
            <i className={props.icon}></i>
            <p>{props.name}</p>
        </div>
    )
}