import * as React from 'react';
import Button from '@material-ui/core/Button';
import * as style from './button.style';

interface MyButtonProps {
  label: string;
}

export class MyButton extends React.PureComponent<MyButtonProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        variant="raised"
        color="primary"
        classes={{
          root: style.root,
          label: style.label,          
        }}
      >
        {this.props.label}
      </Button>
    );
  }
};
