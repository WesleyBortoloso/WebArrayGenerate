import React, { useState, useEffect}  from 'react' 
import styles from '../styles/Home.module.css'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Home() {

  const [arraySize, setArraySize] = useState()

  useEffect(() => {
    getArray()
  },[arraySize]);

  function getArraySize() {
    const ArraySize = document.getElementById('arraysize').value
    setArraySize(ArraySize)
  }

  const getArray = async() => {
   let req= await axios({
      method: 'POST',
      url: 'http://127.0.0.1:5000/transformArray',
      data: {
        n : Number(arraySize)
      }
    }).then(
      response => {
        console.log(response.data);
      }
    ).catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className={styles.container}>
      {/* <form action="" onSubmit={getArraySize}> */}
        <title>Random Array Generator</title>
        <h1>Insira um tamanho para seu array</h1>
        <input name="arraysize" id="arraysize" type="number" placeholder="Ex: 1 " className={styles.input}/>
        <button onClick={getArraySize} className={styles.button} >Gerar Array</button>
      {/* </form> */}
    </div>
  )
}
