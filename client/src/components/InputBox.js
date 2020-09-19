import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class InputBox extends Component{

    constructor(props) {
        super(props);

        this.state = {
            inputText: ""
        }
    }

    render(){

        return(

            <div class="w-50">
                <InputGroup size="lg" className="mb-3">

                    <InputGroup.Prepend>
                        <InputGroup.Text>{this.props.text}</InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl />

                </InputGroup>
            </div>

        );
        
    }


}

export default InputBox;