import Head from 'next/head'
import { useRouter } from 'next/router';

export default function cautionPage() {

  const router=useRouter();

  const finishHandle=()=>{
    router.push({
      pathname:'/',
      query:{
        data:'yes',
      },
    });
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Deleted!</h3>
      <button onClick={finishHandle}>Return</button>
    </>
  )
}