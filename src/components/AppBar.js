import {
  AppBar as MUIAppBar,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { EmojiEmotionsOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  left: {
    marginRight: theme.spacing(2),
  },
}));

function AppBar() {
  const classes = useStyles();
  return (
    <MUIAppBar position="static">
      <Toolbar>
        <EmojiEmotionsOutlined className={classes.left} />
        <Typography variant="h6">Julianism</Typography>
      </Toolbar>
    </MUIAppBar>
  );
}

export default AppBar;
