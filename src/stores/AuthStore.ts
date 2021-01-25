import {action, makeAutoObservable} from 'mobx';
import authApi, {UserLoginI, UserPostI} from '../api/auth.api';
import noticeMessageStore, {NoticeTypeEnum} from './NoticeMessageStore';
import loadingStore from './LoadingStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Navigations} from '@types';
import navigate from '@navigations/RootNavigation';
import {catchErrors} from '@utils';

class AuthStore {
  private _authData = {token: '', userId: ''};
  private _isAuthorizaed = false;
  
  constructor() {
    makeAutoObservable(this)
  }
  
  getAuthData() {
    return AsyncStorage.getItem('auth')
      .then(res => {
        if (res !== null) {
          let data;
          
          try {
            data = JSON.parse(res)
          } catch (e) {
            return Promise.reject('parse auth data: ' + e);
          }
          this.authData = data;
          
          return data
        } else {
          return null
        }
      })
      .catch(e => {
        return Promise.reject('get auth data from storage error: ' + e);
      });
  }
  
  setAuthData(data: {token: string, userId: string}) {
    return AsyncStorage.setItem('auth', JSON.stringify(data))
      .then(() => {
        this.authData = data;
      })
      .catch(e => {
        return Promise.reject('set auth data to storage error: ' + e);
      });
  }
  
  @action signup(data: UserPostI) {
    loadingStore.toggleLoading();
    
    return authApi.signup(data)
      .then(data => {
        if (data) {
          this.setAuthData(data).then(() => {
            noticeMessageStore.showMessage('Hello new user!', NoticeTypeEnum.success);
            navigate(Navigations.Main);
          })
        }
      })
      .catch(catchErrors.storeCatchError)
      .finally(() => loadingStore.toggleLoading())
  }
  
  @action login(data: UserLoginI) {
    loadingStore.toggleLoading();
    return authApi.login(data)
      .then(data => {
        if (data) {
          this.setAuthData(data).then(() => {
            noticeMessageStore.showMessage('Welcome back!', NoticeTypeEnum.success)
            navigate(Navigations.Main);
          })
        }
      })
      .catch(catchErrors.storeCatchError)
      .finally(() => loadingStore.toggleLoading())
  }
  
  @action logout() {
    return this.setAuthData({token: '', userId: ''})
      .then(() => {
        navigate(Navigations.Auth);
      })
      .catch(catchErrors.storeCatchError)
  }
  
  get authData() {
    return this._authData
  }
  
  set authData(data: {token: string, userId: string}) {
    this._isAuthorizaed = !!(data.token && data.userId);
    this._authData = data
  }
  
  get isAuthorized() {
    return this._isAuthorizaed
  }
}

const authStore = new AuthStore();
export default authStore;
