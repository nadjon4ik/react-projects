import logo from './logo.svg';
import './Post.css';

const ANAKIN_IMAGE =
  'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg';

const RAY_IMAGE =
  'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale';

const dataPosts = [
  {
    name: 'Anakin skywalker',
    photo: ANAKIN_IMAGE,
    nickname: '@dart_vader',
    content: 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
    image: RAY_IMAGE,
    date: '26 февр.',
  },
];

function Post() {
  return (
    <div className="Post">
      <header className="Post-header">
        <img src={logo} className="Post-logo" alt="logo" />
        <p>
          Edit <code></code> and save to reload.
        </p>
        <a
          className="Post-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Post;
