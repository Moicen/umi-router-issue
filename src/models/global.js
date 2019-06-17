import router from 'umi/router';
import cookie from '@/utils/cookie'
const TokenKey =  'UMI_TEST_TOKEN'

export default {

  namespace: 'global',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        let logged = cookie.get(TokenKey);
        console.log(pathname, logged);
        if (!logged) {
          if (pathname !== '/login') {
            router.replace('/login');
          }
        } else {
          if (pathname === '/login' || pathname === '/') {
            router.replace('/profile');
          }
        }
      });
    },
  },

  effects: {
    * login({ payload }, { call, put }) {
      cookie.set(TokenKey, 1);
      // window.location.href = '/'
      router.replace('/');
    },

    * logout({ payload }, { call, put }) {
      cookie.remove(TokenKey);
      // window.location.href = '/login'
      router.replace('/login');
    },

  },


  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
