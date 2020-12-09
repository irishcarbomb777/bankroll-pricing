import React, { Component } from 'react'
import PricingTable from "./PricingTable"
import {Button} from 'react-bootstrap'

export class PricingSheet extends Component {

    constructor(props){
        super(props);
        this.state = {
            tableData: [
            {
                id: '',
                brand: '',
                productCode: '',
                description: '',
                garmentCost: '',
                qty : '',
                jobType: 'Screen Printing'
            }, {
                brand: '',
                productCode: '',
                description: '',
                garmentCost: '',
                qty : '',
                jobType: 'Screen Printing'}]

        }
    }

    // addRow = ({ dataSize }) =>{
    //     this.setState({
    //         tableData: this.state.tableData.push({
    //             id:'',
    //             brand: '',
    //             productCode: '',
    //             description: '',
    //             garmentCost: '',
    //             qty : '',
    //             jobType: 'Screen Printing'
    //         })
    //     })
    //     console.log(this.state.tableData)
    // }
    render() {
        return(
            <div>
                <PricingTable tableData = {this.state.tableData}></PricingTable>
                <Button variant="primary" onClick={this.addRow}>Add Row</Button>
            </div>
        )
    };
};

export default PricingSheet