import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import * as style from './input.style';

export class MyInput extends React.PureComponent<{}, {}> {
  render () {
    return (
      <TextField
        classes={{root: style.root}}
        label="Insert text"
        InputProps={{
          classes: {
            root: style.input,
          }
        }}
        InputLabelProps={{
          classes: {
            root: style.label,
          }
        }}
      />
    );
  }
};
