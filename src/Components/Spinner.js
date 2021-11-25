import React, { Component } from 'react'
import loading from './loaging.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="my-2" src={loading} alt="loading"/>
            </div>
        )
    }
}
// hii rihil sanghani is added   
export default Spinner
