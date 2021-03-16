import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useSWR from 'swr';
import Loading from '../components/loading/loading';
import fetcher from '../libs/fetcher';
import SystemAlert from '../components/system-alert/system-alert';

const checkDatabase = () => {
  const { data, error } = useSWR('/api/sql/check', fetcher);
  if (!data && !error) {
    return;
  }
  if (error) {
    return false;
  }
  if (data) {
    return true;
  }
};

export default function Home() {
  let loading = true;
  let connecting = false;
  const databaseExist = checkDatabase();

  if (databaseExist === undefined) {
    loading = true;
  } else if (databaseExist === true) {
    loading = false;
    connecting = true;
  } else if (databaseExist === false) {
    loading = false;
    connecting = false;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {loading ? (
          <Loading />
        ) : databaseExist ? (
          <SystemAlert type="default" title="database exists"></SystemAlert>
        ) : (
          <SystemAlert
            type="error"
            title="Error: Database does not exist or check your SQL connection."
          >
            <div className="pb-5">
              <span className="text-lg"> Please check following case</span>
            </div>
            <ul className="list-disc list-inside bg-rose-200">
              <li>
                <span>check</span>{' '}
                <span className="italic bg-gray-200 px-1">.env</span>{' '}
                <span>file if does not have, create one from</span>{' '}
                <span className="italic bg-gray-200 px-1">.env.example</span>
              </li>
              <li>
                <span>database name that provided in</span>{' '}
                <span className="italic bg-gray-200 px-1">.env</span>{' '}
                <span>
                  does not exist, Please create database that match to database
                  name in
                </span>{' '}
                <span className="italic bg-gray-200 px-1">.env</span> <br />
              </li>
              <li>check your database connection that not incorrect</li>
            </ul>
            <div className="pt-5">
              <span>If you change your</span>{' '}
              <span className="italic bg-gray-200 px-1">.env</span>{' '}
              <span>Please restart server and try again</span>
            </div>
          </SystemAlert>
        )}
      </main>
    </div>
  );
}
