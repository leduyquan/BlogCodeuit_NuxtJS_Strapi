import React, { useState } from 'react';
import Content from '../resources/components/content';
import AboutMe from '../resources/components/about-me';
import Render from '../resources/components/render';
import POSTS_QUERY from '../resources/graphql/post/posts';
import Search from '../resources/components/search';
import { Context } from '../resources/utils/context';
import '../resources/assets/css/style.scss';

const HomePage = () => {
    const [context, setContext] = useState({
        posts: [],
        isSearch: false,
        needRender: true,
    });
    return (
        <div className="wrapper m-top-35">
            <Context.Provider value={[context, setContext]}>
                {/* <div className="flex justify-flex-end">
                    <Search />
                </div> */}
                <Render query={POSTS_QUERY}>
                    {({ data: { posts } }) => {
                        return <Content posts={posts} />;
                    }}
                </Render>
            </Context.Provider>
            <AboutMe />
        </div>
    );
};

export default HomePage;
