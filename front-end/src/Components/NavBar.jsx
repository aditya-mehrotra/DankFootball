import React from 'react'
import { Paper,Tabs,Tab} from '@mui/material'
import { useState,useEffect } from 'react';

export const NavBar = (props) => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        
    };
    useEffect(()=>{
        props.tabValues(value);
    },[value])
    useEffect(()=>{
        setValue(props.newValue);
    },[props.newValue])
    const menue = [{name:'Latest',link:'#'},{name:'Top',link:'#'},{name:'Transfers',link:'#'},{name:'Matches',link:'#'},{name:'Contact Us',link:'#'},{name:'About',link:'#'}];
  return (
    <>
        <Paper elevation={3} sx={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}}} gutterBottom>
        <Tabs
        value={value}
        onChange={handleChange}
        aria-label="navigation bar"
      >
            {menue.map((links,idx)=>{
                return (
                    <Tab value={idx} label={links.name} />
                )
            })}
            </Tabs>
        </Paper>
        
    </>
  )
}
