import React from 'react'
import styled from 'styled-components'

import Card from '../components/Card'

//mui 
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined'
import Comments from '../components/Comments';

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Content = styled.div`
  flex: 4;
`;

const VideoWrapper = styled.div`
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.p`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #4b4bcf;
  font-weight: 500;
  color: white;
  border-radius: 5px;
  border-style: none;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

function Video() {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
              width="100%"
              height="400"
              src='https://www.youtube.com/embed/k3Vfj-e1Ma4'
              title='Youtube video player'
              frameBorder="0"
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test video</Title>
        <Details>
          <Info>7,948,154 views . Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src='https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/65th-GRAMMY-Awards---Arrivals/960x0.jpg?format=jpg&width=960' />
            <ChannelDetail>
              <ChannelName>Anshika Das</ChannelName>
              <ChannelCounter>200K subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque. Culpa accusantium rem quam facere minus? Autem illum tempora, ducimus consequatur vitae. Officiis!
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBScribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}

export default Video