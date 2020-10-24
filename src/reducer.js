export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE AFTER DONE DEVELOPING...YOU WANT TO GO THROUGH THE WHOLE AUTHENTICATION AS PART OF THE PROCESS
    token: "BQALCt34Mp8sG9VugAPPHnKLyxq_cn8P4sc13JeuPOAMFOdZM_SYXw1XQCwErtIf7MPwMUcZYlASx8KszcWKnYcPVmHrPsxgab6NH2wP1z8AIjFCsfoABv_aDu9So1jfDw",
};

const reducer = (state, action) =>{ // state is the status of user, playlists, etc. action is changing one of those items
    console.log(action); 

    // Action -> type, [payload]

    switch(action.type){
        case "SET_USER": // retrieves from the dispatch in App.js
            return {
                ...state, // keep existing state, don't alter it
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
} 

export default reducer;

