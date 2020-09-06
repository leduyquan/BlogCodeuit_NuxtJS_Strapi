import React from 'react';
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { Context } from '../../utils/context';

const Search = () => {
    const router = useRouter();
    const [context, setContext] = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('ee',e)
        const results = context.posts.filter((c => c.title.toLowerCase().includes('từ chối')))
        console.log('conte', results)
        setContext({posts: results})
    };

    return (
        <aside className="widget-search">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    className="search-field"
                    type="text"
                    //value={query}
                    //onChange={handleParam(setQuery)}
                    placeholder="Search ..."
                    //aria-label="Search"
                />
            </form>
        </aside>
    );
};

export default Search;
