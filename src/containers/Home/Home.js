import { Container, makeStyles } from "@material-ui/core";
import Hero from "../../components/Hero";
import InfoCard from "../../components/InfoCard";
import programming from "../../images/programming.svg";
import { PROGRAMMING_SECTIONS, PROGRAMMING_TITLE } from "./Constants";

const useStyles = makeStyles((theme) => ({
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
        <InfoCard
          sections={PROGRAMMING_SECTIONS}
          title={PROGRAMMING_TITLE}
          image={programming}
          imageRight={false}
        />
      </Container>
    </>
  );
}

export default Home;
