import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/lib/posts-util";

const PostsPage = () => {
  const allPosts = getAllPosts();
    return(
        <>
        <AllPosts posts={allPosts}></AllPosts>
        </>
    )
}
export default PostsPage;