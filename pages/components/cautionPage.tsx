import Head from 'next/head'
import { useRouter } from 'next/router';

// const routerData=useRouter();

export default function cautionPage() {

  const router=useRouter();
  console.log(router. query.data);

  const returnFnc=(judge)=>{
    // if (judge==='yes'){
    //   router.push({
    //     pathname:'/components/Delete',
    //     query:{
    //       data:'yes',
    //     },
    //   });
    // } else {
    //   router.push({
    //     pathname:'/',
    //     query:{
    //       data:'no',
    //     },
    //   });
    // }
    console.log('test-mode');
    
  }
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>This is cautionPage</h2>
      <h3>※Firestore data are going to be deleted!</h3>
      <h3>Are you sure?</h3>
      <button onClick={()=>returnFnc('yes')} style={{width:'80px'}}>Yes</button>
      <span style={{width:'10px',display:'inline-block'}}></span>
      <button onClick={()=>returnFnc('no')} style={{width:'80px'}}>No</button>
      <br />
    </>
  )
}
