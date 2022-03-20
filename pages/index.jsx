import Link from 'next/link';
import { Typography, Box, Grid, Button } from "@mui/material";
import logoAI from "../images/ai club logo.png"
import logoGDSC from "../images/gdsc logo.png"
import leftPlanet from "../images/left planet.png"
import rightPlanet from "../images/right planet.png"
import heading from "../images/Main Heading.png"
import fieldHeading from "../images/fields heading.png"
import teamHeading from "../images/team heading.png"
import eventsHeading from "../images/recent events.png"
import Event from "../component/EventCard"

import fippl from "../images/five people.png"
import coffeeLaptop from "../images/laptop coffee.png"
import oneStats from "../images/one man stats.png"
import statsAir from "../images/stats in air.png"
import twoComp from "../images/two girls comp.png"
import twoStats from "../images/two people stats.png"
// import './home.css'
import Image from 'next/image'
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  gridRight: {
    justifyContent: "right"
  },
  gridCenter: {
    marginTop: 170,
    justifyContent: "center"
  },
  gridLeft: {
    marginTop: 170,
    justifyContent: "left"
  },
  padTop: {
    paddingTop: 120,
  },
  righttext: {
    color: "#817C9D",
    paddingLeft: 50,
    paddingRight: 200,
    textAlign: "justify",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  lefttext: {
    color: "#817C9D",
    paddingLeft: 165,
    paddingRight: 135,
    marginTop: -70,
    textAlign: "justify",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,

    },
  },
  webGrid: {
    marginTop: 100,
    justifyContent: "center"
  },
  webRight: {
    marginTop: 50,
    justifyContent: "left"
  },
  fieldsLeftHeading: {
    color: "#9895aa",
    fontWeight: "bold",
    paddingTop: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: -100,
    },
  },
  fieldsRightHeading: {
    color: "#9895aa",
    fontWeight: "bold",
    paddingTop: 30,
    [theme.breakpoints.down("sm")]: {
      marginTop: -100,
    },
  },
  footerHeading: {
    color: "#9895aa",
    fontWeight: "bold",
    paddingTop: 30,
  },
  fieldsLeftText: {
    color: "#817C9D",
    paddingLeft: 165,
    paddingRight: 135,
    marginTop: -70,
    textAlign: "justify",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 70,
    },
  },
  fieldsTop: {
    [theme.breakpoints.down("sm")]: {
      marginTop: -100
    },
  },
  teamText: {
    color: "#817C9D",
    paddingLeft: 165,
    paddingRight: 135,
    marginTop: 70,
    textAlign: "justify",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
      marginTop: -70,
    },
  },
  link: {
    textDecoration: "none",
    color: "#817C9D",
    fontSize: "17px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
  navlinks: {
    display: "flex",
    marginLeft: theme.spacing(10),
    marginBottom: theme.spacing(7),
    marginTop: 50
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Box style={{ backgroundColor: "#08022A" }}>
      <Grid container spacing={1}>
        <Grid item xs={12} lg={6} md={6} className="padBack">

          <Grid container spacing={1} className={classes.padTop}>
            <Grid item xs={6} container className={classes.gridRight}>
              <Image src={logoAI} className="zoom-in-out-box moveMobile"/>
              <Image src={leftPlanet} className="moveDown remove"/>
            </Grid>




            <Grid item xs={6} container className={classes.gridCenter}>
              <Image src={rightPlanet} className="moveUp remove" />
              <Image src={logoGDSC} className="zoom-in-out-box paddLeft moveMobile" />
            </Grid>
          </Grid>

        </Grid>





        <Grid item container xs={12} lg={6} md={6} className={classes.gridLeft}>

          <Image src={heading} className="heading"/>
          <Typography className={classes.righttext}>We are a  passionate group of people who work towards
            bringing a change in the ecosystem of development around the campus.
            We want to create a healthy environment for the budding developers
            to create solutions for real life problems and promote the "developers"
            culture.</Typography>
          <div className="glass-toolbar">
            <Link href='/events' passHref>
              <Button className="glass-button"
              >RSVP to Events</Button>
            </Link>
          </div>
        </Grid>
      </Grid>


      {/* // ----- fields heading ------ */}
      <Grid container spacing={1} className={classes.fieldsTop}>
        <Grid item container xs={12} lg={12} md={12} style={{ justifyContent: "center", marginTop: 50 }} >
          <Image src={fieldHeading} className="fields-heading"></Image>
        </Grid>
      </Grid>



      <Grid container spacing={1}>
        <Grid item xs={12} lg={6} md={6} container className={classes.webGrid}>
          <Typography variant="h4" className={classes.fieldsLeftHeading}>Web Development </Typography>
          <Typography className={classes.fieldsLeftText}>We are a  passionate group of people who work towards
            bringing a change in the ecosystem of development around the campus.
            We want to create a healthy environment for the budding developers
            to create solutions for real life problems and promote the "developers"
            culture.</Typography>
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className={classes.webRight}>
          <Image
            effect="opacity"
            className="vert-move field-image"
            src={twoStats} />
        </Grid>
      </Grid>

      {/* // ---- ML ----- */}

      <Grid container spacing={1} >
        <Grid item xs={12} lg={6} md={6} container style={{ justifyContent: "right", marginTop: 50, }}>
          <Image
            effect="opacity"
            className="vert-move field-hide-image"
            src={oneStats} />
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className={classes.webGrid}>
          <Typography variant="h4" className={classes.fieldsRightHeading}>Machine Learning</Typography>
          <Typography className={classes.fieldsLeftText}>We are a  passionate group of people who work towards
            bringing a change in the ecosystem of development around the campus.
            We want to create a healthy environment for the budding developers
            to create solutions for real life problems and promote the "developers"
            culture.</Typography>
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className="field-reveal-image">
          <Image
            effect="opacity"
            className="vert-move field-reveal-image"
            src={oneStats} />
        </Grid>
      </Grid>


      {/* // ---- App dev ----- */}


      <Grid container spacing={1}>
        <Grid item xs={12} lg={6} md={6} container className={classes.webGrid}>
          <Typography variant="h4" className={classes.fieldsLeftHeading}>App Development </Typography>
          <Typography className={classes.fieldsLeftText}>We are a  passionate group of people who work towards
            bringing a change in the ecosystem of development around the campus.
            We want to create a healthy environment for the budding developers
            to create solutions for real life problems and promote the "developers"
            culture.</Typography>
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className={classes.webRight}>
          <Image
            effect="opacity"
            className="vert-move field-image"
            src={fippl} />
        </Grid>
      </Grid>


      {/* // ---- Cloud Computing ----- */}

      <Grid container spacing={1} >
        <Grid item xs={12} lg={6} md={6} container style={{ justifyContent: "right", marginTop: 50, }}>
          <Image
            effect="opacity"
            className="vert-move field-hide-image"
            src={statsAir} />
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className={classes.webGrid}>
          <Typography variant="h4" className={classes.fieldsRightHeading}>Cloud Computing</Typography>
          <Typography className={classes.fieldsLeftText}>We are a  passionate group of people who work towards
            bringing a change in the ecosystem of development around the campus.
            We want to create a healthy environment for the budding developers
            to create solutions for real life problems and promote the "developers"
            culture.</Typography>
        </Grid>
      </Grid>

      {/* // ----- RECENT EVENTS ----- */}

      <Grid container spacing={1} className="web-grid">
        <Grid item container xs={12} lg={12} md={12} style={{ justifyContent: "center" }} >
          <Image src={eventsHeading} className="fields-heading"></Image>
        </Grid>
      </Grid>


      <Grid container >

        <Event />
        <Event />
        <Event />

      </Grid>


      <Grid container spacing={1} style={{ justifyContent: "center" }}>
        <Link href='/team' passHref>
          <div className="glass-toolbar">
            <Button className="glass-button" >More Events</Button>
          </div>
        </Link>
      </Grid>

      {/* // ------ TEAM ----- */}


      <Grid container spacing={1} className="web-grid">
        <Grid item container xs={12} lg={12} md={12} style={{ justifyContent: "center" }} >
          <Image src={teamHeading} className="fields-heading"></Image>
        </Grid>
      </Grid>


      <Grid container spacing={1}>
        <Grid item xs={12} lg={6} md={6} container className={classes.webGrid}>
          <Typography className={classes.teamText}>We are a  passionate group of people who work towards
            bringing a change in the ecosystem of development around the campus.
            We want to create a healthy environment for the budding developers
            to create solutions for real life problems and promote the "developers"
            culture.</Typography>
        </Grid>

        <Grid item xs={12} lg={6} md={6} container className={classes.webRight}>
          <Image
            effect="opacity"
            className="vert-move field-image"
            src={twoComp} />
        </Grid>
      </Grid>

      <Grid container spacing={1} style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Link href="/team" passHref>
        <div className="glass-toolbar">
          <Button className="glass-button" >Meet the team</Button>
        </div>
        </Link>
      </Grid>

    </Box>
  );
}
export default Home;