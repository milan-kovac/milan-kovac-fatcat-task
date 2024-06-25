import React from 'react';

import './styles.css';

import { Landing } from './components/landing/Landing';
import PostForm from './components/PostForm';

function App() {
    return (
        <main>
            <Landing />
            <PostForm />
        </main>
    );
}

export default App;
