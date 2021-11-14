import React, { memo } from 'react';
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImg,
} from './cart-item.styles';

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <CartItemContainer>
    <CartItemImg src={imageUrl} alt={name} />

    <ItemDetailsContainer>
      <span>{name}</span>
      <span>{`${quantity} x $${price}`}</span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default memo(CartItem);
