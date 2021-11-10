type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type ProductRelateToManyInput = {
  readonly create?: ReadonlyArray<ProductCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ProductWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ProductWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CartItemRelateToManyInput = {
  readonly create?: ReadonlyArray<CartItemCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CartItemWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CartItemWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly avatar?: Scalars['String'] | null;
  readonly avatar_not?: Scalars['String'] | null;
  readonly avatar_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly avatar_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
  readonly cart_every?: CartItemWhereInput | null;
  readonly cart_some?: CartItemWhereInput | null;
  readonly cart_none?: CartItemWhereInput | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'products_ASC'
  | 'products_DESC'
  | 'cart_ASC'
  | 'cart_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly avatar?: any | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly cart?: CartItemRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly avatar?: any | null;
  readonly products?: ProductRelateToManyInput | null;
  readonly cart?: CartItemRelateToManyInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type TagRelateToManyInput = {
  readonly create?: ReadonlyArray<TagCreateInput | null> | null;
  readonly connect?: ReadonlyArray<TagWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<TagWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type BrandRelateToOneInput = {
  readonly create?: BrandCreateInput | null;
  readonly connect?: BrandWhereUniqueInput | null;
  readonly disconnect?: BrandWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductWhereInput = {
  readonly AND?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly type?: Scalars['String'] | null;
  readonly type_not?: Scalars['String'] | null;
  readonly type_contains?: Scalars['String'] | null;
  readonly type_not_contains?: Scalars['String'] | null;
  readonly type_starts_with?: Scalars['String'] | null;
  readonly type_not_starts_with?: Scalars['String'] | null;
  readonly type_ends_with?: Scalars['String'] | null;
  readonly type_not_ends_with?: Scalars['String'] | null;
  readonly type_i?: Scalars['String'] | null;
  readonly type_not_i?: Scalars['String'] | null;
  readonly type_contains_i?: Scalars['String'] | null;
  readonly type_not_contains_i?: Scalars['String'] | null;
  readonly type_starts_with_i?: Scalars['String'] | null;
  readonly type_not_starts_with_i?: Scalars['String'] | null;
  readonly type_ends_with_i?: Scalars['String'] | null;
  readonly type_not_ends_with_i?: Scalars['String'] | null;
  readonly type_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly type_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly discount?: Scalars['Int'] | null;
  readonly discount_not?: Scalars['Int'] | null;
  readonly discount_lt?: Scalars['Int'] | null;
  readonly discount_lte?: Scalars['Int'] | null;
  readonly discount_gt?: Scalars['Int'] | null;
  readonly discount_gte?: Scalars['Int'] | null;
  readonly discount_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly discount_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly stock?: Scalars['Int'] | null;
  readonly stock_not?: Scalars['Int'] | null;
  readonly stock_lt?: Scalars['Int'] | null;
  readonly stock_lte?: Scalars['Int'] | null;
  readonly stock_gt?: Scalars['Int'] | null;
  readonly stock_gte?: Scalars['Int'] | null;
  readonly stock_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly stock_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly tags_every?: TagWhereInput | null;
  readonly tags_some?: TagWhereInput | null;
  readonly tags_none?: TagWhereInput | null;
  readonly brand?: BrandWhereInput | null;
  readonly brand_is_null?: Scalars['Boolean'] | null;
  readonly seller?: UserWhereInput | null;
  readonly seller_is_null?: Scalars['Boolean'] | null;
};

export type ProductWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'discount_ASC'
  | 'discount_DESC'
  | 'stock_ASC'
  | 'stock_DESC'
  | 'tags_ASC'
  | 'tags_DESC'
  | 'brand_ASC'
  | 'brand_DESC'
  | 'seller_ASC'
  | 'seller_DESC';

export type ProductUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly type?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly image?: any | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly discount?: Scalars['Int'] | null;
  readonly stock?: Scalars['Int'] | null;
  readonly tags?: TagRelateToManyInput | null;
  readonly brand?: BrandRelateToOneInput | null;
  readonly seller?: UserRelateToOneInput | null;
};

export type ProductsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductUpdateInput | null;
};

export type ProductCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly type?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly image?: any | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly discount?: Scalars['Int'] | null;
  readonly stock?: Scalars['Int'] | null;
  readonly tags?: TagRelateToManyInput | null;
  readonly brand?: BrandRelateToOneInput | null;
  readonly seller?: UserRelateToOneInput | null;
};

export type ProductsCreateInput = {
  readonly data?: ProductCreateInput | null;
};

export type ProductRelateToOneInput = {
  readonly create?: ProductCreateInput | null;
  readonly connect?: ProductWhereUniqueInput | null;
  readonly disconnect?: ProductWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CartItemWhereInput = {
  readonly AND?: ReadonlyArray<CartItemWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CartItemWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly quantity?: Scalars['Int'] | null;
  readonly quantity_not?: Scalars['Int'] | null;
  readonly quantity_lt?: Scalars['Int'] | null;
  readonly quantity_lte?: Scalars['Int'] | null;
  readonly quantity_gt?: Scalars['Int'] | null;
  readonly quantity_gte?: Scalars['Int'] | null;
  readonly quantity_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly quantity_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly product?: ProductWhereInput | null;
  readonly product_is_null?: Scalars['Boolean'] | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
};

export type CartItemWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCartItemsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'quantity_ASC'
  | 'quantity_DESC'
  | 'product_ASC'
  | 'product_DESC'
  | 'user_ASC'
  | 'user_DESC';

export type CartItemUpdateInput = {
  readonly quantity?: Scalars['Int'] | null;
  readonly product?: ProductRelateToOneInput | null;
  readonly user?: UserRelateToOneInput | null;
};

export type CartItemsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CartItemUpdateInput | null;
};

export type CartItemCreateInput = {
  readonly quantity?: Scalars['Int'] | null;
  readonly product?: ProductRelateToOneInput | null;
  readonly user?: UserRelateToOneInput | null;
};

export type CartItemsCreateInput = {
  readonly data?: CartItemCreateInput | null;
};

export type SubCategoryRelateToManyInput = {
  readonly create?: ReadonlyArray<SubCategoryCreateInput | null> | null;
  readonly connect?: ReadonlyArray<SubCategoryWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<SubCategoryWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CategoryWhereInput = {
  readonly AND?: ReadonlyArray<CategoryWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CategoryWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly sub_every?: SubCategoryWhereInput | null;
  readonly sub_some?: SubCategoryWhereInput | null;
  readonly sub_none?: SubCategoryWhereInput | null;
};

export type CategoryWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCategoriesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'sub_ASC'
  | 'sub_DESC';

export type CategoryUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly sub?: SubCategoryRelateToManyInput | null;
};

export type CategoriesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CategoryUpdateInput | null;
};

