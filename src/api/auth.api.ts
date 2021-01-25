import {BaseApi} from './base.api';
import {api} from './constants';
import {FindOptions} from 'sequelize';
import axios from 'axios';

export interface UserI {
  id?: string | null;
  username: string;
  phoneNumber?: string | null;
  passwordResetCode?: string | null;
  email: string;
  password: string;
  avatarPath?: string | null;
  createdAt?: Date;
  
  // favoriteProducts: ProductI[]
  // orders: OrderI[]
  // reviews: ProductReviewI[]
}

export interface UserLoginI {
  email: string;
  password: string;
}

export interface UserPostI {
  email: string;
  password: string;
  username: string;
}

export interface UserPatchI {
  username?: string;
  phoneNumber?: string | null;
  passwordResetCode?: string | null;
  email?: string;
  password?: string;
  avatarPath?: string | null;
}

export interface SignupData {
  token: string,
  userId: string
}

class AuthApi {
  private readonly api: string;
  
  constructor() {
    this.api = `${api}/auth`
  }
  
  async signup(data: UserPostI): Promise<SignupData> {
    return axios.post(`${this.api}/signup`, data)
      .then(res => {
        return res.data
      })
  };
  
  async login(data: UserLoginI): Promise<SignupData> {
    return axios.post(`${this.api}/login`, data)
      .then(res => {
        return res.data
      })
  };
}

const authApi = new AuthApi();

export default authApi
