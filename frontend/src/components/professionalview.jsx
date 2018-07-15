import React from 'react'

class ProfessionalView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.displayPage !== 'professional') {
      return <div></div>
    } else {
      return (
        <div className='patientViewContainer'>
          <div>
            professional view will be seen
          </div>
        </div>)
    } 
  }
}

export default ProfessionalView