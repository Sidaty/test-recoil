import {useRecoilValue, useRecoilValueLoadable, useSetRecoilState} from "recoil";
import {
    currentUserEmailState,
    currentUserIdState,
    currentUserInfoState,
    userByIdState,
    userListState
} from "./users.state";


export const useUserList = () => {
    return useRecoilValueLoadable(userListState);
}

export const useRefreshUserList = () => {
    const setUserList = useSetRecoilState(userListState);
    return () => setUserList(requestId => {
        console.log(`useRefreshUserList: ${requestId}`);
        return requestId + 1;
    });
}

export const useUserById = (userId) => {
    return useRecoilValueLoadable(userByIdState(userId));
}

export const useCurrentUserInfo = () => {
    return useRecoilValueLoadable(currentUserInfoState);
}

export const useCurrentUserEmail = () => {
    return useRecoilValueLoadable(currentUserEmailState);
}

export const useSetCurrentUserId = () => {
    return useSetRecoilState(currentUserIdState);
}
