import PostForm from '../PostForm/PostForm';
import { useState } from 'react'

import './Header.css'

function Header({ addToPosts }) {
    const [showForm, setShowForm] = useState(false);

    return (
        <div>
            {
                showForm &&
                <PostForm addToPosts={addToPosts} />
            }
            <div>
                <button onClick={() => setShowForm(!showForm)}> {showForm ? "Hide form" : "Create post"} </button>
            </div>
        </div >
    )
}

export default Header