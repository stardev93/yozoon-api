import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const SubCategory = list({
  // access:
  ui: {
    listView: {
      initialColumns: ['name', 'parent'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    parent: relationship({
      ref: 'Category.sub'
    }),
    products: relationship({ ref: 'Product.subCategory', many: false }),
    // TODO: add roles, cart and orders
  },
});
