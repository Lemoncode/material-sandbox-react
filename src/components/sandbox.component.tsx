import * as React from 'react';
import { MyButton } from './button';
import { MyList } from './list';
import { MyInput } from './input/input.component';
import * as style from './sandbox.style';

export const Sandbox: React.StatelessComponent<{}> = (props) => {
  return (
    <div className={style.pageContainer}>
      <MyButton label="Button" />
      <MyList />
      <MyInput />
    </div>
  );
};
