import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  placeholder: {
    paddingLeft: theme.spacing(2),
  },
}));
