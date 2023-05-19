import * as React from "react"
import Layout from './components/Layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Home Page</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage