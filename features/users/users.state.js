import {atom, selector, selectorFamily} from "recoil";

const URL_BASE = "https://jsonplaceholder.typicode.com";

export const currentUserIdState = atom({
    key: 'currentUserIdState',
    default: null
});

export const userListState = selector({
    key: 'userListState',
    get: async ({get}) => {
        const users = await fetch(`${URL_BASE}/users`).then(res => res.json());
        return {users};
    },
});

export const userByIdState = selectorFamily({
    key: 'userByIdState',
    get: userId => async ({get}) => {
        const user = await findUserById(userId);
        return {user};
    }
});

export const currentUserInfoState = selector({
    key: 'currentUserInfoState',
    get: ({get}) => {
        const {user: currentUser} = get(userByIdState(get(currentUserIdState)));

        return {currentUser};
    }
});

export const currentUserEmailState = selector({
    key: 'currentUserEmailState',
    get: ({get}) => {
        const {currentUser: {email}} = get(currentUserInfoState);

        return {email};
    }
});


function findUserById(userId) {
    return fetch(`${URL_BASE}/users/${userId}`).then(res => res.json());
}