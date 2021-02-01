import styled from "styled-components";
import {borderGray, grayedOutTextColor, primaryTextColor, secondaryTextColor} from "./colors";

export const ReactionCount = styled.span`
    color: ${props => props.count > 0 ? secondaryTextColor : grayedOutTextColor}
`

export const Avatar = styled.img`
    object-fit: cover;
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
    border: 1px solid black;
    margin-right: 1rem;
`

export const AvatarSmall = styled.img`
    object-fit: cover;
    height: 3rem;
    width: 3rem;
    border-radius: 3rem;
    border: 1px solid black;
    margin-right: 1rem;
`

export const AvatarFlex = styled.div`
    flex-grow: 1;
`

export const NewsfeedCard = styled.div`
    background-color: #ffffff;
    border-radius: 1rem;
    filter: drop-shadow(0 2px 2px #333333);
    margin: 1rem 0;
`

export const NewsfeedCardContentTop = styled.div`
    border-bottom: 1px solid ${borderGray};
    padding: 1rem 2rem;
`

export const NewsfeedCardContentHeading = styled.div`
    display: flex;
`;

export const PostActionButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    color: ${secondaryTextColor};
    font-size: 1rem;
    
    :hover {
        color: ${primaryTextColor}
    }
`;
PostActionButton.displayName = "PostActionButton";