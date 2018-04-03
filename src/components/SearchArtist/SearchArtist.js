import React, { Component } from 'react'
import axios from 'axios'
import Aux from '../../hoc/Aux'
import { artist } from '../../redux/ducks/reducer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SearchArtist extends Component {
    constructor() {
        super();
        this.state = {
            artist: ''
        }
    }
    handleArtistChange = (e) => {
        this.setState({
            artist: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.artist, 'this')
        this.props.history.push('/artist-page')
    }
    render() {
        return (
            <Aux>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="artist">Search Artist: </label>
                    <input
                        type="text"
                        value={this.state.artist}
                        onChange={this.handleArtistChange}
                        name="Artist" />
                    <input type="submit" value="Submit" />
                </form>
            </Aux>   
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        artist: state.artist
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        artist: artist
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArtist)