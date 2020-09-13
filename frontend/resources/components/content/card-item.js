import React from 'react';
import Link from 'next/link';
import './styles.scss';

const CardItem = ({ post }) => {
    const bannerUrl =
        process.env.NODE_ENV !== 'development'
            ? post.banner.url
            : process.env.API_URL + post.banner.url;
    return (
        <li className="card-item flex">
            <div className="card-item--left">
                <Link
                    href={{ pathname: 'children/post', query: { id: post.id } }}
                    as={'/post/' + post.path}>
                    <a className="link-reset">
                        <img
                            className="picture--latest border-item"
                            src={bannerUrl}
                            alt={post.banner.url}
                        />
                    </a>
                </Link>
            </div>
            <div className="card-item--right p-left-20">
                <h4 className="title">
                    <Link
                        href={{ pathname: 'children/post', query: { id: post.id } }}
                        as={'/post/' + post.path}>
                        <a className="link-reset">
                        {post.title}
                        </a>
                    </Link>
                </h4>
                <div className="meta">
                    <a className="category">Java</a>
                    <span className="time"> - 4 giờ trước</span>
                </div>
                <span className="description">{post.descriptions}</span>
            </div>
        </li>
    );
};

export default CardItem;
