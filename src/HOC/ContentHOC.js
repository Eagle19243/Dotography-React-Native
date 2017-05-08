import React from 'react'
import ContentLoader from './ContentLoader'

const ContentHOC = propName => (WrappedComponent) => {
  return class LoaderHOC extends React.Component {
    render() {
      return (
        this.props
          ? <ContentLoader />
          : <WrappedComponent {...this.props} />
      )
    }
  }
}

export default ContentHOC
