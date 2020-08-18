import {take,call,put,takeEvery, delay, cancel} from 'redux-saga/effects'
import { loginAction } from '../../actions/user'

function* authorize(action:ActionParams<IState>) {
  //一进来就去调用后端的登录接口
  try {
    const res = yield new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({
          username: "asf",
          password: 'fff'
        })
      },1000)
    })
    yield delay(1000)
    yield put(loginAction.success(res))
  }catch(e) {
    yield put(loginAction.failure())
  }
}

export default () => {
  return (
    function* () {
      //在这里进行effect处理(副作用的处理 一般指异步请求)
      const task = yield takeEvery(loginAction.TRIGGER,authorize)
      const action = yield take([loginAction.LOG_OUT,loginAction.FAILURE])

      if(action.type === loginAction.LOG_OUT) yield cancel(task)
    }
  )
}