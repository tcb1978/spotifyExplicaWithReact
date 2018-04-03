import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ArtistPage from '../containers/ArtistPage/ArtistPage'
import SearchArtist from '../components/SearchArtist/SearchArtist'
import NotFound from '../components/NotFound/NotFound'

export default (
    <Switch>
        <Route exact path="/" component={ SearchArtist } />
        <Route path="/artist-page" component={ ArtistPage } />
        <Route path="*" component={ NotFound } />
    </Switch>
)