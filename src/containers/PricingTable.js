import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor';



class PricingTable extends Component {

    constructor(props) {
        super(props);
        // this.state = {rowCount: props.tableData.length};
    }

    // handleDataChange = ({dataSize}) => {
        // this.setState({rowCount:dataSize})
    // }

render(){
    return (
        <BootstrapTable
            // onDataSizeChange={ this.handleDataChange}
            keyField='id'  
            data={ this.tableData } 
            columns={ [
                {
                    dataField: 'id',
                    text: '#'
                }, {
                    dataField: 'brand',
                    text: 'Brand'
                }, {
                    dataField: 'productCode',
                    text: 'Product Code'
                }, {
                    dataField: 'description',
                    text: 'Description'
                }, {
                    dataField: 'garmentCost',
                    text: 'Garment Cost'
                }, {
                    dataField: 'qty',
                    text: 'Qty'
                }, {
                    dataField: 'jobType',
                    text: 'Job Type',
                    editor: {
                        type: Type.SELECT,
                        options: [{
                            value: 'Screen Printing',
                            label: 'Screen Printing'
                        }, {
                            value: 'Embroidery',
                            label: 'Embroidery'
                        }]
                    }
                }
             ] }
            cellEdit={ cellEditFactory({ mode: 'click', blurToSave: true})} />
        )
    }
};

export default PricingTable;



