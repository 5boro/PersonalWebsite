import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CompetenceItemTitle = styled.span`
    font-weight: 500;
    opacity: 0.85;
    margin-right: 50px;
`;

const CompetenceItemContent = styled.span`
    float: right;
    @media(max-width:768px){
        float: none;
        display: block;
        margin-bottom:20px;
    }
`;

const Underlined = styled.div`
    border-bottom: 1px dashed gray;
    @media(max-width:768px){
        border:none;
    }
`;

const SkillsetStyle = styled.div`
    font-size: 17px;
    opacity: 0.6;
    margin-bottom: 80px;
    line-height: 2em;

    @media(max-width:768px){
        margin-bottom: 50px;
        font-size: 14px;
    }
`;

const Skillset = props => {
    return (
        <SkillsetStyle>
            {props.details.filter(x => { if (x.title) return true; return false; }).map((val, index) => {
                return (
                    <Underlined key={index}>
                        <CompetenceItemTitle>{val.title}</CompetenceItemTitle>
                        <CompetenceItemContent>{val.content}</CompetenceItemContent>
                    </Underlined>
                )
            })}
            {props.details.filter(x => { if (!x.title) return true; return false; }).map((val, index) => {
                return (
                    <div key={index}>
                        {val.content}
                    </div>
                )
            })}
        </SkillsetStyle>
    )
};

Skillset.propTypes = {
    details: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string.isRequired
    })).isRequired
};

export default Skillset;
