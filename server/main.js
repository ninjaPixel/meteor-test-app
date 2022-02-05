import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Document 1',

    });

    insertLink({
      title: 'Document 2',

    });

    insertLink({
      title: 'Document 3',

    });

    insertLink({
      title: 'Document 4',

    });
  }
});
Meteor.methods({
  addArrayField:({_id})=>{
    // return LinksCollection.update({_id}, {$set:{'newArrayField':['Apple', 'Google', 'Linux']}})
    return LinksCollection.update({_id}, {$set:{'newObjectField':{newArrayField: ['Apple', 'Google', 'Linux']}}})
  }
})
