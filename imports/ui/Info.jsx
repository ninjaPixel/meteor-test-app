import React from 'react';
import {useTracker} from 'meteor/react-meteor-data';
import {InventoryCollection} from '../api/inventory';
import {Meteor} from "meteor/meteor";

export const Info = () => {
    const inventory = useTracker(() => {
        return InventoryCollection.find().fetch();
    });

    function addNewField(_id) {
        return () => {
            Meteor.call('addNewField', {_id})
        }
    }

    return (
        <div className="my-2 max-w-lg space-y-8">
            <p>Below are some sample documents that contain two fields. Click the 'Add field to document' button to
                add an extra field to a document. This operation is performed server-side and the new field looks like
                this:</p>
            <pre>{`tShirt: { sizes: ["small", "medium", "large"]}`}</pre>
            <p>However, you will see that on the client the published field looks like this:</p>
            <pre>{`tShirt: { sizes: {"0":"small","1":"medium","2":"large"}}`}</pre>
            <p className="font-bold">The <code>sizes</code> array has been converted to an object.</p>
            <p>(note that if you refresh your browser page, the documents are loaded correctly.)</p>

            <div className="flex flex-col gap-6 font-mono text-xs">{inventory.map(
                item => <div
                    className={"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-y-8"}
                    key={item._id}>
                    <p>{JSON.stringify(item)}</p>
                    <button disabled={item.tShirt} onClick={addNewField(item._id)}
                            className={"uppercase border-2 p-2"}>Add
                        field to document
                    </button>
                </div>
            )}</div>
        </div>
    );
};
