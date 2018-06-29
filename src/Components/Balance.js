import React, { Component } from 'react';

const Balance =(props)=>{
    return <h3>{props.title}:<label> {props.balance}</label></h3>
}
export default Balance;