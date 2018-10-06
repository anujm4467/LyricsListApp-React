import React, { Component } from 'react';
import {Consumer} from '../../context';
import Spiner from '../loyouts/Spiner';
import Track from '../track/Track';

class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value =>{
            const {track_list, heading} = value;
            if(track_list === undefined || track_list.length === 0){
               return <Spiner />
            }else{
              return(
               <React.Fragment>
                 <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                    {track_list.map(i =>(
                      <Track key={i.track.track_id}  track={i.track} />
                    ))}
                </div>
               </React.Fragment>
              )
            }
        }}
      </Consumer>
    )
  }
}

export default Tracks;