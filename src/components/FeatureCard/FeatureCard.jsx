import React from 'react'
import { FeatureCardContainer, FeatureText, FeatureButton } from './styleComponents'
import { IoMdReturnRight } from "react-icons/io";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
export default function FeatureCard(props) {
    const { text, iconColor } = props;
    return (
        <FeatureCardContainer>
            <FeatureText>{text}</FeatureText>
            <IoExtensionPuzzleSharp color={iconColor} size={50} />
            <FeatureButton>Learn More <IoMdReturnRight/></FeatureButton>
        </FeatureCardContainer>
    )
}
