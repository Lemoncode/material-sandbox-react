import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import style from './list.style';
import { withStyles, WithStyles } from '@material-ui/core/styles';

interface MyListProps extends WithStyles<typeof style> {
};

class MyListInner extends React.PureComponent<MyListProps, {}> {
  render () {
    return (
      <List classes={{root: this.props.classes.root}}>
        <ListItem classes={{root: this.props.classes.item}} button>Item 1</ListItem>
        <ListItem classes={{root: this.props.classes.item}} button>Item 2</ListItem>
        <ListItem classes={{root: this.props.classes.item}} button>Item 3</ListItem>
      </List>
    );
  }
};

export const MyList = withStyles(style)<MyListProps>(MyListInner);
