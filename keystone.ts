import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import 'dotenv/config';

import { User } from './schemas/User';
import { CartItem } from './schemas/CartItem';
import { Product } from './schemas/Product';
import { Category } from './schemas/Category';
import { SubCategory } from './schemas/SubCategory';
import { Brand } from './schemas/Brand'
import { Tag } from './schemas/Tag';

import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';
import { extendGraphqlSchema } from './mutations/index';


const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/yozoon';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO : add in initial roles
  },
  passwordResetLink: {
    async sendToken(args) {
      console.log(args);
      // send email
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

export default withAuth(
  config({
    // @ts-ignore
    // server: {
    //   cors: {
    //     origin: [process.env.FRONTEND_URL],
    //     credentials: false,
    //   },
    //   // port: 3000,
    // },
    server: {
      cors: { 
        origin: ['http://localhost:7777'], 
        credentials: true 
      },
      port: 3000,
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      async onConnect(keystone) {
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(keystone);
        }
      },
    },
    lists: createSchema({
      // schemas item go in here
      User,
      Product,
      CartItem,
      Category,
      SubCategory,
      Brand,
      Tag,
    }),
    extendGraphqlSchema,
    ui: {
      // TODO : change this for roles
      isAccessAllowed: ({ session }) => {
        return !!session?.data;
      },
    },
    session: withItemData(statelessSessions(sessionConfig), {
      User: `id email name`,
    }),
  })
);
