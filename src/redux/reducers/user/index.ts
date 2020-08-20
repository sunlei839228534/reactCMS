import {loginAction} from '../../actions/user'

const initialState = {
  isLogin: false
}

export default (state = initialState,action:ActionParams) => {
  switch(action.type) {
    case loginAction.SUCCESS:
      return {
        ...state,
        isLogin: true
      }
    case loginAction.FAILURE:
      console.log('出错了!')
      return {
        ...state,
      }
    default: 
      return state
  }
}