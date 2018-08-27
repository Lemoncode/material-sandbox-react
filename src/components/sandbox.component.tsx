import * as React from 'react';
import { MyButton } from './button';
import { MyList } from './list';
import { MyInput } from './input/input.component';
import { MyCarousel } from './carousel';
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
      <MyCarousel classes={{
        item: props.classes.carouselItemA,
        itemTitle: props.classes.carouselItemTitleA,
      }} />
      <MyCarousel classes={{
        item: props.classes.carouselItemB,
        itemTitle: props.classes.carouselItemTitleB,
      }} />
    </div>
  );
};

export const Sandbox = withStyles(style)<SandboxProps>(SandboxInner);
