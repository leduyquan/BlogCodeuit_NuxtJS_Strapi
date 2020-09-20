import React from 'react';
import Link from 'next/link';
import Moment from 'react-moment';
import './styles.scss';

const CardItem = ({ post }) => {
    const bannerUrl =
        process.env.NODE_ENV !== 'development'
            ? post.banner.url
            : process.env.API_URL + post.banner.url;
    return (
            <div className="col col-lg-4 col-md-6">
                <div className="card-item">
                    <div className="card-item--img">
                        <Link href='posts/[id]' as={`/posts/${post.path}`}>
                            <a className="link-reset">
                                <img
                                    className="picture"
                                    src={bannerUrl}
                                    alt={post.banner.url}
                                />
                            </a>
                        </Link>
                        <div className="card-item--category">
                            <a className="text">Javascript</a>
                        </div>
                    </div>

                    <div className="card-item--content">
                        <h2 className="title">
                            <Link
                                href='posts/[id]' as={`/posts/${post.path}`}>
                                <a className="link-reset">{post.title}</a>
                            </Link>
                        </h2>
                        <div className="meta">
                            
                            <span className="time">
                                {' '} - <Moment format="L">{post.published_at}</Moment>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


    );
};

export default CardItem;
