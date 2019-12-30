import { Model } from 'dva';
import { all } from 'redux-saga/effects';
import api from 'services/movie'
import request from  'utils/request'

export default {
  namespace: 'movie',
  state: {
		movieList: []
  },
  effects: {
    *getList({ payload }, { call, put }) {
      const q = () => request({
        url: api.queryList
      })
      const data = yield call(q)
      const movieList = data.subjects
      console.error(movieList)
      yield put({
        type: 'updateState',
        payload: {
					movieList
				}
      })
    }
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    }
  },
}
