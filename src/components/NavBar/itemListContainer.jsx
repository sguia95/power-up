import React, {Component} from 'react'; 

export default class ItemListContainer extends Component {
    render () {
        return (
            <div>
                Bienvenido {this.props.usuario} a Power-Up
            </div>
        )
    }
}