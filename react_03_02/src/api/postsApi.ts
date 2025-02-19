export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Blad');
    }
    return response.json();
};

export const fetchPostById = async (id: string) => {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!postResponse.ok) {
        throw new Error('blad');
    }
    const post = await postResponse.json();

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    if (!userResponse.ok) {
        throw new Error('blad');
    }
    const user = await userResponse.json();

    return { post, user };
};

//typ dla posta
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

//typ dla użytkownika
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

