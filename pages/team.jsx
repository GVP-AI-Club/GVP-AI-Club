import { Box,Grid } from "@mui/material";
import React from 'react'
import Team from "../component/Teamcard.jsx"
import data from "../component/Teamdata.js"

function createCard(data){
  return ( <Team
               key={data.id}
               img={data.img}
               title={data.title}
               desc={data.desc}
               inst={data.inst}
               fac={data.fac}
               twt={data.twt}
           />
  );
}


function Teamm() {
  return (
    <Box style={ {backgroundColor:"#08022A"}}>

      <Grid container spacing={1} style={{paddingTop:50}}>
        {data.map(createCard)}
      </Grid>
    </Box>
      
  );
}
export default Teamm;