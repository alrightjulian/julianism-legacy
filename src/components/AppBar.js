import {
  AppBar as MUIAppBar,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { EmojiEmotionsOutlined, LinkedIn } from "@material-ui/icons";
import { LINKED_IN_LINK } from "../utils/constants";

const useStyles = makeStyles((theme) => ({
  left: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
}));

function AppBar() {
  const classes = useStyles();
  return (
    <>
      <MUIAppBar position="static">
        <Toolbar>
          <EmojiEmotionsOutlined className={classes.left} />
          <Typography className={classes.title} variant="h6">
            Julianism
          </Typography>
          <Link target="_blank" href={LINKED_IN_LINK} color="inherit">
            <LinkedIn />
          </Link>
        </Toolbar>
      </MUIAppBar>
    </>
  );
}

export default AppBar;
