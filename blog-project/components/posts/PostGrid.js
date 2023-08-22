import PostItem from "./PostItem";
import classes from "./PostGrid.module.css";
const PostGrid = (props) => {
    const {posts} = props;

    return(
        <ul className={classes.grid}>
        {posts.map((item)=>(
                <PostItem 
                key={item.slug}
                title={item.title}
                image={item.image}
                date={item.date}
                except={item.except}
                slug={item.slug}>
                </PostItem>
        ))}
        </ul>
    );
}
export default PostGrid;