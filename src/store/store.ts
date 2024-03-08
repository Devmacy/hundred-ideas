import {combineReducers, configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

// 这个是redux-persist 的配置，可以配置黑名单、白名单
const persistConfig = {
    key: 'root', // 自动框架生产的根目录id 是root。不变
    storage, // 这个是选择用什么存储，session 还是 storage
}
const rootReducer = combineReducers({
});

// 一个经过处理的reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

// 返回持久化对象
export const persist = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