export type CategoryCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly sub?: SubCategoryRelateToManyInput | null;
};

export type CategoriesCreateInput = {
  readonly data?: CategoryCreateInput | null;
};

export type CategoryRelateToOneInput = {
  readonly create?: CategoryCreateInput | null;
  readonly connect?: CategoryWhereUniqueInput | null;
  readonly disconnect?: CategoryWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type SubCategoryWhereInput = {
  readonly AND?: ReadonlyArray<SubCategoryWhereInput | null> | null;
  readonly OR?: ReadonlyArray<SubCategoryWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly parent?: CategoryWhereInput | null;
  readonly parent_is_null?: Scalars['Boolean'] | null;
};

export type SubCategoryWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortSubCategoriesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'parent_ASC'
  | 'parent_DESC';

export type SubCategoryUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly parent?: CategoryRelateToOneInput | null;
};

export type SubCategoriesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: SubCategoryUpdateInput | null;
};

export type SubCategoryCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly parent?: CategoryRelateToOneInput | null;
};

export type SubCategoriesCreateInput = {
  readonly data?: SubCategoryCreateInput | null;
};

export type BrandWhereInput = {
  readonly AND?: ReadonlyArray<BrandWhereInput | null> | null;
  readonly OR?: ReadonlyArray<BrandWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type BrandWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBrandsBy = 'id_ASC' | 'id_DESC' | 'name_ASC' | 'name_DESC';

export type BrandUpdateInput = {
  readonly name?: Scalars['String'] | null;
};

export type BrandsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: BrandUpdateInput | null;
};

export type BrandCreateInput = {
  readonly name?: Scalars['String'] | null;
};

export type BrandsCreateInput = {
  readonly data?: BrandCreateInput | null;
};

