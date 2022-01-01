const config = {
  siteTitle: 'さいたまに在る教会', // Site title.
  siteTitleShort: 'さいたまに在る教会', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'さいたまに在る教会', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'http://www.church-in-saitama.com/', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'わたしたちは主イエスを愛し、聖書の標準にしたがう神の教会です。', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-161211056-1', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'さいたまにある教会', // Username to display in the author segment.
  userEmail: 'youth100@gmail.com', // Email used for RSS feed's author segment
  userTwitter: 'gatsbyjs', // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: 'gatsbyjs', // Optionally renders "Follow Me" in the Bio segment.
  userLocation: 'さいたま市, 埼玉県', // User location to display in the author segment.
  userAvatar: 'https://www.lsm.org/assets/img/LSM-Logo.png', // User avatar to display in the author segment.
  userDescription:
    "ご意見、ご質問、メッセージ等々お気軽にお問い合わせください。", // User description to display in the author segment.
  copyright: '〒338-0002 埼玉県さいたま市中央区下落合2-1-4', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: 'blue' // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config
