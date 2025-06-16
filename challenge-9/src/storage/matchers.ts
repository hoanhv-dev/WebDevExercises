import { Action } from 'redux';

import { PayloadAction } from '@reduxjs/toolkit';

const isPending = (action: Action): action is PayloadAction<any> => action.type.endsWith('/pending');
const isFulfilled = (action: Action): action is PayloadAction<any> => action.type.endsWith('/fulfilled');
const isRejected = (action: Action): action is PayloadAction<any> => action.type.endsWith('/rejected');

export { isPending, isFulfilled, isRejected };