export type TagWhereInput = {
  readonly AND?: ReadonlyArray<TagWhereInput | null> | null;
  readonly OR?: ReadonlyArray<TagWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly products_every?: ProductWhereInput | null;
  readonly products_some?: ProductWhereInput | null;
  readonly products_none?: ProductWhereInput | null;
};

export type TagWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortTagsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'products_ASC'
  | 'products_DESC';

export type TagUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
};

export type TagsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: TagUpdateInput | null;
};

export type TagCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly products?: ProductRelateToManyInput | null;
};

export type TagsCreateInput = {
  readonly data?: TagCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type PasswordResetRequestErrorCode =
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES';

export type PasswordResetRedemptionErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'TOKEN_NOT_SET'
  | 'TOKEN_MISMATCH'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_REDEEMED';

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'avatar'
    | 'products'
    | 'cart'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly avatar?: any;
    readonly products?: string | null;
    readonly cart?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type ProductListTypeInfo = {
  key: 'Product';
  fields:
    | 'id'
    | 'name'
    | 'type'
    | 'description'
    | 'image'
    | 'status'
    | 'price'
    | 'discount'
    | 'stock'
    | 'tags'
    | 'brand'
    | 'seller';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly type?: string | null;
    readonly description?: string | null;
    readonly image?: any;
    readonly status?: string | null;
    readonly price?: number | null;
    readonly discount?: number | null;
    readonly stock?: number | null;
    readonly tags?: string | null;
    readonly brand?: string | null;
    readonly seller?: string | null;
  };
  inputs: {
    where: ProductWhereInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductListTypeInfo,
    ProductListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductListTypeInfo,
  ProductListTypeInfo['fields']
>;

export type CartItemListTypeInfo = {
  key: 'CartItem';
  fields: 'id' | 'quantity' | 'product' | 'user';
  backing: {
    readonly id: string;
    readonly quantity?: number | null;
    readonly product?: string | null;
    readonly user?: string | null;
  };
  inputs: {
    where: CartItemWhereInput;
    create: CartItemCreateInput;
    update: CartItemUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CartItemWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCartItemsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CartItemListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CartItemListTypeInfo,
    CartItemListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CartItemListTypeInfo,
  CartItemListTypeInfo['fields']
>;

export type CategoryListTypeInfo = {
  key: 'Category';
  fields: 'id' | 'name' | 'sub';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly sub?: string | null;
  };
  inputs: {
    where: CategoryWhereInput;
    create: CategoryCreateInput;
    update: CategoryUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CategoryWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCategoriesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CategoryListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CategoryListTypeInfo,
    CategoryListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CategoryListTypeInfo,
  CategoryListTypeInfo['fields']
>;

export type SubCategoryListTypeInfo = {
  key: 'SubCategory';
  fields: 'id' | 'name' | 'parent';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly parent?: string | null;
  };
  inputs: {
    where: SubCategoryWhereInput;
    create: SubCategoryCreateInput;
    update: SubCategoryUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: SubCategoryWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortSubCategoriesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type SubCategoryListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    SubCategoryListTypeInfo,
    SubCategoryListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  SubCategoryListTypeInfo,
  SubCategoryListTypeInfo['fields']
>;

export type BrandListTypeInfo = {
  key: 'Brand';
  fields: 'id' | 'name';
  backing: {
    readonly id: string;
    readonly name?: string | null;
  };
  inputs: {
    where: BrandWhereInput;
    create: BrandCreateInput;
    update: BrandUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: BrandWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortBrandsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type BrandListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    BrandListTypeInfo,
    BrandListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  BrandListTypeInfo,
  BrandListTypeInfo['fields']
>;

export type TagListTypeInfo = {
  key: 'Tag';
  fields: 'id' | 'name' | 'products';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly products?: string | null;
  };
  inputs: {
    where: TagWhereInput;
    create: TagCreateInput;
    update: TagUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: TagWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortTagsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type TagListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    TagListTypeInfo,
    TagListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  TagListTypeInfo,
  TagListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Product: ProductListTypeInfo;
  readonly CartItem: CartItemListTypeInfo;
  readonly Category: CategoryListTypeInfo;
  readonly SubCategory: SubCategoryListTypeInfo;
  readonly Brand: BrandListTypeInfo;
  readonly Tag: TagListTypeInfo;
};
