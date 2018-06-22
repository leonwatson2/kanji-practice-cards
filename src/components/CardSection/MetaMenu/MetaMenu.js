import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledMenuButton = styled.div`
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 60px;
    height: 60px;
    background: white;
    z-index: 20;
    &:after, &:before {
      content: '';
      width: 80%;
      height: 6px;
      left: 10%;
      position: absolute;
      background: black;
      border-radius: 6px;
    }
    &:after {
      top: 4px;
    }
    &:before {
      top: 14px;
      box-shadow: 0px 10px 0px black;
    }
`

const StyledMetaData = styled.div`
    text-align: center;
    display: grid;
    font-size: 2rem;
    position: absolute;
    padding: 20px;
    top: 0;
    left: 100%;
    width: 100%;
    height: 400px;
    transition: .35s;
`

export default class MetaMenu extends Component {
  static propTypes = {
    metaData: PropTypes.object,
  }

  render() {
    return (
      <StyledMetaData>
        <StyledMenuButton></StyledMenuButton>
      </StyledMetaData>
    )
  }
}
