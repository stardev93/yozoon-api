import { list } from '@keystone-next/keystone/schema';
import { integer, relationship, select, text } from '@keystone-next/fields';
import { cloudinaryImage } from '@keystone-next/cloudinary';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
  folder: 'yozoon',
};

export const Product = list({
  // TODO
  ui: {
    listView: {
      initialColumns: ['name', 'type', 'price', 'discount'],
    },
  },
  // access:
  fields: {
    name: text({ isRequired: true }),
    type: select({
      options: [
        { label: 'Physical', value: 'PHYSICAL' },
        { label: 'Digital', value: 'DIGITAL' },
        { label: 'License', value: 'LICENSE' },
      ],
      defaultValue: 'PHYSICAL',
      ui: {
        displayMode: 'segmented-control',
        // createView: { fieldMode: 'hidden' },
      },
    }),
    description: text({
      isRequired: true,
      ui: {
        displayMode: 'textarea',
      },
    }),
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Availale', value: 'AVAILABLE' },
        { label: 'Unavailale', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        // createView: { fieldMode: 'hidden' },
      },
    }),
    price: integer({ isRequired: true }),
    discount: integer({ isRequired: true, defaultValue: 0 }),
    stock: integer({ isRequired: true, defaultValue: 1 }),
    tags: relationship({ ref: 'Tag.products', many: true }),
    brand: relationship({ ref: 'Brand', many: false }),
    seller: relationship({
      ref: 'User.products',
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
        listView: { fieldMode: 'read' },
      },
    }),
    
    // TODO: Photo
  },
});
