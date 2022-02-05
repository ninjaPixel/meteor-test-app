import {Meteor} from 'meteor/meteor';
import {InventoryCollection} from '/imports/api/inventory';


Meteor.startup(() => {
    // If the collection is empty, add some data.
    if (InventoryCollection.find().count() === 0) {
        InventoryCollection.insert({shop: 'New York'})
        InventoryCollection.insert({shop: 'London'})
        InventoryCollection.insert({shop: 'Paris'})
        InventoryCollection.insert({shop: 'Sydney'})
        InventoryCollection.insert({shop: 'Rio'})
        InventoryCollection.insert({shop: 'Hong Kong'})
    }
});

Meteor.methods({
    addNewField: ({_id}) => {
        console.log('Adding t-shirt sizes 👕 to', _id)
        return InventoryCollection.update({_id}, {$set: {'tShirt': {sizes: ['small', 'medium', 'large']}}})
    }
})
