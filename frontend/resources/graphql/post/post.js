import gql from 'graphql-tag';

const POST_QUERY = gql`
    query Posts($path: String) {
        posts(where: {path: $path}) {
            id
            path
            title
            content
            banner {
                url
            }
            category {
                id
                name
            }
            published_at
        }
    }
`;

export default POST_QUERY;
