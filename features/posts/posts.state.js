import {atom, selector} from "recoil";


export const postsState = atom({
    key: 'postsState',
    default: {
        posts: [],
        search: ''
    },
});

export const postsListState = selector({
    key: 'postsListState',
    get: ({get}) => get(postsState).posts,
    set: ({set, get}, posts) => {
        set(postsState, {...get(postsState), posts});
    }
});

export const postSearchState = selector({
    key: 'postSearchState',
    get: ({get}) => get(postsState).search,
    set: ({set, get}, search) => {
        set(postsState, {...get(postsState), search});
    }
});

export const filteredPostsState = selector({
    key: 'filteredPostsState',
    get: ({get}) => {
        const search = get(postSearchState).toLowerCase();
        const posts = get(postsListState);
        return posts.filter(({
                                 title,
                                 body
                             }) => title.toLowerCase().includes(search) || body.toLowerCase().includes(search));
    }
});

export const filteredPostsCountState = selector({
    key: 'filteredPostsCountState',
    get: ({get}) => {
        return get(filteredPostsState).length;
    }
})
