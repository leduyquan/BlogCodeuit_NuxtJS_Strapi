import gql from 'graphql-tag';

const POSTS_QUERY = gql`
    query Posts {
        posts {
            id
            path
            title
            banner
            categories {
                id
                name
            }
        }
    }
`;

export default POSTS_QUERY;
