import React from 'react'
import Feature from '../../containers/features/Feature'
import './feature.css'

const FeaturesData = [
  {
    title: "improving end distrusts Instantly",
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: "Become the tended active",
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: "Message or am nothing",
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: "Really boy law county",
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  }
]

const feature = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The future is Now and you just need to realize it. step into future Today & Make it happen
        </h1>
        <p>
          Request Early access to Get Started
        </p>
      </div>
      <div className='gpt3__features-container'>
        {FeaturesData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))
        }
      </div>
    </div>
  )
}

export default feature