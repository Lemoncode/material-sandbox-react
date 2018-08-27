import * as React from 'react';
import { CarouselItem, defaulItems } from './carousel.model';
import { WithStyles, withStyles } from '@material-ui/core';

import defaultStyle from './carousel.style';

interface MyCarouselState {
  items: CarouselItem[];
  selectedItemIndex: number; 
}

interface MyCarouselProps extends WithStyles<typeof defaultStyle> {
};

class MyCarouselInner extends React.PureComponent<MyCarouselProps, MyCarouselState> {
  constructor(props) {
    super(props);

    this.state = {
      items: defaulItems,
      selectedItemIndex: undefined,
    };
  }
  
  handleAdd = () => {
    this.setState({
      items: [...this.state.items, {
        title: 'Item',
        content: '...content...',
      }],
      selectedItemIndex: undefined,
    });
  }
  
  handleRemove = () => {
    if(this.state.selectedItemIndex >= 0) {
      this.setState({
        items: this.state.items.filter((item, index) => index !== this.state.selectedItemIndex),
        selectedItemIndex: undefined,
      });
    }
  }

  handleSelectCard = (index: number) => () => {
    this.setState({selectedItemIndex: index});
  }

  getCardStyle = (index: number) =>
    `${this.props.classes.item} ${this.state.selectedItemIndex === index ? this.props.classes.selectedItem : undefined}`;

  getRemoveStyle = () => 
    `${this.props.classes.action} ${this.state.selectedItemIndex >= 0 ? undefined : this.props.classes.disabledAction}`
  
  render () {
    const classes = this.props.classes;

    return (
      <div className={classes.container}>
        <div className={classes.toolbar}>
          <h4 className={classes.action} onClick={this.handleAdd}>Add</h4>
          <h4 className={this.getRemoveStyle()} onClick={this.handleRemove}>Remove</h4>
        </div>
        <div className={classes.collection}>
          {this.state.items.map((item, index) => (
            <div
              className={this.getCardStyle(index)}
              key={index}
              onClick={this.handleSelectCard(index)}
            >
              <h3 className={classes.itemTitle}>{item.title}</h3>
              <p className={classes.itemContent}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export const MyCarousel = withStyles(defaultStyle)<MyCarouselProps>(MyCarouselInner);
