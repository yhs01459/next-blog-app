
import PostContent from "@/components/posts/post-detail/PostContent";
import { getPostData } from "@/lib/posts-util";

export const metadata = {
    title: 'post detail',
    description: 'show post detail',
  }
  
const PostDetailPage = ({params}) => {

    const data = getPostData(params.slug);
    return(
        <>
          <PostContent post={data}/>
       </>
    );
}
export default PostDetailPage;