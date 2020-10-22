

export const authEndpoint = 
"https://account.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientId = "c8b5d20bd8bf4e64b2e4bb2c52194a08";


const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];