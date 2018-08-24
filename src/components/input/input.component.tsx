import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import style from './input.style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

interface MyInputProps extends WithStyles<typeof style> {
};

class MyInputInner extends React.PureComponent<MyInputProps, {}> {
  render () {
    return (
      <TextField
        classes={{root: this.props.classes.root}}
        label="Insert text"
        InputProps={{
          classes: {
            root: this.props.classes.input,
          }
        }}
        InputLabelProps={{
          classes: {
            root: this.props.classes.label,
          }
        }}
      />
    );
  }
};

export const MyInput = withStyles(style)<MyInputProps>(MyInputInner);
