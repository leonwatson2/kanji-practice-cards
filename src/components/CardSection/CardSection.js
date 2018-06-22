import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import Card from '../Card';
import Button from '../styled/StyledButton';
import MetaMenu from './MetaMenu/MetaMenu';

const StyledCardSection = styled.section`
  padding: 20px 10px;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: flex-start;
  justify-items: center;
  grid-template-columns: 1fr;
  perspective: 2500px;
`

export default class CardSection extends Component {
  static propTypes = {
    prop: PropTypes.symbol
  }

  constructor(){
      super();
    this.state = {
        flipped: false,
        wasFlipped: false,
        cards: [
          { 
            id:3, character: '横', definition: 'horizontal', metaData: { 
              strokes: '15', on: 'ō', kun: 'yoko'
            },
            tested: false,
            reviewed: false
          }, { 
            id:1, character:"郷", definition:"home town", meatData: { 
              strokes:"11", on:"kyō", kun:"gō"
            },
            tested: false,
            reviewed: false
          }],
        currentCard: 0
    }
  }

  toggleFlip = () => {
    const { flipped, wasFlipped } = this.state
    let newState = { flipped:!flipped }
    if(!wasFlipped){
      newState = { ...newState, wasFlipped: true }
    } 
    this.setState(newState)
  }
  nextCard = () => {
    const { cards, currentCard } = this.state
    if(cards.length > currentCard + 1){
      this.setState({ currentCard: currentCard + 1, wasFlipped: false, flipped: false })
    }
  }

  render() {
      const { flipped, cards, currentCard, wasFlipped } = this.state
    return (
      <StyledCardSection>
        <MetaMenu />
        <Card onTouchEnd={()=>{console.log('t');this.toggleFlip}} onClick={this.toggleFlip} flipped={flipped} character={ cards[currentCard].character } definition={ cards[currentCard].definition }/>
        { wasFlipped && <Button onClick={this.nextCard}>continue</Button>}
      </StyledCardSection>
    )
  }
}
