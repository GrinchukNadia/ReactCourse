let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET-USERS";
let SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
let SET_TOTAL_COUNT = "SET_TOTAL_COUNT";


let initialStore = {
    users: [ ],
    totalCount: 0,
    pageSize: 99,
    activePage: 1,
    isFethcing: true
}

const usersReduser = (state = initialStore, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(el => {
                    if (el.id === action.usersId) {
                        return {...el, followed: true}
                    }
                    return el;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( el => {
                    if ( el.id === action.usersId) {
                        return {...el, followed: false}
                    }
                    return el;
                })
            };
    
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_ACTIVE_PAGE:
            return{
                ...state,
                activePage: action.activePage
            }
        case SET_TOTAL_COUNT:
            return{
                ...state,
                totalCount: action.totalCount
            }

        default:
            return state;
    }
};

export let followAC = (usersId) => { return {type: FOLLOW, usersId}}
export let unfollowAC = (usersId) => {return {type: UNFOLLOW, usersId}}
export let setUsersAC = (users) => {return {type: SET_USERS, users}}
export let activePageAC = (activePage) => {return {type: SET_ACTIVE_PAGE, activePage}}
export let totalCountAC = (totalCount) => {return {type: SET_TOTAL_COUNT, totalCount}}


export default usersReduser;