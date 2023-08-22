import PostGrid from '../posts/PostGrid';
import classes from './FeaturedPosts.module.css';

const FeaturedPostes = (props) => {
    return(
        <section className={classes.latest}>
            <h3>선택된 게시물</h3>
            <PostGrid posts={props.posts}></PostGrid>
        </section>
    )
}

export default FeaturedPostes;