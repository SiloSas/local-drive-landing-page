import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Content from "../components/content"
import CallToAction from "../components/cta"
import Helmet from "react-helmet"


const IndexPage = () => (
  <Layout>
      <Helmet>
          <script type="text/javascript">
              {`var _smartsupp = _smartsupp || {};
              var smartsupp;
              _smartsupp.key = '8a2952612c75bf49d157ecf53b599608620a67ad';
              window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
          })(document);`}
          </script>
      </Helmet>
    <SEO />
    <Hero />
    <Content />
    <CallToAction />
  </Layout>
)

export default IndexPage
