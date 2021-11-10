import { list } from '@keystone-next/keystone/schema';
import { text, relationship } from '@keystone-next/fields';

export const Tag = list({
  fields: {
    name: text({ isRequired: true, isUnique: true }),
    // each subCategory belongs to One category
    products: relationship({ 
      ref: 'Product.tags', 
      many: true,
      ui: {
        createView: { fieldMode: 'hidden' },
        listView: { fieldMode: 'read' },
        itemView: { fieldMode: 'read' },
      },
    }),
  },
  ui: {
    labelField: 'name',
    listView: {
      initialColumns: ['name'],
    },
  },
});
