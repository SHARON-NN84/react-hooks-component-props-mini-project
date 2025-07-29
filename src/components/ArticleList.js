import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const listItems = posts.map(({id, title, date, preview}) => {
        return <Article key={id} title={title} date={date} preview={preview} />
    })
    return (
        <main>
            {listItems}
        </main>
    );
}

export default ArticleList;