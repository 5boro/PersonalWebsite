import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LinkStyled = styled.a`
        opacity: 0.6;
    &, &:active, &:visited, &:focus{
        text-decoration: none;
        padding-bottom: 2px;
        border-bottom: dashed 1px rgba(0,0,0,0.5);
        transition: border-bottom-color 500ms ease-in-out;
        color: inherit;
    }
`;

const Link = props => {
    return (
        <LinkStyled href={props.href} rel="noopener noreferrer nofollow" target="_blank">
            {props.title}
        </LinkStyled >
    )
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Link;