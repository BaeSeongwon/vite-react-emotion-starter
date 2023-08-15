import { useState } from 'react'
import { keyframes } from '@emotion/react'

import styled from '@emotion/styled'
import reactLogo from './assets/react.svg'
import emotionLogo from './assets/emotion.png'
import viteLogo from '/vite.svg'

const LogoSpinKeyFrame = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const ViteLogoImg = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  animation: ${LogoSpinKeyFrame} infinite 20s linear;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

const ReactLogoImg = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  animation: ${LogoSpinKeyFrame} infinite 20s linear;

  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`

const EmotionLogoImg = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  animation: ${LogoSpinKeyFrame} infinite 20s linear;

  &:hover {
    filter: drop-shadow(0 0 2em #ff61e5aa);
  }
`

const Card = styled.div`
  padding: 2em;
`

const DocsParagraph = styled.p`
  color: #888;
`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <ViteLogoImg src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ReactLogoImg src={reactLogo} alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <EmotionLogoImg src={emotionLogo} alt="Emotion logo" />
        </a>
      </div>
      <h1>Vite + React + Emotion</h1>
      <Card>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <DocsParagraph>
        Click on the Vite and React logos to learn more
      </DocsParagraph>
    </>
  )
}

export default App
