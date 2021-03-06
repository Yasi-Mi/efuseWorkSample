import styled from "styled-components";
import {borderGray, grayedOutTextColor, secondaryTextColor} from "./colors";

export const ReactionCount = styled.span`
    color: ${props => props.count > 0 ? secondaryTextColor : grayedOutTextColor}
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