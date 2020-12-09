import React from 'react';

export default class DynamicTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            items: []
        }
    }

    updateMessage(event) {
        this.setState({
            message: event.target.value
        })
    }

    handleClick() {
        var items = this.state.items;
        items.push(this.state.message);

        this.setState({
            items: items
        });
    }

    handleItemChanged(i, event) {
        var items = this.state.items;
        items[i] = event.target.value;

        this.setState({
            items: items
        });
    }

    handleItemDelete(i) {
        var items = this.state.items;
        items.splice(i, 1);

        this.setState({
            items: items
        });
    }

    renderRows() {
        var context = this;

        return this.state.items.map(function(o, i) {
            return (
                <tr key={"item-" + i}>
                    <td>
                        <button onClick={context.handleItemDelete.bind(context, i)}>
                            Delete
                        </button>
                    </td>
                    <td style={{width:"10%"}}>
                        <input
                            style={{width: "100%"}}
                            type="text"
                            value={o}
                            onChange={context.handleItemChanged.bind(context, i)}
                        />
                    </td>

                </tr>
            );
        });
    }

    render() {
        return (
            <div>
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
