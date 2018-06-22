import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const MainSection = styled.main`
    backface-visibility: hidden;
    background: white;
    width: 100%;
    height: 100%;
    transition: .35s;
    display: grid;
    align-items: center;
`

const StyledFront = styled.div`
    font-size: 6rem;
    position: absolute;
    backface-visibility: hidden;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const StyledBack = StyledFront.extend`
    padding: 20px;
    font-size: 3rem;
    transform: rotateY(180deg);
`
const StyledCard = styled.div`
    border-radius: 4px;
    box-shadow: ${props => props.flipped ? '-3px 4px 10px grey' : '3px 4px 10px grey' };
    height: 350px;
    width: 90%;
    text-align: center;
    margin-bottom: 20px;
    transform: ${props => props.flipped ? 'rotateY(180deg)' : 'rotateY(0)' };
    transform-style: preserve-3d;
    transition: .21s
`
export default class Card extends Component {
    static propTypes = {
        flipped: PropTypes.bool,
        character: PropTypes.string,
        definition: PropTypes.string,
    }

    static defaultProps = {
        flipped: false,
        character: '',
        definition: ''
    }
    

    render() {
        const { flipped, character, definition, onClick, onTouchEnd } = this.props
        return (
        <StyledCard onTouchEnd={onTouchEnd} onClick={onClick} flipped={flipped}>
            <StyledFront>
                <MainSection>{ character }</MainSection>
            </StyledFront>
            <StyledBack>
                <MainSection>{ definition }</MainSection>
            </StyledBack>
        </StyledCard>
        )
    }
}