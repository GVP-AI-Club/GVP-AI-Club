import { Grid } from "@mui/material";
import React from 'react'
// import './eventCard.css'

const Event = ({ image, type, title, date, url }) => {
  return (
    <Grid item container xs={12} lg={4} md={4} style={{ justifyContent: "center" }} >
      <a href={url}>
        <div className="containero">
          <div className="cardo">
            <div className="contento">
              <div className="imgOuto">
                <img src={image} />
              </div>
              <div className="contentBxo">
                <h3>{title}</h3>
                <h4>{date}</h4>
                <p>{type} </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Grid>
  );
}
export default Event;
