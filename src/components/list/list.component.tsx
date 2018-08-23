import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const style = require("./list.style.scss");

export class MyList extends React.PureComponent<{}, {}> {
  render () {
    return (
      <List classes={{root: style.root}}>
        <ListItem button>Item 1</ListItem>
        <ListItem button>Item 2</ListItem>
        <ListItem button>Item 3</ListItem>
      </List>
    );
  }
};
