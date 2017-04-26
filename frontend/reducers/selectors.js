import { values } from 'lodash';

export const selectAllItems = ({ items }) => values(items);
export const selectItem = ({ items }, id) => {
  return items[id];
}

export const selectCartItems = ({ cartItems }) => values(cartItems);
export const selectCarts = ({ carts }) => values(carts);

export const selectReviews = ({ reviews }) => values(reviews);
export const selectReview = ({ reviews }, id) => {
  return reviews[id];
}
