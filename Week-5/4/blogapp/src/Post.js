import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { title, body } = this.props;
    return (
      <div style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', paddingBottom: '10px', textAlign: 'left' }}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
