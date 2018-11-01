import React from 'react';
import axios from 'axios'
import queryString from 'querystring';
import {FormContainer} from './FormContainer'
import {Button} from './Button'

class Form extends React.Component {
    state = {
        email: '',
        submitting: false,
        submitted: false,
        emailError: false
    };

    handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const {email} = this.state;

        if (!this.validateEmail(email)) {
            this.setState({emailError: true});
            return;
        }

        this.setState({submitting: true, emailError: false});
        axios.get(`https://hooks.zapier.com/hooks/catch/1508074/lbzjne/?${queryString.stringify({email})}`)
            .then(() => {
                this.setState({submitted: true});
            });
    };

    updateEmail = (value: string) => {
        this.setState({email: value});
    };

    validateEmail(email: string) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    renderFields() {
        const {email, submitting, emailError} = this.state;
        return (
            <div>
                <label>
                    Request an invite
                </label>
                <div className="input-container">
                <input placeholder={`email@podcast.com`} value={email} className={emailError ? 'error' : ''}
                       onChange={(e) => this.updateEmail(e.target.value)}/>
                <Button onClick={this.handleSubmit} type="submit" disabled={submitting}>
                    Submit
                </Button>
                </div>
            </div>
        )
    }

    renderSubmitted() {
        return (
        <div className={`submitted`}>
            <p>Glad you're interested! We'll send you an invite as soon as we're done coding.</p>
        </div>
        )
    }

    render() {
        return (
            <FormContainer>
                {!this.state.submitted && this.renderFields()}
                {this.state.submitted && this.renderSubmitted()}
            </FormContainer>
        )
    }
}

export default Form;
