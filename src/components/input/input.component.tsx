import * as React from 'react';
import TextField from '@material-ui/core/TextField';

const style = require("./input.style.scss");

export class MyInput extends React.PureComponent<{}, {}> {
  render () {
    return (
      <TextField
        className={style.textFieldStyle}
        label="Insert text"
      />
    );
  }
};
