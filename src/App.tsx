import { FC, useState } from 'react'
import reactlogo from './assets/images/react.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  const [fullname, setFullname] = useState('Nguyen Ngoc Tuong Vi')
  console.log(fullname)
  return (
    <div>
      <img src={reactlogo} alt='React Logo' width={100} height={100} />
      <h1>{fullname}</h1>
    </div>
  )
}

export default App
