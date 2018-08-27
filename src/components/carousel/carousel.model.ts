export interface CarouselItem {
  title: string;
  content: string;
}

export type CarouselItems = CarouselItem[];

export const defaulItems = [
  {
    title: 'Groceries',
    content: 'Buy lettuce',
  },
  {
    title: 'Supplies',
    content: 'Buy hammer',
  },
];
