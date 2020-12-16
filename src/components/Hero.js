import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(4),
    backgroundImage:
      "url(https://images.unsplash.com/photo-1519181258491-889c2b001485?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    rigth: 0,
    left: 0,
  },
  introTypography: {
    textTransform: "uppercase",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    boxDecorationBreak: "clone",
  },
  subIntroTypography: {
    textTransform: "uppercase",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: theme.spacing(1),
    lineHeight: theme.typography.body1.lineHeight * 1.4,
    boxDecorationBreak: "clone",
    fontWeight: "bold",
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div className={classes.overlay} />
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <Typography
            display="inline"
            className={classes.introTypography}
            variant="h4"
          >
            I'm Julian.
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Typography
            display="inline"
            variant="body1"
            className={classes.subIntroTypography}
          >
            I go by many things, a software engineer, guitar player and finance
            enthusiast.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Hero;
