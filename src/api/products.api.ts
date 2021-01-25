import {BaseApi} from './base.api';
import {authStore} from '@stores';

export interface ProductI {
  id: string;
  title: string;
  unitCount: string;
  unitName: string;
  desc: string;
  price: number;
  
  // images: ProductImageI[]
  // usersInFavorites: UserI[]
  // orderProducts: OrderProductI[]
  // reviews: ProductReviewI[]
  // categories: CategoryI[]
}

export interface ProductCreateI {
  title: string;
  unitCount: string;
  unitName: string;
  desc: string;
  price: number;
  
  categoriesIds: string[];
  // categories?: CategoryI[]
}

export interface ProductPatchI {
  title?: string;
  unitCount?: string;
  unitName?: string;
  desc?: string;
  price?: number;
  
  categoriesIds?: string[];
}



class ProductsApi extends BaseApi<ProductI, ProductCreateI, ProductPatchI> {
  constructor() {
    super('products')
  }
}

const productsApi = new ProductsApi();

export default productsApi
