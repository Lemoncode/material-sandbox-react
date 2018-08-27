import { createStyles } from "@material-ui/core/styles";

export default () => createStyles({
  '@global': {
    body: {
      height: '100vh',
      width: '100vw',
      margin: 0,
      fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
    },
  },
  pageContainer: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowY: 'auto',
  },
  carouselItemA: {
    backgroundColor: 'white',
  },
  carouselItemTitleA: {
    color: 'red',
  },
  carouselItemB: {
    borderRadius: '10px',
  },
  carouselItemTitleB: {
    color: 'green',
  }
});
