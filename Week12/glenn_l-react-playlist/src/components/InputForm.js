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

    return <form className="main__form" onSubmit={(event) => {
        event.preventDefault()
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
        setTitle("");
        setArtist("");
        setGenre("");
        setRating("");
        }}>
        <label className="main__form--text1">
            <span className="main__form--space">Title:</span>
            <input
                type="text"
                value={title}
                className="main__form--color1"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
        </label>
        <label className="main__form--text1">
            <span className="main__form--space">Artist:</span>
            <input
                type="text"
                className="main__form--color1"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="Artist"
            />
        </label>
        <label className="main__form--text2">
            <span className="main__form--space">Genre:</span>
            <select
                className="main__form--color1"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
            >
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
        <label className="main__form--text3">
            <span className="main__form--space">Rating:</span>
            <select
                className="main__form--color1"
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
        <button className="main__form--color2">Add Song</button>
    </form>
};

export default InputForm;