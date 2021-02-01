import styled from "styled-components";
import React from "react";

function Avatar({image, size}) {
    return <><AvatarStyle size={size} src={`avatars/${image}`} alt="user avatar"/></>
}

const AvatarStyle = styled.img`
    object-fit: cover;
    height: ${props => props.size};
    width: ${props => props.size};
    border-radius: ${props => props.size};
    margin-right: 1rem;
`

export const AvatarLarge = props => Avatar({...props, ...{size: "4rem"}})
export const AvatarSmall = props => Avatar({...props, ...{size: "3rem"}})