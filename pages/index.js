import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

// getStaticPropsはpagesフォルダへのみexportできる
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData}) {
 return (
  <Layout home>
    {/* {既存のコードはそのままにしてください} */}
   <Head>
    <title>{siteTitle}</title>
   </Head>
   <section className={utilStyles.headingMd}>
    <p>Hello, I'm Mikiko Noro, studying HTML/CSS,JavaScript, and Next.js</p>
    <p>Please Follow My Tweet From<a href="https://twitter.com/MPrg2011">@MPrg2011</a></p>
     (This is a sample website - you’ll be building a site like this on{' '}
    <p><a href="https://nextjs.org/learn">our Next.js tutorial</a>.)</p>
   </section>
   {/* {既存のsectionタグの下にsectionタグを追加} */}
   <section className={'${utilStyles.headingMd} ${utileStyles.padding1px}'}>
     <h2 className={utilStyles.headingLg}>Blog</h2>
     <ul className={utilStyles.list}>
       {allPostsData.map(({ id, date, title }) => (
         <li className={utilStyles.listItem} key={id}>
           {title}
           <br />
           {id}
           <br />
           {date}
         </li>
       ))}
     </ul>
   </section>
  </Layout>
 )
}