import React, { useContext } from 'react';
import { Context } from '../../utils/context';

const Search = ({position}) => {
    const [context, setContext] = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = document.getElementById("searchTxt-" + position).value;
        const results = context.posts.filter((c => c.title.toLowerCase().includes(text)));
        if (text) {
            setContext({posts: results, isSearch: true, needRender: false});
        } else {
            setContext({posts: context.posts, isSearch: false, needRender: true});
        }
    };

    return (
        <aside className="widget-search">
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    id={"searchTxt-" + position}
                    type="text"
                    placeholder="Search ..."
                />
            </form>
        </aside>
    );
};

export default Search;
