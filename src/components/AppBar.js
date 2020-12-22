import {
  AppBar as MUIAppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { EmojiEmotionsOutlined, LinkedIn, Send } from "@material-ui/icons";
import { LINKED_IN_LINK, CONTACT_LINK } from "../utils/constants";

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
          <IconButton
            href={LINKED_IN_LINK}
            target="_blank"
            color="inherit"
            disableFocusRipple={true}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            href={CONTACT_LINK}
            target="_blank"
            color="inherit"
            disableFocusRipple={true}
          >
            <Send />
          </IconButton>
        </Toolbar>
      </MUIAppBar>
    </>
  );
}

export default AppBar;
