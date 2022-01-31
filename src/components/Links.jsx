import React from 'react';
import {user} from '../data/user';

function Links() {
  return (
    <div>
        <h3>Links</h3>
        <a href={props.Links.github}></a>
        <a href={props.Links.linkedin}></a>
    </div>
  );
}

export default Links;