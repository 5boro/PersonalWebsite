import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TagStyled = styled.div`
        font-size: 12px;
        font-weight: 400px;
        padding: 5px 15px;
        border-radius: 3px;
        vertical-align: text-top;
        display: inline-block;
        white-space: nowrap;
        color: #fff;
        background: ${props => props.background || "#68b0f1"};
    `;

const Tag = props => {
    return (
        <TagStyled background={props.background}>
            {props.title}
        </TagStyled>
    )
}

Tag.propTypes = {
    background: PropTypes.string,
    title: PropTypes.string.isRequired
};

export default Tag;