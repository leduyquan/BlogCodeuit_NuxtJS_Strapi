import React from 'react';
import moment from 'moment';
import CardLatest from './card-latest';
// import CardItem from './card-item';

const Content = ({ posts }) => {
    const postSorted = posts.sort((left, right) => {
        return moment.utc(left.timeStamp).diff(moment.utc(right.timeStamp))
    });
    const postLatest = postSorted[0];
    const postItems = postSorted.slice(2);

    return (
        <React.Fragment>
            <CardLatest post={postLatest}/>
            {/* { postItems.map(item => <CardItem post={item}/>) } */}
        </React.Fragment>
    )

}

export default Content;