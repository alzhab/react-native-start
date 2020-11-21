import {action, makeAutoObservable} from 'mobx';

class LoadingStore {
  loading = false;
  
  constructor() {
  	makeAutoObservable(this)
  }
  
  @action toggleLoading = (): void => {
  	this.loading = !this.loading;
  }
}

const loadingStore = new LoadingStore();
export default loadingStore;
