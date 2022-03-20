import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import Link from 'next/link';
import Drawer from "./Drawer";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({

  navlinks: {
    marginLeft: theme.spacing(22),
    paddingTop: 30
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  root: {
    background: "#08022A",
    marginTop: -35,
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
}));



const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className={classes.root}>
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <Drawer />
        ) : (
          <div className={classes.navlinks}>
            <Link href="/" className={classes.link}>
              HOME
            </Link>
            <Link activeStyle={{ color: 'white' }} href="/events" className={classes.link}>
              EVENTS
            </Link>
            <Link activeStyle={{ color: 'white' }} href="/community" className={classes.link}>
              COMMUNITY
            </Link>
            <Link activeStyle={{ color: 'white' }} href="/team" className={classes.link}>
              TEAM
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
