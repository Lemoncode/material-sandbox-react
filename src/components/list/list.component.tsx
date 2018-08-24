import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import * as style from './list.style';

export class MyList extends React.PureComponent<{}, {}> {
  render () {
    return (
      <List classes={{root: style.root}}>
        <ListItem classes={{root: style.item}} button>Item 1</ListItem>
        <ListItem classes={{root: style.item}} button>Item 2</ListItem>
        <ListItem classes={{root: style.item}} button>Item 3</ListItem>
      </List>
    );
  }
};
