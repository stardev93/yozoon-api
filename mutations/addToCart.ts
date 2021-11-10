import { KeystoneContext } from '@keystone-next/types';
import { Session } from '../types';
import { CartItemCreateInput } from './../.keystone/schema-types';

export async function addToCart(
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  console.log('adding to cart');

  // 1 query the current user
  const sesh = context.session as Session;
  if (!sesh.itemId) {
    throw new Error('You must be logged in to do that');
  }
  // 2 query the current user cart
  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: sesh.itemId }, product: { id: productId } },
    resolveFields: 'id,quantity',
  });

  // 3 see if the current item is in their cart
  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    console.log(existingCartItem);
    console.log(
      `there ar already ${existingCartItem.quantity}, increment by 1!`
    );
    // // if yes : increment by 1
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
    });
  }
  // // if No : create a new one
  return context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: sesh.itemId } },
    },
  });
}
