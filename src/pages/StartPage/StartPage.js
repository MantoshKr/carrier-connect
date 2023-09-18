import React from 'react'
import Welcome from '../../components/Start/Welcome'
import ExploreArticles from '../../components/Start/ExploreArticles'
import ConnectPeople from '../../components/Start/ConnectPeople'
import BottomSection from '../../components/Start/BottomSection'

const StartPage = () => {
  return (
    <div>
        <Welcome />
        <ExploreArticles />
        <ConnectPeople />
        <BottomSection />
    </div>
  )
}

export default StartPage