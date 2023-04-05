/* eslint-disable */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from 'components/Header'
import { Select } from 'components/Select'
import { MyNotes } from 'components/MyNotes';

export const App = () => {
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Select />} />
    <Route path='/notes' element={<MyNotes />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
