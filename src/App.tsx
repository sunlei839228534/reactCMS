import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useActions from './hooks/useAction'
import { setRetryTip } from './redux/actions/common';
import {loginAction,loginActionPromise} from './redux/actions/user'

function App() {
  const actions = useActions({
    setRetryTip,
    loginAction,
    loginActionPromise,
    logOut: loginAction.logOut
  })
  
  const { retryTip } = useSelector((state:any) => state.common)

  const handleTestReduxClick = () => {
    actions.logOut()
  }
  return (
    <div className="App">
      <Button onClick={handleTestReduxClick} type='primary'>测试</Button>
    </div>
  );
}

export default App;