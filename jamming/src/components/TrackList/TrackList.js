import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {


  render() {
    return (
      <div class="TrackList">
      {
        this.props.tracks.map((track,index) => <Track track={track} index={index} mode={this.props.mode} clickHandler={this.props.clickHandler}/>)
      }
      </div>
    );
  }
}
export default TrackList;
