import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.clickHandler(event.target.id);
    event.preventDefault();
  }

  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artists.join(', ')} | {this.props.track.album}</p>
        </div>
        <a class="Track-action" id={this.props.index} onClick={this.handleClick}>{(this.props.mode==='add')?'+':'-'}</a>
      </div>
    );
  }
}
export default Track;
