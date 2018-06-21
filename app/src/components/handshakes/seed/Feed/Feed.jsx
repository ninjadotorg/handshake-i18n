import React from 'react';
import Button from '@/components/core/controls/Button';
import Feed from '@/components/core/presentation/Feed';

class NewComponent extends React.Component {
  render() {
    return (
      <div>
        <Feed className="feed">
          <p className="description">{this.props.description}</p>
          <p className="email">{this.props.from_email}</p>
        </Feed>
        <Button block>Shake</Button>
      </div>
    );
  }
}

export default NewComponent;
