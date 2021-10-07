import { graphql } from 'gatsby'
import  Img  from 'gatsby-image'
import React from 'react'
import Layout from '../components/Layout'
import * as  styles from '../styles/project-details.module.css'

export default function ProjectDetails( { data } ) {
    const { html } = data.markdownRemark
    const {title, front_end, back_end , featuredImg } = data.markdownRemark.frontmatter
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{front_end}</h3>
                <div className = {styles.featured}>
                <Img  fluid={featuredImg.childImageSharp.fluid}/>
                </div>
                <div className= {styles.html} dangerouslySetInnerHTML = {{__html: html}}/>
            </div>
        </Layout>
    )
}

export const dynamic_query = graphql`
query ProjectsPage($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        front_end
        back_end
        featuredImg {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `