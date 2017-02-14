import React                from 'react';
import { Avatar }           from 'rebass';

const UserProfilePreview = () => {
    return (
      <div className='profile-preview'>
        <Avatar
          circle
          size={100}
          src="http://lorempixel.com/64/64/cats"
        />
      </div>
    )
}

export default UserProfilePreview;
