import React, { Component } from 'react'


export default class SearchBar extends Component {

    handleChange = event => {
        this.props.setQueryProp(event.target.value);
    }    

    render() {
       console.log('test')
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="query"
                        value={this.props.query}
                        onChange={this.handleChange}
                    />
                    

                </form>
            </div>
        )
    }

}