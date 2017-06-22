import React, { Component } from 'react';

import './Home.less';

export default class Home extends Component {

  state = {
    isDown: false,
  }

  scrollLeft = 0;
  clientX = 0;

  mouseDown = (e) => {
    const ele = e.currentTarget;
    const scrollLeft = ele.scrollLeft;
    ele.addEventListener('mousemove', this.mouseMove);
    this.clientX = e.clientX;
    this.scrollLeft = scrollLeft;
    this.setState({
      isDown: true,
    });
  }

  mouseUp = (e) => {
    const ele = e.currentTarget;
    ele.removeEventListener('mousemove', this.mouseMove);
    this.setState({
      isDown: false
    });
  }

  mouseMove = (e) => {
    const ele = e.currentTarget;
    const newClientX = e.clientX;
    const dist = -(newClientX - this.clientX);
    const newScrollLeft = this.scrollLeft + dist;
    ele.scrollLeft = newScrollLeft;
    this.scrollLeft = newScrollLeft;
    this.clientX = newClientX;
  }

  render() {
    const { isDown } = this.state;
    return (
      <div id="pageHome" className={`${isDown ? 'active' : ''}`} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} >
        <div className="item item1">01</div>
        <div className="item item2">02</div>
        <div className="item item3">03</div>
        <div className="item item4">04</div>
        <div className="item item5">05</div>
        <div className="item item6">06</div>
        <div className="item item7">07</div>
        <div className="item item8">08</div>
        <div className="item item9">09</div>
        <div className="item item10">10</div>
        <div className="item item11">11</div>
        <div className="item item12">12</div>
        <div className="item item13">13</div>
        <div className="item item14">14</div>
        <div className="item item15">15</div>
        <div className="item item16">16</div>
        <div className="item item17">17</div>
        <div className="item item18">18</div>
        <div className="item item19">19</div>
        <div className="item item20">20</div>
        <div className="item item21">21</div>
        <div className="item item22">22</div>
        <div className="item item23">23</div>
        <div className="item item24">24</div>
        <div className="item item25">25</div>
      </div>
    );
  }
}
