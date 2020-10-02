import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import Header from './Header.jsx';
import NewTodoTitle from './NewTodoTitle.jsx';
import NewTodoDescription from './NewTodoDescription.jsx';
import TimingSelector from './TimingSelector.jsx';
import PublishButton from './PublishButton.jsx';

const TodoBody = styled.div`
  display: flex;
  flex-direction: column;
  top: 98px;
`;

const MidSpacer = styled.div`
  height: 6px;
`;

function NewTodo( { token }) {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { email } = user;
  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  let [timing, setTiming] = useState('');
  const status = 1;

  const postTodo = ([title, description, timing, status]) => {
    const todo = {
      user: email,
      title,
      description,
      timing,
      status,
    }
    const options = {
      method: 'POST',
      url: `http://localhost:5000/todos/${email}`,
      headers: { authorization: `Bearer ${token}` },
      data: todo
    };
    axios.request(options)
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  };

  const titleChange = (text) => {
    setTitle(text)
  }

  const descriptionChange = (text) => {
    setDescription(text)
  }

  const timingChange = (num) => {
    setTiming(num)
  }

  const onSubmit = () => {
    postTodo([title, description, timing, status])
  }

  return (
    <>
      <Header />
      <TodoBody>
        <NewTodoTitle titleChange={titleChange}/>
        <MidSpacer />
        <NewTodoDescription descriptionChange={descriptionChange}/>
        <MidSpacer />
        <TimingSelector
          timing="NOW"
          num="1"
          color="rgba(255, 106, 106, 0.5)"
          timingChange={timingChange}
        />
        <MidSpacer />
        <TimingSelector
          timing="SOON"
          num="2"
          color="rgba(255, 213, 106, 0.5)"
          timingChange={timingChange}
        />
        <MidSpacer />
        <TimingSelector
          timing="LATER"
          num="3"
          color="rgba(106, 157, 255, 0.5)"
          timingChange={timingChange}
        />
        <MidSpacer />
        <PublishButton onSubmit={onSubmit}/>
      </TodoBody>
    </>
  );
}

export default NewTodo;
// import React, { Component } from 'react';
// import styled from 'styled-components';

// import Header from './Header.jsx';
// import NewTodoTitle from './NewTodoTitle.jsx';
// import NewTodoDetail from './NewTodoDetail.jsx';
// import StatusSelector from './StatusSelector.jsx';
// import PublishButton from './PublishButton.jsx';

// const TodoBody = styled.div`
//   display: flex;
//   flex-direction: column;
//   top: 98px;
// `;

// const MidSpacer = styled.div`
//   height: 6px;
// `;

// class NewTodo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       description: '',
//       timing: 1,
//     };
//   }

//   render() {
//     return (
//       <>
//         <Header />
//         <TodoBody>
//           <NewTodoTitle onChange={}/>
//           <MidSpacer />
//           <NewTodoDetail />
//           <MidSpacer />
//           <StatusSelector status="NOW" color="rgba(255, 106, 106, 0.5)" />
//           <MidSpacer />
//           <StatusSelector status="SOON" color="rgba(255, 213, 106, 0.5)" />
//           <MidSpacer />
//           <StatusSelector status="LATER" color="rgba(106, 157, 255, 0.5)" />
//           <MidSpacer />
//           <PublishButton />
//         </TodoBody>
//       </>
//     );
//   }
// }

// export default NewTodo;
