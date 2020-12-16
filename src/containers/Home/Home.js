import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import { Aws, Spotify } from "mdi-material-ui";
import Hero from "../../components/Hero";
import InfoCard from "../../components/InfoCard";
import programming from "../../images/programming.svg";
import music from "../../images/music.svg";
import finance from "../../images/finance.svg";
import {
  PROGRAMMING_SECTIONS,
  PROGRAMMING_TITLE,
  MUSIC_TITLE,
  MUSIC_SECTIONS,
  FINANCE_TITLE,
  FINANCE_SECTIONS,
} from "./Constants";
import {
  AWS_TRANSCRIPT_LINK,
  GITHUB_LINK,
  LINKED_IN_LINK,
  SPOTIFY_PLAYLIST_LINK,
} from "../../utils/constants";
import { GitHub, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <>
      <Hero />
      <Container className={classes.container}>
        <InfoCard
          title={PROGRAMMING_TITLE}
          sections={PROGRAMMING_SECTIONS}
          image={programming}
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
          title={MUSIC_TITLE}
          sections={MUSIC_SECTIONS}
          image={music}
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
          title={FINANCE_TITLE}
          sections={FINANCE_SECTIONS}
          image={finance}
          imageRight={true}
        />
      </Container>
    </>
  );
}

export default Home;
