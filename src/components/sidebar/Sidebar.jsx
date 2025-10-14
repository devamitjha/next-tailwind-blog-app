import React from 'react'
import AboutWidgets from '../widgets/AboutWidgets'
import SocialWidgets from '../widgets/SocialWidgets'
import FeatureWidgets from '../widgets/FeatureWidgets'

const Sidebar = () => {
  return (
    <div className="space-y-8">
      <AboutWidgets/>
      <SocialWidgets/>
      <FeatureWidgets/>
    </div>
  )
}

export default Sidebar