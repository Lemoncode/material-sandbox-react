import * as React from 'react';
import { MyButton } from './button';
import { MyList } from './list';
import { MyInput } from './input/input.component';
import style from './sandbox.style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

interface SandboxProps extends WithStyles<typeof style> {
};

const SandboxInner: React.StatelessComponent<SandboxProps> = (props) => {
  return (
    <div className={props.classes.pageContainer}>
      <MyButton label="Button" />
      <MyList />
      <MyInput />
    </div>
  );
};

export const Sandbox = withStyles(style)<SandboxProps>(SandboxInner);
