import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import Hero from "../components/Hero";
import programming from "../images/programming.svg";

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
  container: {
    marginTop: theme.spacing(4),
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Hero />
      <Container className={classes.container}>
        <Grid container spacing={4} direction="row">
          <Grid container item md={6} justify="center">
            <img
              className={classes.image}
              src={programming}
              alt="programming"
            />
          </Grid>
          <Grid
            container
            item
            md={6}
            spacing={2}
            direction="column"
            justify="center"
          >
            <Grid item>
              <Typography
                variant="h4"
                display="inline"
                className={classes.introTitle}
              >
                a software developer by profession.
              </Typography>
            </Grid>
            <Grid item>
              <Typography paragraph="true">
                I have about a year of professional experience as a software
                engineer. I've worked with <b>AngularJS</b>, <b>Grails</b> using{" "}
                <b>Java</b> and <b>Groovy</b>.
              </Typography>
              <Typography>
                In my spare time, I enjoy learning new technologies on the side.
                I've been enjoying <b>React</b> and{" "}
                <b>Serverless Architecture</b>.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
