import React, { useState } from 'react';
import Content from '../resources/components/content';
import Sidebar from '../resources/components/sidebar';
import Render from '../resources/components/render';
import POSTS_QUERY from '../resources/graphql/post/posts';
import Search from '../resources/components/sidebar/search';
import { Context } from '../resources/utils/context';
import '../resources/assets/css/style.scss';

const HomePage = () => {
    const [context, setContext] = useState({
        posts: [],
        isSearch: false,
        needRender: true,
    });
    return (
        <div className="w-display m-top-35">
            <div className="segment w-content">
                <Context.Provider value={[context, setContext]}>
                    <div className="main">
                        <Search position="top" />
                        <Render query={POSTS_QUERY}>
                            {({ data: { posts } }) => {
                                return <Content posts={posts} />;
                            }}
                        </Render>
                    </div>
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                </Context.Provider>
            </div>
        </div>
    );
};

export default HomePage;
