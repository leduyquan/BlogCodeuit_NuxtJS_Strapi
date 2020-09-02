import React from 'react';
import Link from 'next/link';

const Card = ({ post }) => {
    const bannerUrl =
        process.env.NODE_ENV !== 'development'
            ? post.banner.url
            : process.env.API_URL + post.banner.url;
    return (
        <Link
            href={{ pathname: 'childen/post', query: { id: post.id } }}
            as={'/post/' + post.path}>
            <a className="uk-link-reset">
                <div className="uk-card uk-card-muted">
                    <div className="uk-card-media-top">
                        <img src={bannerUrl} alt={post.banner.url} height="100" />
                    </div>
                    <div className="uk-card-body">
                        <p id="category" className="uk-text-uppercase">
                            {post.category.name}
                        </p>
                        <p id="title" className="uk-text-large">
                            {post.title}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default Card;
