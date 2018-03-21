import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`

const PostContainer = styled.div`
  width: 600px;
  margin-bottom: 10px;
  background-color: lightblue;
`

const PTitle = styled.h3`
  width: 600px;
  margin-bottom: 10px;
  background-color: lightcyan;
  font-size: 20px;
`

const PContent = styled.div`
  width: 600px;
  background-color: lightgreen;
  font-size: 14px;
  
  img {
    max-width: 100%;
  }
`

export default class News extends React.Component {
  constructor(props) {
    super(props)

    let initialState
    if (props.staticContext.initialState) {
      initialState = props.staticContext.initialState
    } else {
      initialState = window.__INITIAL_STATE__
      delete window.__INITIAL_STATE__
    }

    this.state = {
      posts: initialState,
    }
  }

  static requestInitialData() {
    return axios.get('https://www.v2ex.com/api/topics/hot.json')
      .then(resp => resp.data)
  }

  render() {
    const { posts } = this.state

    return (
      <AppContainer>
        <Link to={'/latest'}>最新</Link>
        <div>
          {posts.map(post =>
            <PostContainer key={post.id}>
              <PTitle>
                {post.title}
              </PTitle>
              <PContent dangerouslySetInnerHTML={{ __html: post.content_rendered }} />
            </PostContainer>
          )}
        </div>
      </AppContainer>
    )
  }
}
