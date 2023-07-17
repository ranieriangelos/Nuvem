import React from "react";
import { NewsHome, ListNews, ItemList } from './style'
import posts from  './posts'

const News: React.FC = () => {
    return(
        <NewsHome>
            <div className="MainNews">
                <h2>quer aprender um pouco mais?</h2>
                <h1>///acompanhe nosso blog</h1>
                {posts.map((posts, index) => (
                    <ListNews key={index}>
                        <ItemList>
                           <img src={posts.img}></img> 
                           <a href={posts.link}>
                                <h2>{posts.categoria}</h2>
                                <h3>{posts.news}</h3>
                           </a>
                            </ItemList>
                    </ListNews>
                ))}
            </div>
        </NewsHome>
);
}

export default News;