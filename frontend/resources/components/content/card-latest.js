import React from 'react';
import Link from 'next/link';
import './styles.scss';

const CardLatest = ({ post }) => {
    const bannerUrl = process.env.NODE_ENV !== 'development'
        ? post.banner.url
        : process.env.API_URL + post.banner.url;
    return (
        <div className="card-latest">
            <div className="card-latest--top">
            <Link href={{ pathname: 'children/post', query: { id: post.id } }} as={'/post/' + post.path}>
                <a className="link-reset">
                    <img className="picture--latest" src={bannerUrl} alt={post.banner.url}  />
                </a>
            </Link>
            </div>
            <div className="card-latest--body">
                <h2 className="title">
                    <Link href={{ pathname: 'children/post', query: { id: post.id } }} as={'/post/' + post.path}>
                        <a>{post.title}</a>
                    </Link>
                </h2>
                <p className="description">{post.descriptions} </p>
            </div>
        </div>
    );
};

export default CardLatest;
