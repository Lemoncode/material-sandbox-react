import { createStyles } from "@material-ui/core/styles";

export default () => createStyles({
  pageContainer: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowY: 'auto',
  }
});
