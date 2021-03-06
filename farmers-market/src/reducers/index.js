import formVisibleReducer from './form-visible-reducer';
import productListReducer from './product-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  productFormShowing: formVisibleReducer,
  mainProductListings: productListReducer,
  firestore: firestoreReducer
});

export default rootReducer;