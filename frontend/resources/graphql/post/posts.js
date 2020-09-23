import gql from 'graphql-tag';

const POSTS_QUERY = gql`
    query Posts {
        posts {
            id
            path
            title
            categories {
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
