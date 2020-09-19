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
                <Link href='posts/[id]' as={`/posts/${post.path}`} >
                    <a className="link-reset">
                        <img className="picture--latest border-item" src={bannerUrl} alt={post.banner.url} />
                    </a>
                </Link>
            </div>
            <div className="card-latest--body">
                <h2 className="title">
                    <Link href='posts/[id]' as={`/posts/${post.path}`}>
                        <a>{post.title}</a>
                    </Link>
                </h2>
                <p className="description">{post.descriptions} </p>
                <div className="meta">
                    <a className="category">Java</a>
                </div>
            </div>
        </div>
    );
};

export default CardLatest;
