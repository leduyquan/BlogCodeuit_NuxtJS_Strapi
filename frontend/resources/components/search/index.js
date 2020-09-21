import React, { useContext } from 'react';
import { Context } from '../../utils/context';
import './styles.scss';

const Search = () => {
    const [context, setContext] = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = document.getElementById("searchTxt").value;
        const results = context.posts.filter((c => c.title.toLowerCase().includes(text)));
        if (text) {
            setContext({posts: results, isSearch: true, needRender: false});
        } else {
            setContext({posts: context.posts, isSearch: false, needRender: true});
        }
    };

    return (
        <div className="widget-search">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    id="searchTxt"
                    type="text"
                    placeholder="Search ..."
                />
            </form>
        </div>
    );
};

export default Search;
