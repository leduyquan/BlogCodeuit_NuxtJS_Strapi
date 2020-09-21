import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import Card from './card';
import { Context } from '../../utils/context';
import './styles.scss';

const Content = ({ posts}) => {
    const [context, setContext] = useContext(Context);
    const [postItems, setPostItems] = useState([]);
    const postSorted = posts.sort((left, right) => {
        return moment.utc(left.timeStamp).diff(moment.utc(right.timeStamp))
    });

    useEffect(() => {
        if (context.isSearch) {
            setPostItems(context.posts);
            setContext({posts: postSorted, isSearch: false, needRender: false});
        } else {
            if (context.needRender) {
                setPostItems(postSorted);
                setContext({posts: postSorted, isSearch: false, needRender: false});
            }
        }
    }, [context.posts, context.needRender])

    return (
        <div className="posts row">
            { postItems.map(item => <Card key={item.id} post={item}/>) }
        </div>
    )

}

export default Content;