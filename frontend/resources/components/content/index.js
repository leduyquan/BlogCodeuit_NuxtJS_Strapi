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
        
        setPostLatest(postSorted[0]);
            if (postSorted.length > 1) setPostItems(postSorted.slice(1));
            setContext({posts: postSorted, isSearch: false});
    }, [])

    useEffect(() => {
        console.log('dzp update')
        if (context.isSearch) {
            console.log('search ne', context.posts)
            setPostLatest(null);
            setPostItems(context.posts);
            
        } else {
            console.log('khiep')
            setPostLatest(postSorted[0]);
            if (postSorted.length > 1) setPostItems(postSorted.slice(1));
        }
        // else {
        //     console.log('reset')
        //     setPostLatest(postSorted[0]);
        //     if (postSorted.length > 1) setPostItems(postSorted.slice(1));
        //     setContext({posts: postSorted, isSearch: false});
        // }
        //setContext({posts: postSorted, isSearch: false});
        
    }, [context.posts])

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