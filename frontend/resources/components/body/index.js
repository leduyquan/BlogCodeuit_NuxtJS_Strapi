import React from 'react';
import Content from '../content';
import Render from '../render';
import POSTS_QUERY from '../../graphql/post/posts';
import './styles.scss';

const Body = () => {
    return (
        <div className="container">
            <div className="w-display">
                <div className="segment w-content">
                    <div className="segment__main">
                        <Render query={POSTS_QUERY}>
                            {({ data: { posts } }) => {
                                return <Content posts={posts} />;
                            }}
                        </Render>
                    </div>
                    <div className="segment__sidebar"></div>
                </div>
            </div>
        </div>
    )
}

export default Body;
