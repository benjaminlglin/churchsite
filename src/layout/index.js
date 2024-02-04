import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import config from '../../data/SiteConfig'
import styles from './index.module.scss'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <Helmet>
      <meta name="description" content={config.siteDescription} />
      <meta name="Access-Control-Allow-Origin" content="*" />
      <meta name="cross-origin-resource-policy" content="cross-origin" />
      
    </Helmet>
    {children}
    <Footer />
  </>
)

export default MainLayout
