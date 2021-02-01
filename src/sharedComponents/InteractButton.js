import styled from "styled-components";
import {primaryTextColor, secondaryTextColor} from "./colors";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

export function InteractButton({onClick, icon, text}) {
    return <InteractButtonStyle onClick={onClick}><FontAwesomeIcon icon={icon}/> {text} </InteractButtonStyle>
}

const InteractButtonStyle = styled.button`
    background: transparent;
    border: none;
    outline: none;
    font-size: inherit;
    color: ${secondaryTextColor};
    
    :hover {
        color: ${primaryTextColor}
    }
`;