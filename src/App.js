import React from 'react';
import Welcome from './components/Scripts/Welcome';
import Comment, {comment} from './components/Scripts/Comment/Comment'

function App() {
  return (
    <>
      <Welcome name="Jakub" />
      <Welcome name="Paulina" />
      <Welcome name="Sabina" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </>
  );
}

export default App;
