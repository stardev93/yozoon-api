import { list } from '@keystone-next/keystone/schema';
import { text } from '@keystone-next/fields';

export const Brand = list({
  // access:
  // ui :
  fields: {
    name: text({ isRequired: true, isUnique: true }),
    // TODO: add roles, cart and orders
  },
});
