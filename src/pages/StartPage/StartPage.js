import React from 'react'
import Welcome from '../../components/Start/Welcome'
import ExploreArticles from '../../components/Start/ExploreArticles'
import ConnectPeople from '../../components/Start/ConnectPeople'

const StartPage = () => {
  return (
    <div>
        <Welcome />
        <ExploreArticles />
        <ConnectPeople />
    </div>
  )
}

export default StartPage