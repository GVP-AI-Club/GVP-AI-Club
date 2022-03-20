import { Box,Grid } from "@mui/material";
import React from 'react'
import Card from "../component/CommunityCard"
import data from "../component/Teamdata.js"

function createCard(data){
  return ( <Card
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


function Events() {
  return (
    <Box style={ {backgroundColor:"#08022A"}}>

      <Grid container spacing={0} style={{paddingTop:50}}>
        {data.map(createCard)}
      </Grid>
    </Box>
      
  );
}
export default Events;