const personData = [
    {
        "firstName": "Evelyn",
        "lastName": "Tullett",
        "photo": "../photos/photo4.jpg",
        "exercises": [
            {
                "exercise": "SCRUM",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D1-1",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W1D2-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W1D2-2",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W1D2-3",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W1D2-4",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D2-5",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D3-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D3-2",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D3-4",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W1D3-5",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W1D3 - Project - Guess-the-number",
                "difficulty": 5,
                "easiness": 5
            },
            {
                "exercise": "W1D4-1",
                "difficulty": 4,
                "easiness": 5
            },
            {
                "exercise": "W1D4 - Project - Kleurentoggle",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D5 - Project - Galgje",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W2D1-1",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W2D1-2",
                "difficulty": 2,
                "easiness": 5
            },
            {
                "exercise": "W2D2-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D2-2",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D2-3",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D3-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W2D3-2",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W2D3-3",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W2D4-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W2D4-2",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W2D4-3",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W2D5 - Project - Filmzoeker",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W3D1-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W3D1-2",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D1-3",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W3D1-4",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W3D2-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D2-2",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W3D2-3",
                "difficulty": 3,
                "easiness": 5
            },
            {
                "exercise": "W3D3-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W3D3-2",
                "difficulty": 4,
                "easiness": 5
            },
            {
                "exercise": "W3D3-3",
                "difficulty": 3,
                "easiness": 5
            },
            {
                "exercise": "W3D3-4",
                "difficulty": 4,
                "easiness": 5
            },
            {
                "exercise": "W3D4-1",
                "difficulty": 5,
                "easiness": 5
            },
            {
                "exercise": "W3D4-2",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W3D5 - Project - Todo-List",
                "difficulty": 2,
                "easiness": 5
            },
            {
                "exercise": "W4D2-1",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W4D2-2",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W4D2-3",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W4D2-4",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W4D3-1",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W4D3-2",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W4D3-3",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W4D3-4",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W4D3-5",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W4D3 - Project - Next-Level CSS",
                "difficulty": 1,
                "easiness": 5
            },
            {
                "exercise": "W5D4-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W5D5 - Project - Lil_Playlist",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W6D1-1",
                "difficulty": 5,
                "easiness": 5
            },
            {
                "exercise": "W6D2-1",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W6D2 - Project - Eindopdracht",
                "difficulty": 5,
                "easiness": 5
            },
        ],
    },
    {
        "firstName": "Aranka",
        "lastName": "Vallance",
        "photo": "../photos/photo1.jpg",
        "exercises": [
            {
                "exercise": "SCRUM",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D1-1",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W1D2-1",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W1D2-2",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W1D2-3",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W1D2-4",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W1D2-5",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W1D3-1",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W1D3-2",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W1D3-4",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W1D3-5",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W1D3 - Project - Guess-the-number",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W1D4-1",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W1D4 - Project - Kleurentoggle",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W1D5 - Project - Galgje",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W2D1-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W2D1-2",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W2D2-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D2-2",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D2-3",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W2D3-1",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W2D3-2",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W2D3-3",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W2D4-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W2D4-2",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W2D4-3",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W2D5 - Project - Filmzoeker",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W3D1-1",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W3D1-2",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W3D1-3",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W3D1-4",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W3D2-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W3D2-2",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W3D2-3",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W3D3-1",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W3D3-2",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W3D3-3",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W3D3-4",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W3D4-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W3D4-2",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W3D5 - Project - Todo-List",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W4D2-1",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W4D2-2",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W4D2-3",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W4D2-4",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W4D3-1",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W4D3-2",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W4D3-3",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W4D3-4",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W4D3-5",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W4D3 - Project - Next-Level CSS",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W5D4-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W5D5 - Project - Lil_Playlist",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W6D1-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W6D2-1",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W6D2 - Project - Eindopdracht",
                "difficulty": 3,
                "easiness": 4
            },
        ],
    },
    {
        "firstName": "Floris",
        "lastName": "Proven",
        "photo": "../photos/photo2.jpg",
        "exercises": [
            {
                "exercise": "SCRUM",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W1D1-1",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W1D2-1",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W1D2-2",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W1D2-3",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W1D2-4",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D2-5",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W1D3-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D3-2",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W1D3-4",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W1D3-5",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D3 - Project - Guess-the-number",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W1D4-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W1D4 - Project - Kleurentoggle",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W1D5 - Project - Galgje",
                "difficulty": 4,
                "easiness": 4
            },

            {
                "exercise": "W2D1-1",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W2D1-2",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W2D2-1",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W2D2-2",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W2D2-3",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W2D3-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W2D3-2",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W2D3-3",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W2D4-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W2D4-2",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W2D4-3",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W2D5 - Project - Filmzoeker",
                "difficulty": 4,
                "easiness": 1
            },

            {
                "exercise": "W3D1-1",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W3D1-2",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W3D1-3",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W3D1-4",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W3D2-1",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W3D2-2",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W3D2-3",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W3D3-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W3D3-2",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D3-3",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W3D3-4",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W3D4-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W3D4-2",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W3D5 - Project - Todo-List",
                "difficulty": 4,
                "easiness": 2
            },

            {
                "exercise": "W4D2-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W4D2-2",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W4D2-3",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W4D2-4",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W4D3-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W4D3-2",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W4D3-3",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W4D3-4",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W4D3-5",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W4D3 - Project - Next-Level CSS",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W5D4-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W5D5 - Project - Lil_Playlist",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W6D1-1",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W6D2-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W6D2 - Project - Eindopdracht",
                "difficulty": 4,
                "easiness": 1
            },
        ],
    },
    {
        "firstName": "Hector",
        "lastName": "Gregson",
        "photo": "../photos/photo3.jpg",
        "exercises": [
            {
                "exercise": "SCRUM",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W1D1-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W1D2-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D2-2",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W1D2-3",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W1D2-4",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W1D2-5",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W1D3-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W1D3-2",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W1D3-4",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W1D3-5",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W1D3 - Project - Guess-the-number",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W1D4-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D4 - Project - Kleurentoggle",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W1D5 - Project - Galgje",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W2D1-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W2D1-2",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W2D2-1",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W2D2-2",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W2D2-3",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W2D3-1",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W2D3-2",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W2D3-3",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W2D4-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W2D4-2",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W2D4-3",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W2D5 - Project - Filmzoeker",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W3D1-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W3D1-2",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W3D1-3",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W3D1-4",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W3D2-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W3D2-2",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W3D2-3",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W3D3-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W3D3-2",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W3D3-3",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D3-4",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W3D4-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W3D4-2",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W3D5 - Project - Todo-List",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W4D2-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W4D2-2",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W4D2-3",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W4D2-4",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W4D3-1",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W4D3-2",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W4D3-3",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W4D3-4",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W4D3-5",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W4D3 - Project - Next-Level CSS",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W5D4-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W5D5 - Project - Lil_Playlist",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W6D1-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W6D2-1",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W6D2 - Project - Eindopdracht",
                "difficulty": 2,
                "easiness": 4
            },
        ],
    },
    {
        "firstName": "Martina",
        "lastName": "Farraway",
        "photo": "../photos/photo4.jpg",
        "exercises": [
            {
                "exercise": "SCRUM",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D1-1",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W1D2-1",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W1D2-2",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W1D2-3",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W1D2-4",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W1D2-5",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D3-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D3-2",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W1D3-4",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W1D3-5",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D3 - Project - Guess-the-number",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W1D4-1",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W1D4 - Project - Kleurentoggle",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W1D5 - Project - Galgje",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W2D1-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W2D1-2",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W2D2-1",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W2D2-2",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W2D2-3",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W2D3-1",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W2D3-2",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D3-3",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W2D4-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W2D4-2",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D4-3",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D5 - Project - Filmzoeker",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D1-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W3D1-2",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W3D1-3",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W3D1-4",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W3D2-1",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W3D2-2",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D2-3",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W3D3-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W3D3-2",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W3D3-3",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W3D3-4",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W3D4-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W3D4-2",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W3D5 - Project - Todo-List",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W4D2-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W4D2-2",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W4D2-3",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W4D2-4",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W4D3-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W4D3-2",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W4D3-3",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W4D3-4",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W4D3-5",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W4D3 - Project - Next-Level CSS",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W5D4-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W5D5 - Project - Lil_Playlist",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W6D1-1",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W6D2-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W6D2 - Project - Eindopdracht",
                "difficulty": 1,
                "easiness": 4
            },
        ],
    },
    {
        "firstName": "Maurits",
        "lastName": "Crocetto",
        "photo": "../photos/photo2.jpg",
        "exercises": [
            {
                "exercise": "SCRUM",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D1-1",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W1D2-1",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W1D2-2",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W1D2-3",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W1D2-4",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W1D2-5",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W1D3-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D3-2",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W1D3-4",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W1D3-5",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W1D3 - Project - Guess-the-number",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D4-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D4 - Project - Kleurentoggle",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W1D5 - Project - Galgje",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W2D1-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W2D1-2",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W2D2-1",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W2D2-2",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W2D2-3",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W2D3-1",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W2D3-2",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W2D3-3",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W2D4-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W2D4-2",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W2D4-3",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W2D5 - Project - Filmzoeker",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W3D1-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W3D1-2",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W3D1-3",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W3D1-4",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W3D2-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W3D2-2",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W3D2-3",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W3D3-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W3D3-2",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W3D3-3",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W3D3-4",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W3D4-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W3D4-2",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W3D5 - Project - Todo-List",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W4D2-1",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W4D2-2",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W4D2-3",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W4D2-4",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W4D3-1",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W4D3-2",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W4D3-3",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W4D3-4",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W4D3-5",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W4D3 - Project - Next-Level CSS",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W5D4-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W5D5 - Project - Lil_Playlist",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W6D1-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W6D2-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W6D2 - Project - Eindopdracht",
                "difficulty": 3,
                "easiness": 3
            },
        ],
    },
    {
        "firstName": "Rahima",
        "lastName": "Watford",
        "photo": "../photos/photo4.jpg",
        "exercises": [
            {
                "exercise": "SCRUM",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D1-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D2-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D2-2",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W1D2-3",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W1D2-4",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W1D2-5",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W1D3-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D3-2",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D3-4",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W1D3-5",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W1D3 - Project - Guess-the-number",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W1D4-1",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W1D4 - Project - Kleurentoggle",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D5 - Project - Galgje",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W2D1-1",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W2D1-2",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W2D2-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W2D2-2",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W2D2-3",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W2D3-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W2D3-2",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W2D3-3",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W2D4-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W2D4-2",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W2D4-3",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W2D5 - Project - Filmzoeker",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W3D1-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W3D1-2",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W3D1-3",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W3D1-4",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D2-1",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W3D2-2",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W3D2-3",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W3D3-1",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W3D3-2",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W3D3-3",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W3D3-4",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W3D4-1",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W3D4-2",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W3D5 - Project - Todo-List",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W4D2-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W4D2-2",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W4D2-3",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W4D2-4",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W4D3-1",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W4D3-2",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W4D3-3",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W4D3-4",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W4D3-5",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W4D3 - Project - Next-Level CSS",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W5D4-1",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W5D5 - Project - Lil_Playlist",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W6D1-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W6D2-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W6D2 - Project - Eindopdracht",
                "difficulty": 4,
                "easiness": 1
            },
        ],
    },
    {
        "firstName": "Sandra",
        "lastName": "Gladman",
        "photo": "../photos/photo1.jpg",
        "exercises": [
            {
                "exercise": "SCRUM",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W1D1-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D2-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D2-2",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W1D2-3",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D2-4",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W1D2-5",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W1D3-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D3-2",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D3-4",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W1D3-5",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W1D3 - Project - Guess-the-number",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D4-1",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W1D4 - Project - Kleurentoggle",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W1D5 - Project - Galgje",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W2D1-1",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W2D1-2",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W2D2-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D2-2",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W2D2-3",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W2D3-1",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W2D3-2",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W2D3-3",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W2D4-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W2D4-2",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W2D4-3",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W2D5 - Project - Filmzoeker",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D1-1",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W3D1-2",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W3D1-3",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D1-4",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W3D2-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D2-2",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W3D2-3",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W3D3-1",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W3D3-2",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W3D3-3",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W3D3-4",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W3D4-1",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W3D4-2",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W3D5 - Project - Todo-List",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W4D2-1",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W4D2-2",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W4D2-3",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W4D2-4",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W4D3-1",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W4D3-2",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W4D3-3",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W4D3-4",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W4D3-5",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W4D3 - Project - Next-Level CSS",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W5D4-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W5D5 - Project - Lil_Playlist",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W6D1-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W6D2-1",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W6D2 - Project - Eindopdracht",
                "difficulty": 4,
                "easiness": 1
            },
        ],
    },
    {
        "firstName": "Wietske",
        "lastName": "De La Coste",
        "photo": "../photos/photo1.jpg",
        "exercises": [
            {
                "exercise": "SCRUM",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D1-1",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W1D2-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W1D2-2",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W1D2-3",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W1D2-4",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W1D2-5",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D3-1",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W1D3-2",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W1D3-4",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W1D3-5",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D3 - Project - Guess-the-number",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D4-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W1D4 - Project - Kleurentoggle",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W1D5 - Project - Galgje",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W2D1-1",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W2D1-2",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W2D2-1",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W2D2-2",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W2D2-3",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D3-1",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W2D3-2",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W2D3-3",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W2D4-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W2D4-2",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W2D4-3",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W2D5 - Project - Filmzoeker",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W3D1-1",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W3D1-2",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W3D1-3",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W3D1-4",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W3D2-1",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W3D2-2",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W3D2-3",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D3-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W3D3-2",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W3D3-3",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W3D3-4",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W3D4-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W3D4-2",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W3D5 - Project - Todo-List",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W4D2-1",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W4D2-2",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W4D2-3",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W4D2-4",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W4D3-1",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W4D3-2",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W4D3-3",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W4D3-4",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W4D3-5",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W4D3 - Project - Next-Level CSS",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W5D4-1",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W5D5 - Project - Lil_Playlist",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W6D1-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W6D2-1",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W6D2 - Project - Eindopdracht",
                "difficulty": 1,
                "easiness": 2
            },
        ],
    },
    {
        "firstName": "Storm",
        "lastName": "Shepstone",
        "photo": "../photos/photo3.jpg",
        "exercises": [
            {
                "exercise": "SCRUM",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D1-1",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W1D2-1",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W1D2-2",
                "difficulty": 1,
                "easiness": 3
            },
            {
                "exercise": "W1D2-3",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W1D2-4",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W1D2-5",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W1D3-1",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W1D3-2",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D3-4",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W1D3-5",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W1D3 - Project - Guess-the-number",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W1D4-1",
                "difficulty": 4,
                "easiness": 2
            },
            {
                "exercise": "W1D4 - Project - Kleurentoggle",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W1D5 - Project - Galgje",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W2D1-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W2D1-2",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W2D2-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W2D2-2",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W2D2-3",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W2D3-1",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W2D3-2",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D3-3",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W2D4-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W2D4-2",
                "difficulty": 4,
                "easiness": 3
            },
            {
                "exercise": "W2D4-3",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W2D5 - Project - Filmzoeker",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W3D1-1",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W3D1-2",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W3D1-3",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W3D1-4",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W3D2-1",
                "difficulty": 1,
                "easiness": 4
            },
            {
                "exercise": "W3D2-2",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W3D2-3",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W3D3-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W3D3-2",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W3D3-3",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W3D3-4",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W3D4-1",
                "difficulty": 2,
                "easiness": 4
            },
            {
                "exercise": "W3D4-2",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W3D5 - Project - Todo-List",
                "difficulty": 3,
                "easiness": 2
            },
            {
                "exercise": "W4D2-1",
                "difficulty": 2,
                "easiness": 1
            },
            {
                "exercise": "W4D2-2",
                "difficulty": 3,
                "easiness": 3
            },
            {
                "exercise": "W4D2-3",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W4D2-4",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W4D3-1",
                "difficulty": 3,
                "easiness": 4
            },
            {
                "exercise": "W4D3-2",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W4D3-3",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W4D3-4",
                "difficulty": 3,
                "easiness": 1
            },
            {
                "exercise": "W4D3-5",
                "difficulty": 2,
                "easiness": 3
            },
            {
                "exercise": "W4D3 - Project - Next-Level CSS",
                "difficulty": 4,
                "easiness": 1
            },
            {
                "exercise": "W5D4-1",
                "difficulty": 2,
                "easiness": 2
            },
            {
                "exercise": "W5D5 - Project - Lil_Playlist",
                "difficulty": 1,
                "easiness": 2
            },
            {
                "exercise": "W6D1-1",
                "difficulty": 4,
                "easiness": 4
            },
            {
                "exercise": "W6D2-1",
                "difficulty": 1,
                "easiness": 1
            },
            {
                "exercise": "W6D2 - Project - Eindopdracht",
                "difficulty": 3,
                "easiness": 3
            },
        ],
    },
];

export default personData;