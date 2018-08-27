import * as React from 'react';
import { MyButton } from './button';
import { MyList } from './list';
import { MyInput } from './input/input.component';
import { MyCarousel } from './carousel';
const style = require('./sandbox.style.scss');

export const Sandbox: React.StatelessComponent<{}> = (props) => {
  return (
    <div className={style.pageContainer}>
      <MyButton label="Button" />
      <MyList />
      <MyInput />
      <MyCarousel userStyle={{
        item: style.carouselItemA,
        itemTitle: style.carouselItemTitleA,
      }} />
      <MyCarousel userStyle={{
        item: style.carouselItemB,
        itemTitle: style.carouselItemTitleB,
      }} />
    </div>
  );
};
