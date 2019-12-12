/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div class="wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          <div id="st">
            <div>
              Wszytkie prawa zastrzeżonie. Copyright © 2015 r. “Poligrafiablysk
              - Rafał Cienciała” Kopiowanie bez zgody właściciela serwisu surowo
              zabronione. Strona korzysta z plików Cookie, przebywając tutaj
              akceptujesz to. Projekt i wykonanie :{" "}
              <a
                href="http://bluestudio.pl/"
                target="_blank"
                title="strony internetowe"
              >
                Bluestudio.pl - strony internetowe
              </a>
              <br />
              Polecamy :{" "}
              <a
                href="http://ckks.pl/"
                target="_blank"
                title="kursy instruktorskie"
              >
                CKKS - kursy instruktorskie
              </a>
              <br />
              <span class="oc" itemscope="" itemtype="http://schema.org/Review">
                <span
                  itemprop="itemReviewed"
                  itemscope=""
                  itemtype="http://schema.org/Thing"
                >
                  <span itemprop="name"></span>-{" "}
                </span>
                <span
                  itemprop="author"
                  itemscope=""
                  itemtype="http://schema.org/Person"
                >
                  <span itemprop="name">Klienci</span>-{" "}
                </span>
                <span
                  itemprop="reviewRating"
                  itemscope=""
                  itemtype="http://schema.org/Rating"
                >
                  Ocena:<span itemprop="ratingValue">10</span>/{" "}
                  <span itemprop="bestRating">10</span>
                </span>
              </span>
              <script
                async=""
                src="//www.google-analytics.com/analytics.js"
              ></script>
              <script async="" src="index_pliki/analytics.js"></script>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
