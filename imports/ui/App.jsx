import React from 'react';

import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1 className="text-3xl font-bold underline">Meteor 2.6 Issue</h1>
      <p>When a document is updated to contain a new field of type array, the field is of type object on the client, when it is initially published.</p>

    <Info/>
  </div>
);
