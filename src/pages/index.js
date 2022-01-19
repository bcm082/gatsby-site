import * as React from 'react'
import Layout from '../components/layout'
import { staticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="BCM">
      <p>Simple Blog using Gatsby</p>
      <img src={"./src/images/IMG_0475.PNG"} alt="Space" />
    </Layout>
  )
}

export default IndexPage