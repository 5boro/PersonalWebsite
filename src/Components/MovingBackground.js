import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
&:before {
    content:'';
    position:absolute;
    height:100%;
    width:100%;
    left:0;
    z-index:-1;
    background:linear-gradient(#ff2400,#e81d1d,#e8b71d,#e3e81d,#1de840,#1ddde8,#2b1de8,#dd00f3,#dd00f3);
    background-size:180% 180%;
    /* -webkit-animation:rainbow 360s ease infinite;
    -z-animation:rainbow 360s ease infinite;
    -o-animation:rainbow 360s ease infinite; */
    animation:rainbow 30s ease infinite;
    transition:-webkit-transform .8s cubic-bezier(.5, 0, .5, 1);
    transition:transform .8s cubic-bezier(.5, 0, .5, 1);
    transition:transform .8s cubic-bezier(.5, 0, .5, 1),-webkit-transform .8s cubic-bezier(.5, 0, .5, 1)
}
@-webkit-keyframes rainbow {
    0% {
        background-position:0 82%
    }
    50% {
        background-position:100% 19%
    }
    100% {
        background-position:0 82%
    }
}
@-moz-keyframes rainbow {
    0% {
        background-position:0 82%
    }
    50% {
        background-position:100% 19%
    }
    100% {
        background-position:0 82%
    }
}
@-o-keyframes rainbow {
    0% {
        background-position:0 82%
    }
    50% {
        background-position:100% 19%
    }
    100% {
        background-position:0 82%
    }
}
@keyframes rainbow {
    0% {
        background-position:0 82%
    }
    50% {
        background-position:100% 19%
    }
    100% {
        background-position:0 82%
    }
}

`;

const MovingBackground = () => {
    return (
        <Background>
        </Background>
    )
}

export default MovingBackground;
