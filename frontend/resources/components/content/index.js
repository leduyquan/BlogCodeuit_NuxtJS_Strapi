import React, { useContext, useEffect } from 'react';
import moment from 'moment';
import CardLatest from './card-latest';
import CardItem from './card-item';
import { Context } from '../../utils/context';
import './styles.scss';

const Content = ({ posts}) => {
    const [context, setContext] = useContext(Context);
    useEffect(() => {
        setContext({posts: posts})
    }, [])



    // useEffect(() => {
    //     console.log('fsdaf', context)
    // }, [context.posts])

    const postData = context.posts ? context.posts : posts;
    
    console.log('postData', postData)
    const postSorted = postData.sort((left, right) => {
        return moment.utc(left.timeStamp).diff(moment.utc(right.timeStamp))
    });
    const postLatest = postSorted[0];
    const postItems = postSorted.slice(0);

    return (
        <React.Fragment>
            {/* {<CardLatest post={postLatest}/> } */}
            <ul>
                { postItems.map(item => <CardItem key={item.id} post={item}/>) }
            </ul>
        </React.Fragment>
    )

}

export default Content;