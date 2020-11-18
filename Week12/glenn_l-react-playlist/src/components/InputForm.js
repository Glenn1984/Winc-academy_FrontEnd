import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import { addFavourites } from "../actions";

const InputForm = () => {
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [rating, setRating] = useState();
    const dispatch = useDispatch();

    return <form onSubmit={() => {
        dispatch(
            addFavourites(
                {
                    id: nanoid(6),
                    title: title,
                    artist: artist,
                    genre: genre,
                    rating: rating,
                }
            )
        );
        // setTitle("");
        // setArtist("");
        // setGenre("");
        // setRating("");
        }}>
        <label>
            Title:
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
        </label>
        <label>
            Artist:
            <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="Artist"
            />
        </label>
        <label>
            Genre:
                <select value={genre}
                onChange={(e) => setGenre(e.target.value)}>
                <option default>Genre</option>
                <option value="Blues">Blues</option>
                <option value="Classics">Classics</option>
                <option value="Country">Country</option>
                <option value="Hiphop">Hiphop</option>
                <option value="House">House</option>
                <option value="Jazz">Jazz</option>
                <option value="Opera">Opera</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
            </select>
        </label>
        <label>
            Rating:
                <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            >
                <option default>Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </label>
        <button>Add Song</button>
    </form>
};

export default InputForm;