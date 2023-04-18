import styled from "styled-components";
import { FaPlay } from 'react-icons/fa';


const Wrapper = styled.header`

width:100%;

`;

const Container=styled.div`
max-width:1440px;
width : 100%; 
margin :auto;
padding:50px  80px;
display:flex;
flex-direction: column;
gap: 20px;

/* align-items:center;
justify-content:space-between; */

`;

Container.Title=styled.h1`
font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 90px;
line-height: 133px;
color: #FFFFFF;
`;

Container.Subtitle=styled.h3`
font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 74px;
color: #FFFFFF;
`;

Container.Description=styled.p`
max-width: 514px;
font-family: 'Outfit';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 150%;
color: #FFFFFF;
opacity: 0.9;
`;

Container.Btns=styled.div`
display: flex;
align-items: center;
gap: 20px;
`;

Container.PlayIcon=styled(FaPlay)`
width: 15px;
height: 15px;


`;

export{Wrapper,Container}; 