import React from 'react'
import styled from 'styled-components';
import logoImg from '../img/castQ-logo-horizontal.png';
import micImg from '../img/castq_illustration_microphone.png';
import uiImg from '../img/castq_ui_example.png';

import Form from '../components/Form';

const TopSection = styled.div`
    padding: 32px 0;
    border-bottom: 20px solid rgba(255,255,255,0.25);
    background: #ffffff; /* Old browsers */
    background: -moz-linear-gradient(-45deg, #ffffff 0%, #efefef 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, #ffffff 0%,#efefef 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, #ffffff 0%,#caf3f0 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#efefef',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

const BottomSection = styled.div`
  padding: 32px 0;
  
  p {
    margin-bottom: 24px;
    
    &:last-of-type {
    margin-bottom: 0;
    }
  }
`;

const Inner = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 0 16px;
`;

const Grid = styled.div`
    display: flex;
    margin: 48px 0;
    justify-content: space-between;
    align-items: center;
    
    .content {
      width: 62%;
    }
    
    .cover-image {
      width: 33%;
      text-align: center;
      align-self: center;
    }
    
    .ui-example {
      width: 30%;
    }
    
    @media screen and (max-width: 620px) {
        flex-direction: column;
        
        .content, .cover-image, .ui-example {
            width: 100%;
        }
        
        .content {
           h1, h2, p {
              text-align: center;
           }
        }
    }
`;

const Logo = styled.img`
    max-width: 120px;
    
    @media screen and (max-width: 620px) {
        margin: 0 auto;
        display: block;
        width: 100%;
        max-width: 220px;
    }
`;

const Microphone = styled.img`
    max-width: 220px;
    
    @media screen and (max-width: 620px) {
        display: none;
    }
`;

const UIExampleImg = styled.img`
    width: 100%;
    
    @media screen and (max-width: 620px) {
        max-width: 300px;
        margin: 24px auto 16px;
        display: block;
    }
`;

export default () => (
    <div>
        <TopSection>
            <header>
                <Inner>
                    <Logo src={logoImg}/>
                </Inner>
            </header>
            <Inner>
                <Grid>
                    <div className="content">
                        <h1>Collaboratively create podcast episodes with your listeners.</h1>
                        <p>Propose topics you’d like to discuss on your podcast and let your listeners submit their
                            questions and recommend guests.</p>
                        <Form/>
                        <p className="small">
                            We’re currently building the first version of the product. Sign up for an invite and we’ll
                            let you know when it’s ready to go.
                        </p>
                    </div>
                    <div className="cover-image">
                        <Microphone src={micImg}/>
                    </div>
                </Grid>
            </Inner>
        </TopSection>
        <BottomSection>
            <Inner>
                <Grid>
                    <div className="content">
                        <h2>How does it work?</h2>
                        <p>
                            Do you have an idea for an episode but you’re not sure how to approach the topic? This is
                            the
                            perfect opportunity to tap into your audience’s collective wisdom.
                        </p>
                        <p>
                            First, you’ll propose a topic of conversation to your audience. Then, your
                            listeners, or anyone interested in the topic, will be able to ask questions they’d like
                            answered. They’ll also be able to recommend guests.
                        </p>
                        <p>
                            The feedback you receive will be a good indicator of whether or not your audience is
                            interested in the topic.
                            Do your listeners seem curious? Which questions are they up-voting? Does the topic require a
                            deep dive or an overview?
                            Perhaps the topic could merit a series of conversations.
                        </p>
                        <p>
                            Our goal is to create better conversations between you, your guests and your listeners.
                        </p>
                    </div>
                    <div className="ui-example">
                        <UIExampleImg src={uiImg}/>
                        <p className="small" style={{textAlign: 'center'}}>
                            Above is a conceptual design of how the platform will work: you propose a topic and guests
                            suggest questions and recommend guests.
                        </p>
                    </div>
                </Grid>
            </Inner>
        </BottomSection>
        <TopSection/>
    </div>
)
