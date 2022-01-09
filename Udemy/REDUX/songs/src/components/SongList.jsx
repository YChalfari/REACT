import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
const SongList = (props) => {
  console.log(props);

  const renderList = () => {
    return props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
            <div>
              <b>{props.favoriteTitle === song.title && "Favorite"}</b>
            </div>
          </div>
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderList()}</div>;
};

//func to connect state to props
//SongList component will have redux state as props
//this is name by convention
const mapStateToProps = (state) => {
  //here we only want the song list instead of returning entire state state
  return { songs: state.songs.songs, favoriteTitle: state.songs.favoriteTitle };
};
//here we also connect the selectSong ACTION CREATOR as a 2nd argument in an obj
//so now we also have the selectSong Action passed as a prop
//The connect function from react-redux also behind the scenes calls the action creators we
//pass to it through the store.dispatch(selectSong) of redux and passes it to all the reducers
export default connect(mapStateToProps, { selectSong })(SongList);
//this syntax is like writing
/* 
  const connect = (state) => { 
    return function SongList = (state) => {
      return <div>SongList</div>
    }
  }
  and then calling connect(mapStateToProps passes the state)(SongList now is passed the state as props) 
  and then calling the func inside with the 2nd pair of parenthesis
  
  */
