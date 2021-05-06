import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {

    state = {
        query: ''
    };

    setQuery = queryParam => {
        this.setState({
            query: queryParam
        })
    }



    render() {
       // console.log(this.props.products)
        return(
            <div>
               
                <h1>IronStore</h1>


                <SearchBar
                    query={this.state.query}
                    setQueryProp={this.setQuery}
                />

                <ProductTable
                    products={this.props.products}
                    />


            </div>

        )
    }
}

export default FilterableProductTable;