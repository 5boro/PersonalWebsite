import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link from './Link.js';

const ResumeItemStyle = styled.div`
    margin-bottom: 80px;
    h4{
        font-size: 17px;
        font-weight: 500;
        opacity: 0.85;
        margin-bottom: 10px;
    }
    h5{
        font-size: 15px;
        font-weight: 400;
        opacity: 0.6;
        margin-bottom: 20px;
    }

    @media(max-width:768px){
        margin-bottom: 50px;
        h4 {
            font-size: 15px;
            padding-top: 30px;
            position: relative;
        }
        h5 {
            font-size: 14px;
        }
    }
`;

const ResumeItemDetails = styled.ul`
    list-style-type: none;
    margin-bottom: 20px;
    padding:0;
    li{
        font-size: 17px;
        opacity: 0.6;
        margin-bottom:15px;
        line-height: 1.75em;
    }
    @media(max-width:768px){
        li{
            font-size: 14px;
        }
    }
`;

const ResumeItemDates = styled.p`
    font-size: 15px;
    opacity: 0.5;
    @media(max-width:768px){
        font-size: 13px;
    }
`;

const ResumeItem = props => {
    return (
        <ResumeItemStyle>
            <h4>{props.title}</h4>
            <h5>
                {props.links.map((val, index) => {
                    return <span key={index} >{index > 0 ? <span>&nbsp;&nbsp;-&nbsp;&nbsp;</span> : ''}<Link href={val.href} title={val.title} /></span>
                })}
            </h5>
            <ResumeItemDetails>
                {props.details.map((val, index) => {
                    return <li key={"d" + index} >{val}</li>
                })}
                {props.detailsLinks && props.detailsLinks.map((val, index) => {
                    return <li key={"dl" + index}><Link href={val.href} title={val.title} /></li>
                })}
            </ResumeItemDetails>

            <ResumeItemDates>{props.dates}</ResumeItemDates>
        </ResumeItemStyle >
    )
};

ResumeItem.propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })).isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
    detailsLinks: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    })),
    dates: PropTypes.string.isRequired
};

export default ResumeItem;
