import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from '../components/Card';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

function Home({type}) {

  const [videos, setVideos] = useState([]);

  //whenever refreshing the page there'll be a function which will fetch the videos so we will use useEffect here
  //to fetch data - using axios
  
  useEffect(() =>{
    const fetchVideos = async () => {
      const res = await axios.get(`api/videos/${type}`)
      setVideos(res.data);
    }
    fetchVideos()
  }, [type]);

  return (
    <Container>
      {videos.map((video)=> (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home