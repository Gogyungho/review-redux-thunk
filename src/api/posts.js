const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// { id, title, body }

const posts = [
    {
        id: 1, 
        title: '리덕스 정리하고 리뷰해 보는 시간을 가져보자.',
        body: '미들웨어 어렵지만 한번 리뷰하며 사용했던것들 정리하는 시간을 가져보자.',
    },
    {
        id: 2, 
        title: 'redux-thunk는 무엇인가.',
        body: 'redux-thunk는 무엇이고, 어떻게 비동기 작업을 처리하는지 알아보자',
    },
    {
        id: 3, 
        title: 'redux-saga는 무엇인가.',
        body: 'redux-saga를 알아보고, 비동기 작업을 처리하는 방법을 알아보자.',
    },
];

export const getPosts = async () => {
    await sleep(500);
    return posts;
};

export const getPostById = async id => {
    await sleep(500);
    return posts.find(post => post.id === id);
};