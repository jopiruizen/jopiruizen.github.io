import { init, RematchDispatch, RematchRootState } from '@rematch/core';
// import selectPlugin from '@rematch/select';
import thunk from 'redux-thunk';
// import * as models from './models';
import { models, RootModel } from "./models";
const middlewares = [thunk];


const store = init({
    redux: {
      middlewares,
    },
    models,
    // plugins: [selectPlugin()],
  });
  
  export default store;
  
  export type Store = typeof store;
  export type Dispatch = RematchDispatch<RootModel>
  export type RootState = RematchRootState<RootModel>
