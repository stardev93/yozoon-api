import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const Category = list({
  // access:
  // ui :
  fields: {
    name: text({ isRequired: true }),
    sub: relationship({
      ref: 'SubCategory.parent',
      many: true,
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    }),
    products: relationship({ ref: 'Product.category', many: true }),
    // TODO: add roles, cart and orders
  },
});
