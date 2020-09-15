import { useRouter } from 'next/router';
import Render from '../../resources/components/render';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';
import POST_QUERY from '../../resources/graphql/post/post';
import '../../resources/assets/css/style.scss';

const Post = () => {
    const router = useRouter();
    return (
        <Render query={POST_QUERY} id={router.query.id}>
            {({ data: { post } }) => {
                const bannerUrl =
                    process.env.NODE_ENV !== 'development'
                        ? post.banner.url
                        : process.env.API_URL + post.banner.url;
                return (
                    <div className="background w-display m-top-35">
                        <div className="segment w-content">
                            <article className="post w-display">
                                <section className="post__header">
                                    <h1 className="post__header__title">{post.title}</h1>
                                    <div className="post__header__banner">
                                        <img className="picture--latest border-item" src={bannerUrl}></img>
                                    </div>
                                </section>
                                <section className="post__content">
                                    <div className="content-display">
                                        <div className="author">
                                            <div className="avatar"><img className="col-100p" src="https://res.cloudinary.com/restaff/image/upload/v1599368841/avatar/avatar_xas6er.jpg" /></div>
                                            <div className="name-date">
                                                <p className="name fw-bold">Quân Duy</p>
                                                <p className="datetime">
                                                    <Moment format="LL">
                                                        {post.published_at}
                                                    </Moment>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="separator"></div>
                                        <div className="typography">
                                            <ReactMarkdown source={post.content} escapeHtml={false} />
                                        </div>
                                    </div>
                                </section>
                            </article>
                        </div>
                    </div>
                    // <div>
                    //     <div
                    //         id="banner"
                    //         className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                    //         data-src={bannerUrl}
                    //         data-srcset={bannerUrl}
                    //         data-uk-img>
                    //         <h1>{post.title}</h1>
                    //     </div>

                    //     <div className="uk-section">
                    //         <div className="uk-container uk-container-small">
                    //             <ReactMarkdown source={post.content} escapeHtml={false} />
                    //             <p>
                    //                 <Moment format="MMM Do YYYY">
                    //                     {post.published_at}
                    //                 </Moment>
                    //             </p>
                    //         </div>
                    //     </div>
                    // </div>
                );
            }}
        </Render>
    );
};

export default Post;
