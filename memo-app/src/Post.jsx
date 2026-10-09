import React from "react";

const Post = React.memo(({value}) => {


    console.log("Post component rendered", value);
    return (
        <div>
            <h2>{value.name}</h2>
            <p>Age: {value.age}</p>
        </div>
    );
});

export default Post;
