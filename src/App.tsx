import React from 'react';
import { Button } from 'antd';
import { useDispatch,useSelector } from 'react-redux';

import { setRetryTip } from './redux/actions/common';

function App() {
  const dispatch = useDispatch()
  const { retryTip } = useSelector((state:IState ) => state.common)

  const handleTestReduxClick = () => {
    dispatch({
      type: setRetryTip.TRIGGER,
    })
  }
  
  return (
    <div className="App">
      <Button onClick={handleTestReduxClick} type='primary'>测试</Button>
    </div>
  );
}

export default App;