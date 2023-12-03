import React, { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import Message from './Message';
import { useDispatch } from 'react-redux';
import { getMessage } from '../message/messageSlice';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMessage())
  }, [])
  return (
    <main>
      <Routes>
        <Route path="/" element={<Message />} />
      </Routes>
    </main>
  )
}
export default App