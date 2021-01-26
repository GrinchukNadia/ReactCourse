import elia from './../img/friends/elia.jpg';
import dania from './../img/friends/dania.jpg';
import luba from './../img/friends/luba.jpg';

let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET-USERS";


let initialStore = {
    users: [
        {id: 1, name: "Elia", followed: true, img: elia, status: "Super exited", location: { city: "Kiev", country: "Ucraine"} },
        {id: 2, name: "Dania", followed: false, img: dania, status: "Exited", location: { city: "Moscow", country: "Russia"} },
        {id: 3, name: "Luba", followed: true, img: luba, status: "Super", location: { city: "Minsk", country: "Belarus"} }
    ]
}

const usersReduser = (state = initialStore, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(el => {
                    if (el === action.usersId) {
                        return {...el, followed: true}
                    }
                    return el;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( el => {
                    if ( el === action.usersId) {
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