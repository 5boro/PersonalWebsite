import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';

import Tag from './Tag.js';
import Link from './Link.js';

import imgProfilePicture from '../images/imgProfilePicture.png';
import imgProfilePicture2 from '../images/imgProfilePicture2.png';

const HeaderCont = styled.header`
    margin: 0 0 120px;
    position: relative;
    padding-left: 120px;
    h1{
        font-size: 20px;
        font-weight: 700;
        opacity: 0.9;
        font-style:bold;
    }
    h2{
        font-weight: 400;
        font-size: 17px;
        opacity: 0.5;
    }

    @media(max-width:768px){
        padding-left: 0;
        text-align: center;
        margin-bottom: 50px;
    }
`;

const flip = keyframes`
    0%{
        transform: translateZ(0) rotateY(0);
        animation-timing-function:ease-out;
    }
    25%{
        transform: translateZ(0) rotateY(0);
        animation-timing-function:ease-out;
    }
    30%{
        transform: translateZ(150px) rotateY(180deg);
        animation-timing-function:ease-out;
    }
    70%{
        transform: translateZ(150px) rotateY(180deg);
        animation-timing-function:ease-out;
    }
    75%{
        transform: translateZ(0) rotateY(0);
        animation-timing-function:ease-out;
    }
    100%{
        transform: translateZ(0) rotateY(0);
        animation-timing-function:ease-out;
    }
`;

const reverseFlip = keyframes`
    0%{
        transform: translateZ(150px) rotateY(180deg);
        animation-timing-function:ease-out;
    }
    25%{
        transform: translateZ(150px) rotateY(180deg);
        animation-timing-function:ease-out;
    }
    30%{
        transform: translateZ(0) rotateY(0);
        animation-timing-function:ease-out;
    }
    70%{
        transform: translateZ(0) rotateY(0);
        animation-timing-function:ease-out;
    }
    75%{
        transform: translateZ(150px) rotateY(180deg);
        animation-timing-function:ease-out;
    }
    100%{
        transform: translateZ(150px) rotateY(180deg);
        animation-timing-function:ease-out;
    }
`;

const ProfilePicContainer = styled.div`
    position: absolute;
    width: 100px;
    height: 120px;
    top: -20px;
    left: 0px;

    ::before{
        content: '';
        position: absolute;
        top: 20px;
        left: 0;
        width: 100px;
        height: 100px;
        border-radius: 999px;
        background: #ffca57;
    }
    .ppFlipper{
        position: relative;
        width: 100%;
        height: 100%;

        img{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;

            backface-visibility: hidden;
            animation-iteration-count: infinite;
            transition-timing-function: linear;
            animation-duration: 10s;
        }
        .mainPP{
            animation-name: ${flip};
        }
        .flippedPP{
            animation-name: ${reverseFlip};
        }
    }

    @media(max-width:768px){
        position:relative;
        display:inline-block;
        top:auto;
        left:auto;
    }
`;


const Nav = styled.nav`
    position: absolute;
    right: 0;
    top: 20px;
    margin-bottom: 150px;
    a{
        margin-right: 25px;
    }
    button{
        margin-top:2px;
    }

    @media(max-width:768px){
        margin-right: -27px;
        position: static;
        font-size: 13px;
        margin-bottom: 50px;
        a{
            margin-right: 10px;
        }
    }
`;

const LngButton = styled.button`
    font-size: 2em;
    background: none;
    border: none;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
        transition: .2s ease-in-out;
    }
`;

const Header = props => {
    let [currentPicture, setCurrentPicture] = useState(imgProfilePicture);
    const { t } = useTranslation();

    useEffect(() => {
        const interval = setInterval(() => { setCurrentPicture(currentPicture === imgProfilePicture ? imgProfilePicture2 : imgProfilePicture) }, 1000);

        return function cleanup() { clearInterval(interval) };
    });

    return (
        <HeaderCont className="App-header">
            <ProfilePicContainer>
                <div className="ppFlipper">
                    <img alt="Profile" className="flip-animation mainPP" src={imgProfilePicture} />
                    <img alt="Profile" className="flip-animation flippedPP" src={imgProfilePicture2} />
                </div>
            </ProfilePicContainer>
            <h1>Bastien Pontet</h1>
            <Tag title={t('nav.currentlyLooking')} background="#5fc383" />
            <Nav>
                <Link href={t('nav.links.1.href')} title={t('nav.links.1.title')} />
                <Link href={t('nav.links.2.href')} title={t('nav.links.2.title')} />
                <Link href={t('nav.links.3.href')} title={t('nav.links.3.title')} />
                <Link href={t('nav.links.4.href')} title={t('nav.links.4.title')} />

                <LngButton onClick={(e) => { props.handleLanguageChange(e) }}>
                    {props.language === 'fr' ? '🇬🇧' : '🇫🇷'}
                </LngButton>
            </Nav>
        </HeaderCont>
    )
}

export default Header