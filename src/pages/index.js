import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { getContractors } from "../../utils/users"
import Img from "gatsby-image"


const Home = ( { data }) => {

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop</h3>
          <p> UX designer & we b developer based in Sheffield UK</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid = {data.file.childImageSharp.fluid}/>
      </section>
    </Layout>
  )
}

export default Home

export const query = graphql`query Banner {
  file(relativePath: {eq: "banner.png"}) {
    id
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`