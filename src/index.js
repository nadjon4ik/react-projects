import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from './Post';
import reportWebVitals from './reportWebVitals';

const ANAKIN_IMAGE =
  'https://i0.wp.com/coffeewithkenobi.com/wp-content/uploads/2015/08/Anakin_Skywalker_RotS.png?resize=240%2C300&ssl=1';

const RAY_IMAGE =
  'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';

  const LEIA_IAGE ="https://www.jacketscreator.com/wp-content/uploads/2022/05/princess-leia-organa-vest.jpg"

  const KYLO_REN_IMAGE ="https://damion.club/uploads/posts/2022-09/1664204523_39-damion-club-p-zvezdnie-voini-kailo-ren-akter-instagram-47.jpg"

const dataPosts = [
  {
    name: 'Anakin Skywalker',
    photo: ANAKIN_IMAGE,
    nickname: '@dart_vader',
    content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
    image: RAY_IMAGE,
    date: '26 лют.',
    comments:482,
    retweet:146,
    likes:887
  }, {
    name: 'Leia Organa',
    photo: LEIA_IAGE,
    nickname: '@leia_organa',
    content: 'Seriously? Son? Kylo Ren? Did you choose the same path as your grandfather?',
    image: KYLO_REN_IMAGE,
    date: '10 берез.',
    comments:200,
    retweet:150,
    likes:600
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {dataPosts.map((el, i) => <Post key={i} data={el}></Post>)}
  </React.StrictMode>
);


reportWebVitals();
