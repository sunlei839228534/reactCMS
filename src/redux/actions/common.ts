import {createRoutine,promisifyRoutine} from 'redux-saga-routines'

import extendRoutine from '../sagas/extendRoutine'
import NAME_SPACE from '../constants/name-space'

export const setRetryTip = createRoutine(`${NAME_SPACE.COMMON}`);

