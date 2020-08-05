import React, {Component} from 'react';
import './AddItems.css';
class AddItems extends Component {
    state = {
        name : '',
        age : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target.name.value === '' ) {
            return false
        } else {
            this.props.addItem(this.state);
            e.currentTarget.reset()
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Enter name ...' id='name' onChange={this.handleChange} />
                <input type='number' placeholder='Enter age ...' id='age' onChange={this.handleChange} />
                <input type='submit' value='Add' />
            </form>
        )
    }
}
export default AddItems;