import React from 'react';
import Link from 'next/link';

const CardLatest = ({ post }) => {
    const bannerUrl = process.env.NODE_ENV !== 'development'
        ? post.banner.url
        : process.env.API_URL + post.banner.url;
    return (
        <div className="card-big">
            <Link href={{ pathname: 'children/post', query: { id: post.id } }} as={'/post/' + post.path}>
                <a className="link-reset">
                <div className="card-media-top">
                    <img className="picture" src={bannerUrl} alt={post.banner.url}  />
                </div>
                <div className="card-body">
                    <h2 className="title">{post.title} </h2>
                </div>
                </a>
            </Link>
        </div>
    );
};

export default CardLatest;
