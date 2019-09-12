import React, { Component } from 'react'

import { CSSTransitionGroup } from 'react-transition-group'

export default class Carousel extends Component {
  state = {
    items: this.props.items,
    active: this.props.active,
    direction: '',
  }

  generateItems = () => {
    let items = []
    let level
    console.log(this.state.active)
    for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
      let index = i
      if (i < 0) {
        index = this.state.items.length + i
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length
      }
      level = this.state.active - i
      items.push(
        <Item key={index} id={this.state.items[index]} level={level} />
      )
    }
    return items
  }

  moveLeft = () => {
    let newActive = this.state.active
    newActive--
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: 'left',
    })
  }

  moveRight = () => {
    let newActive = this.state.active
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: 'right',
    })
  }

  render() {
    return (
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={this.leftClick}>
          <i className="fi-arrow-left"></i>
        </div>
        <CSSTransitionGroup transitionName={this.state.direction}>
          {this.generateItems()}
        </CSSTransitionGroup>
        <div className="arrow arrow-right" onClick={this.rightClick}>
          <i className="fi-arrow-right"></i>
        </div>
      </div>
    )
  }
}

const Item = ({ level, id }) => {
  const className = 'item level' + level
  return <div className={className}>{id}</div>
}

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
