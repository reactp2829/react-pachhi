import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import { Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Mypost() {
    //const {uid} = useParams()
    const userData = useSelector((state) => state.auth.userData);
    const uid = userData.$id;
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        appwriteService.getPosts()
        .then((posts)=>{
            setPosts(posts.documents)
        })
    },[uid])
  return (
    <div className='w-full py-8'>
    <Container>
        <div className='flex flex-wrap'>
            {posts.map((post)=>(
                post.userId === uid ? 
                (<div key={post.$id} className='p-2 w-1/4'>
                <PostCard {...post}/>
                </div>):null
            ))}
        </div>
    </Container>
</div>
  )
}

export default Mypost