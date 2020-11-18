import { nanoid } from '@reduxjs/toolkit';

const INITIAL_STATE = [
    {
        id: nanoid(6),
        title: "We are the champions",
        artist: "Queen",
        genre: "Rock",
        rating: 5,
    },
    {
        id: nanoid(6),
        title: "Imagine",
        artist: "John Lennon",
        genre: "Rock",
        rating: 4,
    }
];

export default INITIAL_STATE;