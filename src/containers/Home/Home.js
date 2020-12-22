import { Button, Container, Fab, Grid, makeStyles } from "@material-ui/core";
import { Aws, Spotify } from "mdi-material-ui";
import Hero from "../../components/Hero";
import InfoCard from "../../components/InfoCard";
import { INFO_CARD_DATA } from "./Constants";
import {
  CONTACT_LINK,
  AWS_TRANSCRIPT_LINK,
  GITHUB_LINK,
  LINKED_IN_LINK,
  SPOTIFY_PLAYLIST_LINK,
} from "../../utils/constants";
import { GitHub, LinkedIn, Send } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function Home() {
  const classes = useStyles();
  const data = INFO_CARD_DATA;
  return (
    <>
      <Hero />
      <Container className={classes.container}>
        <InfoCard
          title={data.programming.title}
          sections={data.programming.sections}
          image={data.programming.image}
          imageRight={true}
        >
          <Grid container spacing={2}>
            <Grid item>
              <Button
                href={LINKED_IN_LINK}
                target="_blank"
                variant="contained"
                color="secondary"
              >
                <LinkedIn />
              </Button>
            </Grid>
            <Grid item>
              <Button
                href={GITHUB_LINK}
                target="_blank"
                variant="contained"
                color="secondary"
              >
                <GitHub />
              </Button>
            </Grid>
            <Grid item>
              <Button
                href={AWS_TRANSCRIPT_LINK}
                target="_blank"
                variant="contained"
                color="secondary"
              >
                <Aws />
              </Button>
            </Grid>
          </Grid>
        </InfoCard>
        <InfoCard
          title={data.music.title}
          sections={data.music.sections}
          image={data.music.image}
          imageRight={false}
        >
          <Grid container spacing={2}>
            <Grid item>
              <Button
                href={SPOTIFY_PLAYLIST_LINK}
                target="_blank"
                variant="contained"
                color="secondary"
              >
                <Spotify />
              </Button>
            </Grid>
          </Grid>
        </InfoCard>
        <InfoCard
          title={data.finance.title}
          sections={data.finance.sections}
          image={data.finance.image}
          imageRight={true}
        />
      </Container>
      <Fab
        className={classes.fab}
        href={CONTACT_LINK}
        target="_blank"
        color="secondary"
        disableFocusRipple={true}
      >
        <Send />
      </Fab>
    </>
  );
}

export default Home;
