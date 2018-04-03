import React, { Component } from 'react'
// import './ArtistPage.css'
import Aux from '../../hoc/Aux'
import Header from '../../components/Header/Header'
import SearchArtist from '../../components/SearchArtist/SearchArtist'
import { connect } from 'react-redux'

class ArtistPage extends Component {
    render() {
        console.log(this.props.artist);
        return (
            <Aux>
                ArtistPage
            </Aux>
        )
    }
}

export default connect(state => state)(ArtistPage)