import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import rootReducer from "./RootReducer";

import { persistReducer, persistStore } from "redux-persist";
import { applyMiddleware, createStore } from "redux";

const persistConfig = {
  whitelist: ["auth", "user"],
  key: "movie-planet",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(thunk);

const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
export { store, persistor };
