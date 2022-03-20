import { Box, Grid, Typography,makeStyles } from "@mui/material";
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
// import './team.css'

function Team(props) {
  return (
  <Grid item container xs={12} lg={4}md={4} style={{justifyContent:"center"}} >
    <div className="containert">
      <div className="cardt">
        <div className="contentt">
          <p>{props.key}</p>
          <div className="imgBxt"> <img src={props.img}/></div>
          <div className="contentBxt">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
          </div>
        </div>
        <ul className="sci">
        <li>
          <a href={props.inst}><InstagramIcon/></a>
        </li>
        <li>
          <a href={props.fac}><FacebookIcon/></a>
        </li>
        <li>
          <a href={props.twt}><TwitterIcon/></a>
        </li>
      </ul>
      </div>
    </div>
    </Grid>
  );
}
export default Team;
