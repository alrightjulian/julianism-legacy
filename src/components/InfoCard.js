import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  image: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80vw",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "60%",
    },
  },
  infoTitle: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    boxDecorationBreak: "clone",
    textTransform: "uppercase",
    lineHeight: theme.typography.h4.lineHeight * 1.3,
  },
  infoDetail: {
    fontWeight: "lighter",
  },
}));

export default function InfoCard(props) {
  const classes = useStyles();

  const getTypographySections = (sections) => {
    const result = [];
    for (const [index, section] of sections.entries()) {
      result.push(
        <Typography key={index} paragraph={true} className={classes.infoDetail}>
          {section}
        </Typography>
      );
    }
    return result;
  };

  return (
    <>
      <Grid
        container
        className={classes.root}
        direction={props.imageRight ? "row-reverse" : "row"}
        justify="center"
        spacing={4}
      >
        <Grid
          container
          item
          xs={12}
          md={6}
          justify="center"
          alignItems="center"
        >
          <img className={classes.image} src={props.image} alt="programming" />
        </Grid>

        <Grid
          container
          item
          xs={12}
          md={6}
          spacing={2}
          direction="column"
          justify="center"
        >
          <Grid item>
            <Typography
              variant="h5"
              display="inline"
              className={classes.infoTitle}
            >
              {props.title}
            </Typography>
          </Grid>
          <Grid item>
            {getTypographySections(props.sections)}
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
