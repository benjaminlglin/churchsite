import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'

const ContactPage = () => (
  <Layout>
    <main>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <h1>Contact us</h1>
         
      <div class="col-8"><h4 class="mt-4">★３つの「友だち追加」方法</h4>
      <div class="article_ftr"><div class="article_hdr">
        <table class="table"><tbody><tr><th scope="col">１．スマートフォンからは「友だち追加ボタン」を押して簡単登録！</th></tr>
        <tr><td><a href="http://nav.cx/1dK5RXs" rel="noopener noreferrer" target="_blank">
          <img class="" border="0" alt="友だち追加" src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"/></a>
          </td></tr></tbody></table><table class="table"><tbody><tr><td>２．LINEの友だち追加から「ID検索」をして登録！ID:@684fppkn</td></tr>
          </tbody></table><table class="table"><tbody><tr><th scope="col">３．LINEの友だち追加から「QR コード」読み取って登録！</th></tr>
          <tr><td><a href="ttps://qr-official.line.me/sid/M/684fppkn.png"><img class="" src="https://qr-official.line.me/sid/M/684fppkn.png"/></a>
          </td></tr></tbody></table></div></div></div>
          
    </main>
  </Layout>
)
export default ContactPage
