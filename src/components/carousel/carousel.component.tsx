import * as React from 'react';
import { CarouselItem, defaulItems } from './carousel.model';
import { CarouselStyleApi, mergeUserStyle } from './carousel.style';


interface MyCarouselState {
  items: CarouselItem[];
  selectedItemIndex: number; 
}

interface MyCarouselProps {
  userStyle?: Partial<CarouselStyleApi>;
};

export class MyCarousel extends React.PureComponent<MyCarouselProps, MyCarouselState> {
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

  getCardStyle = (style: CarouselStyleApi, index: number) =>
    `${style.item} ${this.state.selectedItemIndex === index ? style.selectedItem : undefined}`;

  getRemoveStyle = (style: CarouselStyleApi) => 
    `${style.action} ${this.state.selectedItemIndex >= 0 ? undefined : style.disabledAction}`
  
  render () {
    const style: CarouselStyleApi = mergeUserStyle(this.props.userStyle);

    return (
      <div className={style.container}>
        <div className={style.toolbar}>
          <h4 className={style.action} onClick={this.handleAdd}>Add</h4>
          <h4 className={this.getRemoveStyle(style)} onClick={this.handleRemove}>Remove</h4>
        </div>
        <div className={style.collection}>
          {this.state.items.map((item, index) => (
            <div
              className={this.getCardStyle(style, index)}
              key={index}
              onClick={this.handleSelectCard(index)}
            >
              <h3 className={style.itemTitle}>{item.title}</h3>
              <p className={style.itemContent}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}