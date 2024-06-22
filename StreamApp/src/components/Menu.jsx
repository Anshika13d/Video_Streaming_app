import React from 'react'
import styled from "styled-components";

//images
import juzplay from "../images/JuzPlaYY_transparent.png";

//mui
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

//menu will be 1 unit
const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 100vh;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
    
`;

const Wrapper = styled.div`
    padding: 5px 35px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap:1px;
    font-weight:bold;
    /* margin-bottom:2px; */
    font-size:18px;
`;

const Img = styled.img`
    height:60px;
`;

const Item = styled.div`
    display:flex;
    align-items:center;
    gap: 20px;
    cursor: pointer;
    padding: 7px 10px;

    &:hover{
        background-color: ${({theme}) => theme.soft};
    }
`;

const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) =>theme.soft};
`

//login
const Login = styled.div``;
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
`

function Menu({darkMode, setDarkMode}) {
  return (
    <Container>
        <Wrapper>
        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
            <Logo>
                <Img src={juzplay} />
                JuzPlaYY
            </Logo>
        </Link>
            <Item>
                <HomeIcon />
                Home
            </Item>
            <Link to="trends" style={{textDecoration:"none", color:"inherit"}}>
                <Item>
                    <ExploreOutlinedIcon />
                    Explore
                </Item>
            </Link>
            <Link to="subscriptions" style={{textDecoration:"none", color:"inherit"}}>
            <Item>
                <SubscriptionsOutlinedIcon />
                Subscription
            </Item>
            </Link>
            <Hr/>
            <Item>
                <VideoLibraryOutlinedIcon />
                Library
            </Item>
            <Item>
                <HistoryOutlinedIcon />
                History
            </Item>
            <Hr/>
            <Login>
                Sign in to like videos, comment, and subscribe.
                <Link to="signin" style={{textDecoration:"none"}}>
                    <Button><AccountCircleOutlinedIcon/> SIGN IN</Button>
                </Link>
            </Login>
            
            <Hr/>
            <Title>BEST OF JUZPLAYY</Title>
            <Item>
                <MusicNoteOutlinedIcon />
                Music
            </Item>
            <Item>
                <SportsBaseballOutlinedIcon />
                Sports
            </Item>
            {/* <Item>
                <SportsEsportsOutlinedIcon />
                Gaming
            </Item>
            <Item>
                <MovieCreationOutlinedIcon />
                Movies
            </Item>
            <Item>
                <NewspaperOutlinedIcon />
                News
            </Item> */}
            {/* <Item>
                <HistoryOutlinedIcon />
                Home
            </Item> */}
            {/* <Item>
                <LiveTvOutlinedIcon />
                Live
            </Item> */}
            <Hr/>
            <Item>
                <SettingsOutlinedIcon />
                Settings
            </Item>
            {/* <Item>
                <ReportGmailerrorredOutlinedIcon />
                Report
            </Item> */}
            {/* <Item>
                <HelpOutlineOutlinedIcon />
                Help
            </Item> */}
            <Item onClick={()=>setDarkMode(!darkMode)}>
                <SettingsBrightnessOutlinedIcon />
                {darkMode? "Light" : "Dark"} Mode
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu