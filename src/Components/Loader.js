import React, { useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import styled from 'styled-components';

const LoaderStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    font-size: x-large;
    color: #565b5c;
    font-weight: bolder;
`;


const Item = styled.span`
    color: ${props => !props.fading ? '#565b5c' : 'transparent'};
    transition: color .2s ease-in-out;
    padding-bottom: 100px;
`;

const Loader = () => {
    const loadingItems = ['Loading Content', 'Loading Translations', 'Loading Images', 'Loading Styles', 'Loading Analytics'];
    let [loadingItem, setLoadingItem] = useState(loadingItems[0]);
    let [fading, setFading] = useState(false);

    useEffect(() => {
        let timeout = undefined;
        const interval = setInterval(
            () => {
                setFading(true);
                timeout = setTimeout(() => {
                    let item = loadingItems[loadingItems.indexOf(loadingItem) + 1];
                    item = item ? item : loadingItems[0];
                    setLoadingItem(item);
                    setFading(false);
                }, 200);
            }
            , 400
        );

        return function cleanup() { clearInterval(interval); if (timeout) clearTimeout(timeout); };
    });

    return (
        <LoaderStyle>
            <Item fading={fading}>{loadingItem}</Item>
            <ClipLoader
                size={80}
                color={"#565b5c"} />
        </LoaderStyle>
    )
}

export default Loader;
