import React from 'react';
import axios from 'axios'
import queryString from 'querystring';
import {FormContainer} from './FormContainer'
import {Button} from './Button'

class Form extends React.Component {
    state = {
        name: '',
        email: '',
        podcast: '',
        details: '',
        submitting: false,
        submitted: false,
        emailError: false
    };

    handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        const {name, email, podcast, details} = this.state;

        if (!email || !name) {
            return;
        }

        if (!this.validateEmail(email)) {
            this.setState({emailError: true});
            return;
        }

        this.setState({submitting: true, emailError: false});
        const formData = {name, email, podcast, details}
        axios.get(`https://hooks.zapier.com/hooks/catch/1508074/lbzjne/?${queryString.stringify(formData)}`)
            .then(() => {
                this.setState({submitted: true});
            });
    };

    updateName = (value: string) => {
        this.setState({name: value});
    };

    updateEmail = (value: string) => {
        this.setState({email: value});
    };

    updatePodcast = (value: string) => {
        this.setState({podcast: value});
    };

    updateDetails = (value: string) => {
        this.setState({details: value});
    };

    validateEmail(email: string) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    renderFields() {
        const {name, email, podcast, details, submitting, emailError} = this.state;
        return (
            <div>
                <label>
                    <div>Your name <span>*</span></div>
                    <input placeholder={`Sam Harris`} value={name} onChange={(e) => this.updateName(e.target.value)}/>
                </label>
                <label>
                    <div>Email <span>*</span></div>
                    <input placeholder={`email@podcast.com`} value={email} className={emailError ? 'error' : ''}
                           onChange={(e) => this.updateEmail(e.target.value)}/>
                </label>
                <label>
                    <div>Podcast name</div>
                    <input placeholder={`The Best Podcast Ever`} value={podcast}
                           onChange={(e) => this.updatePodcast(e.target.value)}/>
                </label>
                <label>
                    <div>How do you currently find guests?</div>
                    <textarea placeholder={`Networking, Twitter, LinkedIn, etc.`} value={details}
                              onChange={(e) => this.updateDetails(e.target.value)}/>
                </label>
                <Button onClick={this.handleSubmit} type="submit" disabled={submitting}>
                    Request Invite
                </Button>
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
                <h5>Request an invite</h5>
                {!this.state.submitted && this.renderFields()}
                {this.state.submitted && this.renderSubmitted()}
            </FormContainer>
        )
    }
}

export default Form;
