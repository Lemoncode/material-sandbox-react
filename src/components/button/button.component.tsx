import * as React from 'react';
import Button from '@material-ui/core/Button';
import style from './button.style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

interface MyButtonProps extends WithStyles<typeof style>{
  label: string;
}

class MyButtonInner extends React.PureComponent<MyButtonProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button
        variant="raised"
        color="primary"
        classes={{
          root: this.props.classes.root,
          label: this.props.classes.label,          
        }}
      >
        {this.props.label}
      </Button>
    );
  }
};

export const MyButton = withStyles(style)<MyButtonProps>(MyButtonInner);
