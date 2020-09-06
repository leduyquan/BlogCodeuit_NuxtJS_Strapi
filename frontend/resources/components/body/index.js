import React, { useState} from 'react';
import Content from '../content';
import Sidebar from '../sidebar';
import Render from '../render';
import POSTS_QUERY from '../../graphql/post/posts';
import { Context } from '../../utils/context';
import './styles.scss';

const Body = () => {
    const [context, setContext] = useState({posts: []});
    return (
        <div className="container">
            <div className="w-display">
                <div className="segment w-content">
                    <Context.Provider value={[context, setContext]} >
                        <div className="segment__main">
                            <Render query={POSTS_QUERY}>
                                {({ data: { posts } }) => {
                                    return <Content posts={posts}/>;
                                }}
                            </Render>
                        </div>
                        <div className="segment__sidebar">
                            <Sidebar />
                        </div>
                    </Context.Provider>
                </div>
            </div>
        </div>
    )
}

export default Body;
