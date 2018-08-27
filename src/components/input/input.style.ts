export default () => ({
  root: {
    margin: '2rem',
    flexShrink: 0,
  },
  input: {
    border: '1px solid darkgray',
    borderRadius: 0,
    backgroundColor: 'lightgray',
    
    '&::before, &::after': {
      display: 'none',
    }
  },
  label: {
    zIndex: 2,
    color: 'white',
  },
});
