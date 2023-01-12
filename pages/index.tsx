import Head from 'next/head'
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react'
import img1 from '../public/img/pic1.jpg'
import img2 from '../public/img/pic2.jpg'

export default function Home() {
  const [text, setText] = useState(['First Text']);
  const textRef: any = useRef('');
  const handleText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text[0] === 'First Text') setText(['']);
    setText((inData) => [...inData, textRef.current.value]);
  }

  useEffect(() => {
    textRef.current.value = ('');
  }, [text]);

  const clearFnc = () => {
    setText(['First Text']);
  }

  const [handlePic1,setHandlePic1]=useState(1);
  const [handlePic2,setHandlePic2]=useState(0);

  const handleClick:any=()=>{
    if (handlePic1===0) {
      setHandlePic1(1);
      setHandlePic2(0);
    } else {
      setHandlePic1(0);
      setHandlePic2(1);
    }
  }

  const opa1:object={opacity:handlePic1};
  const opa2:object={opacity:handlePic2};

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
        <button onClick={clearFnc}>Clear</button>
        <hr style={{margin:'10px 0'}} />
        <h3>Texts entered</h3>
        {text.map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </div>
      <div className='div' onClick={handleClick}>
      <Image className='image' src={img1} style={opa1} alt='pic' width={200} />
      <Image className='image' src={img2} style={opa2} alt='pic' width={200} />
      </div>
      {/* <Image src={img2} alt='pic2' width={200} /> */}
      {/* <img src='img/pic2.jpg' alt='pic2' width={200} /> */}
    </>
  )
}
