import React, { useState } from 'react'

import { Link, Route, Routes } from 'react-router-dom';

import { IndividualStudentResult } from './components/IndividualStudentResult';
import { Materials } from './components/Materials';
import { NotFound } from './components/NotFound';

import {Graph} from './components/Graph';
import {Table} from './components/Table';

import { Classes } from './components/Classes';

function App() {

  return (
    <>
      <ul>
        <li><Link to='/student_result/63ad59c91ae564e73659044a'>StudentResult</Link></li>
        <li><Link to='/materials'>Materials</Link></li>
        <li><Link to='/graph'>Graph</Link></li>
        <li><Link to='/table'>Table</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
      </ul>
      <Routes>
        <Route path="/student_result/:sid" element={<IndividualStudentResult />}/>
        <Route path="/materials" element={<Materials />}/>
        <Route path="/graph" element={<Graph />} />
        <Route path="/table" element={<Table />} />
        <Route path="/classes" element={<Classes />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App