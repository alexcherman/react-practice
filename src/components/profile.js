import React from 'react';
import {Link} from 'react-router-dom';

import Card from '../hoc/card';
import Auth from '../hoc/auth';

const Profile = (props) => {
  
  return (
    <Auth>
      <Card>
        <Link to={`${props.match.url}/post`}>Link to the /profile/posts</Link>
      </Card>
    </Auth>
  )
}


export default Profile;