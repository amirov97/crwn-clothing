import React from "react";
import shopData from "./shopData";
import CollectionPreview from "../../components/collection-preview/collectionPreview";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            collections: shopData
        }
    }

    render() {
        return(
            <div>
                {this.state.collections.map(collection=>(
                    <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
                ))}
            </div>
        )
    }
}
export default ShopPage