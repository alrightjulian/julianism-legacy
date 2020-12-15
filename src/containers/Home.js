import { Container, makeStyles } from "@material-ui/core";
import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";

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
    paddingTop: theme.spacing(8),
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Hero />
      <Container className={classes.container}>
        <InfoCard />
      </Container>
    </>
  );
}

export default Home;
