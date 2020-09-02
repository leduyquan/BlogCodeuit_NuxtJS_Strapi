import React from 'react';
import Card from '../card';

const Body = ({ posts }) => {
    const leftArticlesCount = Math.ceil(posts.length / 5);
    const leftArticles = posts.slice(0, leftArticlesCount);
    const rightArticles = posts.slice(leftArticlesCount, posts.length);

    return (
        <div>
            <div className="uk-child-width-1-2" data-uk-grid>
                <div>
                    {leftArticles.map((post, i) => {
                        return <Card post={post} key={`article__${post.id}`} />;
                    })}
                </div>
                <div>
                    <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                        {rightArticles.map((post, i) => {
                            return <Card post={post} key={`article__${post.id}`} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
