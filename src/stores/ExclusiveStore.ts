import {action, makeAutoObservable} from 'mobx';
import productsApi, {ProductI} from '../api/products.api';
import {catchErrors} from '@utils';
import authStore from './AuthStore';

interface ExclusiveI {
  image: string,
  title: string,
  amount: string,
  price: number
}

class ExclusiveStore {
  loading = true;
  data: ExclusiveI[] = [];
  
  private token = '';
  
  constructor() {
    makeAutoObservable(this);
    
    this.token = authStore.authData.token;
  }
  
  @action
  getData = () => {
    this.setLoading(true);
    
    productsApi.getAll({
      limit: 5
    }, this.token)
      .then(res => {
        const data = res.map(product => ({
          image: '',
          title: product.title,
          amount: `${product.unitCount} ${product.unitName}`,
          price: product.price
        }));
        this.setData(data);
      })
      .catch(catchErrors.storeCatchError)
      .finally(() => this.setLoading(false))
  };
  
  @action private setData = (val: ExclusiveI[] = []) => {
    this.data = val;
  };
  
  @action setLoading = (val: boolean) => {
    this.loading = val;
  }
}

const exclusiveStore = new ExclusiveStore();
export default exclusiveStore;
