import React from 'react';
import Body from '../resources/components/body';
import Render from '../resources/components/render';
import POSTS_QUERY from '../resources/graphql/post/posts';

const Home = () => {
    return (
        <div>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>Strapi blog đại loại</h1>
                    <Render query={POSTS_QUERY}>
                        {({ data: { posts } }) => {
                            return <Body posts={posts} />;
                        }}
                    </Render>
                </div>
            </div>
        </div>
    );
};

export default Home;
