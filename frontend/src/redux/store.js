// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "../features/authSlice";
// import jobSlice from "../features/jobSlice";
// import categorySlice from "../features/categorySlice";
// import applicationSlice from "../features/applicationSlice";

// export const store = configureStore({
//    reducer: {
//       auth: authSlice,
//       job: jobSlice,
//       category: categorySlice,
//       application: applicationSlice,
//    },
// });


import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import adminSlice from "../features/adminSlice";
import authSlice from "../features/authSlice";
import jobSlice from "../features/jobSlice";
import categorySlice from "../features/categorySlice";
import applicationSlice from "../features/applicationSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
//   admins: adminSlice,
  auth: authSlice,
  job: jobSlice,
  category: categorySlice,
  application: applicationSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});