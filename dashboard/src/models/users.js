import * as usersService from '../services/users';

export default {
    namespace: 'users',
    state: {
    list: [],
    total: null,
    page: null,
  },
  
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },

  effects: {
    *fetch({ payload: { page = 1} }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({ 
      	type: 'save', 
      	payload: { 
      		data, 
      		total: parseInt(headers['x-total-count'],10),
      		page: parseInt(page, 10), 
      	},
      });
    },

    *remove({ payload: id }, { call, put, select }) {
      yield call(usersService.remove, id);
      yield put({ type: 'reload' });
    },
  },

  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total,page };
    },
  },
};