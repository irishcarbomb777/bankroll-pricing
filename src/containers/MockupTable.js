import React from 'react';

export default class MockupTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rowAcc      : 1,
            lineItems   : []
        }
    }

    // This function handles the add item button
    handleClick() {
        let lineItems     = this.state.lineItems
        let rowData = {
            id          : this.state.rowAcc,
            brand       : "",
            productCode : "",
            color       : "",
            orientation : ""
        };

        lineItems.push(rowData)
        this.setState({
            rowAcc   : this.state.rowAcc+1,
            lineItems: lineItems
        });
    }

    handleItemChanged(i, event) {
        var lineItems = this.state.lineItems;
        // event.target.id is the target id of the input tag
        var id = event.target.id
        lineItems[i][id]  = event.target.value;
        this.setState({
            lineItems: lineItems
        });
        console.log(this.state.lineItems)
    }

    handleItemDelete(i) {
        var lineItems = this.state.lineItems;
        lineItems.splice(i, 1);
        // This loop exists to deal with indexing errors in deletion
        for (i; i<lineItems.length; i++){
            lineItems[i].id = lineItems[i].id-1
        }
        
        this.setState({
            rowAcc   : this.state.rowAcc-1,
            lineItems: lineItems
        });
    }

    renderRows() {
        var context = this;
        return this.state.lineItems.map((item, i) =>
                <tr key={"mockup-" + item.id} style={{height:"100px"}}>
                    <td>
                        {i+1} <br/><br/>
                        <button onClick={context.handleItemDelete.bind(context, i)}>
                            Delete
                        </button>
                    </td>
                    <td style={{width:"10%"}}>
                        <input
                            id = {'brand'}
                            style={{width: "100%"}}
                            type="text"
                            value={item.brand}
                            onChange={context.handleItemChanged.bind(context, i)}
                        />
                    </td>
                    <td>
                        <input
                            id = {'productCode'}
                            type="text"
                            value={item.productCode}
                            onChange={context.handleItemChanged.bind(context, i)}
                            />
                    </td>
                    <td>
                        <input
                            id = {'color'}
                            type="text"
                            value={item.color}
                            onChange={context.handleItemChanged.bind(context, i)}
                            />
                    </td>
                    <td>
                        <input
                            id = {'orientation'}
                            type="text"
                            value={item.orientation}
                            onChange={context.handleItemChanged.bind(context, i)}
                            />
                    </td>
                </tr>
            
        );
    }

    render() {
        return (
            <div style={{padding:"0% 10% 0% 10%"}}>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Brand</th>
                            <th>Product Code</th>
                            <th>Color</th>
                            <th>Orientation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                <hr/>
                <button onClick={this.handleClick.bind(this)}>
                    Add Item
                </button>
            </div>
        );
    }
}