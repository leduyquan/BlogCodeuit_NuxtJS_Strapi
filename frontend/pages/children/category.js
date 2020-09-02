import { useRouter } from "next/router";
import Body from '../../resources/components/body';
import Render from '../../resources/components/render';
import CATEGORY_POSTS_QUERY from '../../resources/graphql/category/posts'

const Category = () => {
  const router = useRouter();

  return (
    <Query query={CATEGORY_POSTS_QUERY} id={router.query.id}>
      {({ data: { category } }) => {
        return (
          <div>
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <h1>{category.name}</h1>
                <Body posts={category.post} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Category;