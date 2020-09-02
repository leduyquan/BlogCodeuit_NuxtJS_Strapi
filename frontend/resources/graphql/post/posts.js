import gql from 'graphql-tag';

const POSTS_QUERY = gql`
    query Posts {
        posts {
            id
            path
            title
            category {
                id
                name
            }
            banner {
                url
            }
        }
    }
`;

export default POSTS_QUERY;
