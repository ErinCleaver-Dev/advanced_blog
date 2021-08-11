import {Link} from 'react-router-dom'

const Posts = (props) => {
    const link = `post/${props.id}`;
    return (
        <div className="posts">
            <img src="https://source.unsplash.com/random" alt="loaded_images"/>
            <Link to={link}>{props.title}</Link>
        </div>
    )
}
export default Posts