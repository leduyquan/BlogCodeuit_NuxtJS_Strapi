import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import CardLatest from './card-latest';
import CardItem from './card-item';
import { Context } from '../../utils/context';
import './styles.scss';

const Content = ({ posts}) => {
    const [context, setContext] = useContext(Context);
    const [postLatest, setPostLatest] = useState(null);
    const [postItems, setPostItems] = useState([]);
    const postSorted = posts.sort((left, right) => {
        return moment.utc(left.timeStamp).diff(moment.utc(right.timeStamp))
    });

    useEffect(() => {
        if (context.isSearch) {
            console.log('11111')
            setPostLatest(null);
            setPostItems(context.posts);
            setContext({posts: postSorted, isSearch: false, needRender: false});
        } else {
            if (context.needRender) {
            console.log('2222')

                setPostLatest(postSorted[0]);
                if (postSorted.length > 1) setPostItems(postSorted.slice(1));
                setContext({posts: postSorted, isSearch: false, needRender: false});
            }
        }


    }, [context.posts, context.needRender])


    return (
        <React.Fragment>
            
            {postLatest && <CardLatest post={postLatest}/> }
            <ul>
                { postItems.map(item => <CardItem key={item.id} post={item}/>) }
            </ul>
        </React.Fragment>
    )

}

export default Content;