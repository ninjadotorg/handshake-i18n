import React from 'react';

// components
import Avatar from './../Avatar';

// style
import './CommentItem.scss';
import {APP_USER_NAME} from "@/constants";

class CommentItem extends React.PureComponent {

  render() {
    const {
      comment,
      image,
      address,
    } = this.props;
    return (
      <div className="commentItem">
        <div className="userInfo">
          <Avatar />
          <span className="userName">{address ? address.replace(address.substr(5, 32), '...') : ''}</span>
        </div>
        <p className="comment">{comment}</p>
        {
          image && <img src={image} alt={comment} className="imageComment" />
        }
      </div>
    );
  }
}

export default CommentItem;
