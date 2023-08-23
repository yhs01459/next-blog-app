import PostGrid from '../posts/PostGrid';
import classes from './AllPosts.module.css';

const AllPosts = (props) => {
    return(
        <section className={classes.posts}>
            <h1>모든 게시물</h1>
            <PostGrid posts={props.posts}></PostGrid>
        </section>
    )
}

export default AllPosts;