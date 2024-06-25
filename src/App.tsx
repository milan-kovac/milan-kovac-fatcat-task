import React from 'react';

import './styles.css';

import PageGenerator from './components/PageGenerator';

const data = [
    {
        type: 'layoutSection',
        props: { classes: ['bg-[#8c8fe4]'] },
        components: [
            {
                type: 'Hero',
                props: {
                    title: 'Welcome to our site',
                    image: 'https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg',
                },
            },
            {
                type: 'PostForm',
                props: null,
            },
        ],
    },
];
function App() {
    return (
        <main>
            <PageGenerator data={data} />
        </main>
    );
}

export default App;
