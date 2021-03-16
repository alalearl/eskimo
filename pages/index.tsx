import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import Loading from '../components/loading/loading';
import fetcher from "../libs/fetcher";

const checkDatabase =  () => {
  const { data, error } =  useSWR('/api/sql/check', fetcher)

  console.log(data, error)

  if (!data && !error) {
    return
  }

  if (error) {
    console.log(error)
    return false
  }
  if (data) {
    console.log(data)
    return true
  }
}


export default function Home() {
  let loading = true
  let connecting = false
  const databaseExist = checkDatabase()

  if (databaseExist === undefined) {
    loading = true
  } else if (databaseExist === true) {
    loading = false
    connecting = true
  } else if (databaseExist === false) {
    loading = false
    connecting = false
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>eskimo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        { loading ? 
        <Loading />
        :
       ( databaseExist ? 
        <div className="bg-gray-200 p-5 max-w-80 max-h-80 flex justify-center items-center rounded-2xl shadow-2xl">
          database exists
        </div>
        : 
        <div className="bg-gray-200 p-10 max-w-80 max-h-80 flex justify-center items-center rounded-2xl shadow-2xl">
          <span>
            Error: Database does not exist, please create your database schema or check your SQL connection
          </span>
          
        </div>
        )
        }
        
      </main>
    </div>
  )
}
