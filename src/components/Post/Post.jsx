import './Post.css'

function Post({ post, removePost }) {
    return (
        <div className="post-container">
            <button className='remobe-btn' onClick={() => removePost(post.id)}>X</button>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <div className="post-meta">
                <span>User ID: {post.userId}</span>
                <span>Post ID: {post.id}</span>
            </div>
        </div>
    )
}

export default Post