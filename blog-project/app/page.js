
import FeaturedPostes from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";
import { getFeaturedPost } from "@/lib/posts-util";



const HomePage = () => {
  const featuredPosts = getFeaturedPost();
  
 
  return( 
  <>
    <Hero />
    <FeaturedPostes posts={featuredPosts} />
  </>
  ); 
}


export default HomePage;