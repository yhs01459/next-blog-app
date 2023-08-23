import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postDirectory = path.join(process.cwd(), 'post-data');

export const getPostData = (postId) => {

    const postSlug = postId.replace(/\.md$/, ''); 

    const filePath = path.join(postDirectory,`${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath,'utf-8');
   
    const {data, content} = matter(fileContent);
    
    const postData = {
        slug:postSlug,
        title:data.title,
        image:data.image,
        date:data.date,
        except:data.except,
        isFeatured:data.isFeatured,
        content,
    }
    return postData;
};

export const getAllPosts = () => {
    const postFiles = fs.readdirSync(postDirectory);
    const allPosts = postFiles.map((postFile)=>{
        return getPostData(postFile);
    });
    const sortedPosts = allPosts.sort((postA,postB)=>{postA.date>postB.date ? -1:1}); // 최근 게시물 순으로 정렬 
    return sortedPosts;
};

export const getFeaturedPost = () => {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post)=>{ return post.isFeatured });
    
    
    // const featuredPosts = [];
    // for (const post in allPosts){
    //     if(post.isFeatured){
    //         featuredPosts.push(post);
    //     }
    // }
    
    return featuredPosts;
};

