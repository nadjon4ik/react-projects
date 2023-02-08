import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from './Post';
import reportWebVitals from './reportWebVitals';

const ANAKIN_IMAGE =
  'https://i0.wp.com/coffeewithkenobi.com/wp-content/uploads/2015/08/Anakin_Skywalker_RotS.png?resize=240%2C300&ssl=1';

const RAY_IMAGE =
  'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';

const dataPosts = [
  {
    name: 'Anakin Skywalker',
    photo: ANAKIN_IMAGE,
    nickname: '@dart_vader',
    content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
    image: RAY_IMAGE,
    date: '26 февр.',
    comments:482,
    retweet:146,
    likes:887
  }, {
    name: 'Anakin Skywalker',
    photo: ANAKIN_IMAGE,
    nickname: '@dart_vader',
    content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
    image: RAY_IMAGE,
    date: '26 февр.',
    comments:482,
    retweet:146,
    likes:887
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {dataPosts.map((el, i) => <Post key={i} data={el}></Post>)}
  </React.StrictMode>
);


reportWebVitals();
