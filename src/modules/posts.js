import * as postsAPI from '../api/posts';
import { reducerUtils, createPromiseThunk, handleAsyncActions } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

// thunk 함수들
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);

export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

// export const getPosts = () => async dispatch => {
//     //요청이 시작됨을 알림
//     dispatch({type: GET_POSTS});
//     //API 호출
//     try {
//         const posts = await postsAPI.getPosts();
//     //성공
//         dispatch({
//             type: GET_POSTS_SUCCESS,
//             posts,
//         });
//     } catch(e){
//     //실패
//         dispatch({
//             type: GET_POSTS_ERROR,
//             error: e,
//         })
//     }
// };

// export const getPost = id => async dispatch => {
//     //요청이 시작됨을 알림
//     dispatch({type: GET_POST});
//     //API 호출
//     try {
//         const posts = await postsAPI.getPostById(id);
//     //성공
//         dispatch({
//             type: GET_POST_SUCCESS,
//             posts,
//         });
//     } catch(e){
//     //실패
//         dispatch({
//             type: GET_POST_ERROR,
//             error: e,
//         })
//     }
// };

// reducer

const initialState = {
    posts: reducerUtils.initial(),
    post: reducerUtils.initial()
};

const getPostsReducer = handleAsyncActions(GET_POSTS, 'posts');
const getPostReducer = handleAsyncActions(GET_POST, 'post');

export default function posts(state=initialState, action){
    switch(action.type){
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return getPostsReducer(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return getPostReducer(state, action);
        default: 
        return state;
    };
};

// export default function posts(state=initialState, action){
//     switch(action.type){
//         case GET_POSTS:
//         return {
//             ...state,
//             posts: reducerUtils.loading(),
//         };
//         case GET_POSTS_SUCCESS:
//             return {
//                 ...state,
//                 posts: reducerUtils.success(action.payload),
//             };
//         case GET_POSTS_ERROR:
//             return {
//                 ...state,
//                 posts: reducerUtils.error(action.payload),
//             };
//         case GET_POST:
//             return {
//                 ...state,
//                 post: reducerUtils.loading(),
//             };
//         case GET_POST_SUCCESS:
//             return {
//                 ...state,
//                 post: reducerUtils.success(action.payload),
//             };
//         case GET_POST_ERROR:
//             return {
//                 ...state,
//                 post: reducerUtils.error(action.payload),
//             };
        
//         default: 
//         return state;
//     };
// };