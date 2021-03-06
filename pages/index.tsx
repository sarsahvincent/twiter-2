import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Widgets from './components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="m-auto mx-auto max-h-screen overflow-hidden lg:max-w-6xl">
      <Head>
        <title>twitter 2.0</title>
        <link rel="icon" href="https://links.papareact.com/drq" />
      </Head>

      <main className="grid grid-cols-9">
        {/* Side bar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  )
}

export default Home

export const getServersideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}
