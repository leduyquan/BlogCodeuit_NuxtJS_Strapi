import React from 'react';
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { Context } from '../../utils/context';

const Search = () => {
    const router = useRouter();
    const [context, setContext] = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = document.getElementById("searchTxt").value;
        const results = context.posts.filter((c => c.title.toLowerCase().includes(text)))

        console.log('results',results)
        console.log('context.posts',context.posts)
        if (text) {
            setContext({posts: results, isSearch: true});
        } else {
            setContext({posts: context.posts, isSearch: false});
        }
    };

    return (
        <aside className="widget-search">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    id="searchTxt"
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
