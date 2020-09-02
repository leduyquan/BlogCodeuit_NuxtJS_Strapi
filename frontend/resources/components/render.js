import React from 'react';
import { useQuery } from '@apollo/react-hooks';

const Render = ({ children, query, id, name }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { id: id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;
    return children({ data });
};

export default Render;
