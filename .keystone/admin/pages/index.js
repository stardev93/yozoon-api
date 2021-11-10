import React from 'react';

import { HomePage } from '@keystone-next/admin-ui/pages/HomePage';
import { gql } from '@keystone-next/admin-ui/apollo';

export default function Home() {
  return (
    <HomePage
      query={gql`
        query {
          keystone {
            adminMeta {
              lists {
                key
                fields {
                  path
                  createView {
                    fieldMode
                  }
                }
              }
            }
          }
          User: _allUsersMeta {
            count
          }
          Product: _allProductsMeta {
            count
          }
          CartItem: _allCartItemsMeta {
            count
          }
          Category: _allCategoriesMeta {
            count
          }
          SubCategory: _allSubCategoriesMeta {
            count
          }
          Brand: _allBrandsMeta {
            count
          }
          Tag: _allTagsMeta {
            count
          }
        }
      `}
    />
  );
}
