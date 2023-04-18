import styled from "styled-components";
import { Wrapper } from "../../Navbar/style";

const getType=(props)=>{
    switch(props.type){
        case 'primary':{
            return{
                background: '#FA4776',
                'border-radius': '41px',
                padding: '15px 24px',
            }
        }

        case 'secondary':{
            return{
                border:'1px solid white',
                background:'tansparent',
                'border-radius': '41px',
                padding: '15px 24px',
            }
        }

        default:
            return{}
    }
}

const Container=styled.button`
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 23px;
letter-spacing: 0.04em;
color: #FFFFFF;
background: none;
display: flex;
align-items: center;
gap: 10px;
justify-content: center;

/* padding: 15px 24px; */
border: none;
margin-right: ${props=>props.mr && props.mr};

${getType}
`;

export{Container}