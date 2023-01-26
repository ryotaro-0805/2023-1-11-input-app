import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { db } from '../public/firebase';
import { collection, getDocs, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';

export default function Home() {
  const [text, setText] = useState(['No text']);
  const textRef: any = useRef('');
  const delSwitch = 'no';
  const router = useRouter();
  const handleText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const getText: string = textRef.current.value;
    if (text[0] === 'No text') setText(['']);
    setText((inData) => [...inData, textRef.current.value]);
    handleRegister(getText);
    getData();
  }

  useEffect(() => {
    textRef.current.value = ('');
  }, [text]);

  const clearFnc = () => {
    setText(['No text']);
  }

  const [firestoreText, setFirestoreText] = useState(Array<string>);

  // Firestoreからデータを取得
  const getData = async () => {
    const text = collection(db, 'users');
    const querySnapshot = await getDocs(text);
    setFirestoreText(['']);
    querySnapshot.docs.map((doc) => {
      setFirestoreText((inData: Array<string>) => [...inData, doc.data().text]);
    });
  }

  const [delText, setDelText]:any = useState([]);

  // Firestoreのデータを削除
  const deleteFnc = async () => {
    const querySnapshot = await (getDocs(collection(db, 'users')));
    querySnapshot.docs.map((doc) => {
      setDelText((inData:never) => [...inData, doc.id]);
    });
  }

  useEffect(() => {
    delText.map((inData:string) => deleteDoc(doc(db, 'users', inData)));
    getData();
  }, [delText]);

  // Firestoreへデータを保存
  // idを指定する場合（'test'がID、dbはアプリ情報、usersがデータベース名(’コレクションを開始’欄のもの)）
  // const handleRegister=async()=>{
  //  await setDoc(doc(db,'users','test'),{
  //     text:'nigth',
  //   });
  // }
  // handleRegister();

  // idを自動生成してデータを追加
  // 公式サイト古い？公式サイトのやり方では出来ないので以下参照
  const handleRegister = (getText: string) => {
    addDoc(collection(db, 'users'), {
      text: getText
    });
  }

  useEffect(() => {
    getData();
    // router.query.data === 'yes' && deleteFnc();
  }, []);

  // ページ遷移
  const handleRouter = () => {
    // getData(); //まずはFirestoreのデータを取得しておく
    // router.push({
      // pathname: '/components/CautionPage',
      // pathname: '/components/Test',
      // query: {
        // data: delSwitch,
      // },
    // }, 'caution-page');
    // }, 'test');
    console.log('testmode');
    
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2>Input App</h2>
        <form action="" onSubmit={handleText}>
          <label htmlFor="text">
            <p>Enter text</p>
            <input type="text" id='text' ref={textRef} />
            <br />
          </label>
        </form>
        <button onClick={clearFnc}>Input Data Clear</button>
        <br />
        <button onClick={handleRouter}>Firestore Data Delete</button>
        <hr style={{ margin: '10px 0' }} />
        <h3>Texts entered</h3>
        {text.map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </div>
      <hr />
      <h3>Firestore Data</h3>
      {firestoreText.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </>
  )
}
