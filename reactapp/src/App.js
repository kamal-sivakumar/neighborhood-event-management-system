import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddEvent from './components/AddEvent.js';
import UpdateEvent from './components/UpdateEvent';
import ViewEvents from './components/ViewEvents.js';

function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/add" element={<AddEvent />} />
<Route path="/view" element={<ViewEvents />} />
<Route path="/update/:id" element={<UpdateEvent />} />
</Routes>
</Router>
);
}

export default App;