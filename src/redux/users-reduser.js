let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET-USERS";


let initialStore = {
    users: [ ]
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
                users: [...state.users, ...action.users]
            };

        default:
            return state;
    }
};

export let followAC = (usersId) => { return {type: FOLLOW, usersId}}
export let unfollowAC = (usersId) => {return {type: UNFOLLOW, usersId}}
export let setUsersAC = (users) => {return {type: SET_USERS, users}}

export default usersReduser;