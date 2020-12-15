import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(4),
    },
    maxWidth: "70vw",
  },
  introTitle: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    boxDecorationBreak: "clone",
    textTransform: "uppercase",
    lineHeight: theme.typography.h4.lineHeight * 1.3,
  },
}));

const getTypographySections = (sections) => {
  const result = [];
  for (const section of sections) {
    result.push(<Typography paragraph="true">{section}</Typography>);
  }
  return result;
};

export default function InfoCard(props) {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={4}
        direction={props.imageRight ? "row-reverse" : "row"}
      >
        <Grid container item md={6} justify="center">
          <img className={classes.image} src={props.image} alt="programming" />
        </Grid>

        <Grid container item md={6} direction="column" justify="center">
          <Grid container item justify="center">
            <Grid item>
              <Typography
                variant="h4"
                display="inline"
                className={classes.introTitle}
              >
                {props.title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>{getTypographySections(props.sections)}</Grid>
        </Grid>
      </Grid>
    </>
  );
}
