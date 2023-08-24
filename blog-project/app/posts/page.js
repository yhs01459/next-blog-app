import AllPosts from "@/components/posts/AllPosts";
import { getAllPosts } from "@/lib/posts-util";

export const metadata = {
  title: 'all posts page',
  description: 'show all posts',
}

const PostsPage = () => {
  const allPosts = getAllPosts();
    return(
        <>
        <AllPosts posts={allPosts}></AllPosts>
        </>
    )
}
export default PostsPage;