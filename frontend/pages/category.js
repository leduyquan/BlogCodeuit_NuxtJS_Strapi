import { useRouter } from 'next/router';
import Body from '../../resources/components/body';
import Render from '../../resources/components/render';
import CATEGORY_POSTS_QUERY from '../../resources/graphql/category/posts';

const Category = () => {
    const router = useRouter();
    return (
        // <Render query={CATEGORY_POSTS_QUERY} path={router.query.id}>
        //     {({ data: { category } }) => {
        //         return (
        //             <div>
        //                 <div className="uk-section">
        //                     <div className="uk-container uk-container-large">
        //                         <h1>{category.name}</h1>
        //                         <Body posts={category.post} />
        //                     </div>
        //                 </div>
        //             </div>
        //         );
        //     }}
        // </Render>
    );
};

export default Category;
