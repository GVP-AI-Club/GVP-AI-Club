import React from 'react'
import useSWR from 'swr'
import { Box, Grid } from "@mui/material";
import Event from "../component/EventCard"
import { getFetcher } from '../utils/general';

const createCard = (data) => {
  return (
    <Event
      image={data.image}
      type={data.type}
      title={data.title}
      date={data.date}
      url={"https://gdsc.community.dev/"+data.url}
    />
  );
}


function Events() {
  const { data, error } = useSWR('/api/events', getFetcher)
  if (!data) return <div class="lds-ripple"><div></div><div></div></div>

  return (
    <Box style={{ backgroundColor: "#08022A" }}>

      <Grid container spacing={0} style={{ paddingTop: 50 }}>
        {data.map(createCard)}
      </Grid>
    </Box>

  );
}
export default Events;