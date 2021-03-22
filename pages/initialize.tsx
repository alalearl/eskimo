import Head from 'next/head';
import styles from '../styles/Initialize.module.css';
import { useRouter } from 'next/router'

export default function Initialize() {
  const router = useRouter()
  

  return (
    <div className={styles.container} >
      <Head>
        <title>{process.env.APP_NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="px-10 py-5 block text-center max-w-96 max-h-96 flex flex-col justify-center items-center rounded-2xl shadow-2xl bg-gray-100">
          <div className="py-5">
            <span className="text-3xl ">
              Create First User
            </span>
          </div>
          <form method='post' action='/api/auth/callback/credentials'>
            <div className="py-3">
                <input placeholder="Username" className="px-4 py-3 rounded text-pink-500" name='username' type='text'/>
            </div>
            <div className="py-3">
              <input placeholder="Password" className="px-4 py-3 rounded text-pink-500" name='password' type='text'/>
            </div>
             <div className="py-3">
               <input placeholder="Confirm Password" className="px-4 py-3 rounded text-pink-500" name='password' type='text'/>
            </div>
            <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" type='submit'>Get Start</button>
          </form>
        </div>
      </main>
    </div>
  );
}
