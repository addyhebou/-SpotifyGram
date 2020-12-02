export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-trending.herokuapp.com/";
// https://spotify-trending.herokuapp.com/
// const redirectUri = "http://localhost:3000/";
const clientId = "c8b5d20bd8bf4e64b2e4bb2c52194a08";
// http://localhost:3000/

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            // #accessToken=mysupersecretkey&name=sonny
            let parts = item.split('=');
            initial[parts[0]] = 
            decodeURIComponent(parts[1]);

            return initial;
        }, {}); 
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
// `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
/* 
    https://accounts.spotify.com/authorize
    ?client_id=
    c8b5d20bd8bf4e64b2e4bb2c52194a08
    &redirect_uri=
    https://spotify-trending.herokuapp.com
    &scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state
    &response_type=token&show_dialog=true

*/