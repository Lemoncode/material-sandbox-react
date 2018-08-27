import { createStyles } from '@material-ui/core/styles';

export default () => createStyles({
  container: {
    display: 'flex',
    flexShrink: 0,
    flexDirection: 'column',
    margin: '2rem',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  action: {
    margin: '0 0.5rem',
    userSelect: 'none',
    cursor: 'pointer',
  },
  disabledAction: {
    opacity: 0.2,
    cursor: 'none',
  },
  collection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    minWidth: '300px',
    padding: '0.25rem',
    margin: '0.5rem',
    backgroundColor: 'lightgray',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
    userSelect: 'none',
    cursor: 'pointer',
  },
  selectedItem: {
    boxShadow: '0 0 10px black',
  },
  itemTitle: {},
  itemContent: {},
});
