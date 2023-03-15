import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = ({cat}) => {

  const [posts,setPosts]=useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data)
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[cat]);

    // const posts= [
    //     {
    //       id:1,
    //       title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, mollitia in asperiores dolor ex perferendis fugiat omnis consequuntur",
    //       img:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
    //     },
    //     {
    //       id:2,
    //       title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, mollitia in asperiores dolor ex perferendis fugiat omnis consequuntur",
    //       img:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
    //     },
    //     {
    //       id:3,
    //       title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, mollitia in asperiores dolor ex perferendis fugiat omnis consequuntur",
    //       img:"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
    //     }
    //   ];

  return (
    <div className='menu'>
        <h1>Other post you may like</h1>
        {posts.map((post) =>(
            <div className="post" key={post.id}>
                <img src={`../upload/${post?.img}`} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu