import { POSTS_URL } from "../constants";

export function getAllPosts() {    
    return fetch(POSTS_URL).then((res) => res.json());
} 