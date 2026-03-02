import React, { useState } from 'react';

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']

function LikeButton()
{
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLikes(likes + 1);
    };

    return (
        <button
            style={{ backgroundColor: colors[likes % colors.length], margin: '2rem' }}
            onClick={handleClick}
        >
            {likes} Likes
        </button>
    )
}

export default LikeButton