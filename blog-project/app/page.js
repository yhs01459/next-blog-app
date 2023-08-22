import FeaturedPostes from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";

const DUMMY_DATA = [
  {
    title:'test-title1',
    image:'test.png',
    except:'test-exept',
    slug:'test-slug',
    date:'2023-08-22',
  },
  {
    title:'test-title2',
    image:'test.png',
    except:'test-exept',
    slug:'test-slug',
    date:'2023-08-22',
  },
  {
    title:'test-title3',
    image:'test.png',
    except:'test-exept',
    slug:'test-slug',
    date:'2023-08-22',
  },
  {
    title:'test-title4',
    image:'test.png',
    except:'test-exept',
    slug:'test-slug',
    date:'2023-08-22',
  }
]

const HomePage = () => {
  return( 
  <>
    <Hero />
    <FeaturedPostes posts={DUMMY_DATA} />
  </>
  ); 
}

export default HomePage;