import React from 'react'
import Layout from './components/Layout'

const GalleryPage = () => {
  return (
    <Layout pageTitle="Gallery">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

export const Head = () => <title>Gallery</title>

export default GalleryPage