import React from 'react';
import Spinner from './spinner';
import { useQuery } from '@apollo/react-hooks';

const Render = ({ children, query, path }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { path: path },
    });

    if (loading) return <Spinner/>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    return children({ data });
};

export default Render;
