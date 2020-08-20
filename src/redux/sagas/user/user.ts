import {take,put,takeEvery, delay, cancel} from 'redux-saga/effects'
import { loginAction } from '../../actions/user'

function* authorize(action:ActionParams<IState>) {
  //一进来就去调用后端的登录接口
  try {
    yield put(loginAction.success())
  }catch(e) {
    yield put(loginAction.failure())
  }
}

export default () => {
  return (
    function* () {
      //在这里进行effect处理(副作用的处理 一般指异步请求)
      //takeEvery在每次action匹配的时候会一遍又一遍的被调用.无法控制何时停止监听
      const task = yield takeEvery(loginAction.TRIGGER,authorize)
      //take是主动拉取action
      const action = yield take([loginAction.LOG_OUT,loginAction.FAILURE])

      if(action.type === loginAction.LOG_OUT) yield cancel(task)
    }
  )
}