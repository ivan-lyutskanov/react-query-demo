import { POSTS_URL ,SORT_DESC } from "../constants";

// API Methods

export function getAllPosts() {    
    return fetch(POSTS_URL + SORT_DESC).then((res) => res.json());
} 

export function getPost(id) {    
    return fetch(POSTS_URL + id).then((res) => res.json());
} 

export function createPost(post) {
    return fetch(POSTS_URL, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((res) => res.json());  
}

export function updatePost(id, post) {
    return fetch(POSTS_URL + id, {
        method: 'PUT',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((res) => res.json());  
}

export function deletePost(id) {
    return fetch(POSTS_URL + id, { method: 'DELETE' });
}