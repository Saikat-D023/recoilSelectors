import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom, evenSelector } from './store/atoms/counter'

function App() {

  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven  />
      </RecoilRoot>
    </div>
  );
}

function Buttons(){

  const setCount = useSetRecoilState(counterAtom)

  function increase(){
    setCount( c => c + 2)
  }

  function decrease(){
    setCount( c => c - 1)
  }

   return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
   </div>
}

function Counter(){
  //subscribing to the actual value
  const count = useRecoilValue(counterAtom)

  return <div>
    {count}
  </div>
}

function IsEven(){
  //subscribing to the derived state , the selector
  const even = useRecoilValue(evenSelector)

  return <div>
    {even ? "Even" : "Odd"}
  </div>
}

export default App
