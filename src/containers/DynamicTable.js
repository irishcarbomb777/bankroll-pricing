import React from 'react';

export default class DynamicTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rowData : {
                brand       : "",
                productCode : "",
                description : "",
                qty         : "",
                cost        : "",
                jobType     : "",
                price       : ""
            },
            lineItems   : []
        }
    }

    // This method is used to update the text field before creating the row
    // updateMessage(event) {
    //     this.setState({
    //         message: event.target.value
    //     })
    // }

    handleClick() {
        var lineItems = this.state.lineItems;
        lineItems.push(this.state.rowData);

        this.setState({
            lineItems: lineItems
        });
    }

    handleItemChanged(i, event) {
        var lineItems = this.state.lineItems;
        lineItems[i]  = event.target.value;

        this.setState({
            lineItems: lineItems
        });
    }

    handleItemDelete(i) {
        var lineItems = this.state.lineItems;
        lineItems.splice(i, 1);

        this.setState({
            lineItems: lineItems
        });
    }

    renderRows() {
        var context = this;

        return this.state.lineItems.map(function(o, i) {
            return (
                <tr key={"item-" + i} style={{height:"100px"}}>
                    <td>
                        {i+1} <br/><br/>
                        <button onClick={context.handleItemDelete.bind(context, i)}>
                            Delete
                        </button>
                    </td>
                    <td style={{width:"10%"}}>
                        <input
                            id = 'brand'
                            style={{width: "100%"}}
                            type="text"
                            value={o}
                            onChange={context.handleItemChanged.bind(context, i)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={o}
                            onChange={context.handleItemChanged.bind(context, i)}/>
                    </td>
                </tr>
            );
        });
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
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Cost</th>
                            <th>Job Type</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
                <hr/>
                {/* <input type="text" onChange={this.updateMessage.bind(this)}/> */}
                <button onClick={this.handleClick.bind(this)}>
                    Add Item
                </button>
            </div>
        );
    }
}
