import React from 'react'
import { Paper, Link} from '@mui/material'

export const NavBar = () => {
    const menue = [{name:'Latest',link:'#'},{name:'Top',link:'#'},{name:'Transfers',link:'#'},{name:'Matches',link:'#'},{name:'Contact Us',link:'#'},{name:'About',link:'#'}];
  return (
    <>
        <Paper elevation={3} sx={{display:'flex', justifyContent:'center',alignItems:'center',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}}} gutterBottom>
            {menue.map((links)=>{
                return (
                    <Link href={links.link}  variant='body' sx={{margin:{md:'1rem 1rem'},textDecoration:'none'}}>
                        {links.name}
                    </Link>
                )
            })}
        </Paper>
    </>
  )
}
