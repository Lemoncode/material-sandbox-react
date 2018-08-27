const defaultRules = require("./carousel.style.scss");

export interface CarouselStyleApi {
  container: string;
  toolbar: string;
  action: string;
  disabledAction: string;
  collection: string;
  item: string;
  selectedItem: string;
  itemTitle: string;
  itemContent: string;
}

const defaultStyle: CarouselStyleApi = {
  container: defaultRules.container,
  toolbar: defaultRules.toolbar,
  action: defaultRules.action,
  disabledAction: defaultRules.disabledAction,
  collection: defaultRules.collection,
  item: defaultRules.item,
  selectedItem: defaultRules.selectedItem,
  itemTitle: defaultRules.itemTitle,
  itemContent: defaultRules.itemContent,
};

const getUserStyleRule = (userStyle: Partial<CarouselStyleApi>, rule: string) =>
  userStyle && userStyle[rule];

export const mergeUserStyle = (userStyle: Partial<CarouselStyleApi>) => {
  return Object.keys(defaultStyle).reduce((acc, rule) => ({
    ...acc,
    [rule]: [
      defaultStyle[rule],
      getUserStyleRule(userStyle, rule),
    ].filter(r => r).join(' '),
  }), {} as CarouselStyleApi);
}
