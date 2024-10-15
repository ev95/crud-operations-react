import Post from '../../components/Post/Post.jsx'
import './Posts.css'

function Posts({ posts, removePost }) {

    return (
        <div className='posts-container'>
            {posts.map((post) => {
                return <Post key={post.id} post={post} removePost={removePost} />
            })}
        </div>
    )
}

export default Posts