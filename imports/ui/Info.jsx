import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';
import {Meteor} from "meteor/meteor";

export const Info = () => {
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });

    console.log('links', links);


    function addNewField(_id){
      return ()=>{
          Meteor.call('addArrayField', {_id})
      }
  }

  return (
    <div>
      <p>There are four document in the 'Links' collection. Click on the 'Add array field' button to call a server-side 'Meteor.method' that adds a new field to the document. The new field is an array and this is reflected in the database, however, on the client it shows as an object.</p>
      <div className="flex flex-col gap-6 font-mono text-xs">{links.map(
        link => <div className={"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-8"} key={link._id}>
          <p>{JSON.stringify(link)}</p>
            <button onClick={addNewField(link._id)} className={"uppercase border-2 p-2"}>Add array field</button>
        </div>
      )}</div>
    </div>
  );
};
