import React from 'react'
import styled from 'styled-components';

import Form from '../components/Form';
import logoImg from 'img/castQ-logo.png';
import orbitInnerImg from 'img/orbit-inner.png';
import orbitOuterImg from 'img/orbit-outer.png';

const LogoContainer = styled.div`
    max-width: 220px;
    margin: 24px auto;
    img {
        width: 100%;
    }
`;

const OrbitContainer = styled.div`
    width: 90px;
    height: 80px;
    position: relative;
   
    img {
        width: 100%;
        position: absolute;
        
        &.inner {
            -webkit-animation: rotation 30s infinite linear;
        }
        &.outer {
            -webkit-animation: rotation-reverse 40s infinite linear;
        }
    }
    
    @media screen and (max-width: 400px) {
        display: none;
    }
`;

const MainContainer = styled.div`
    display: flex;
    margin-top: 48px;
    
    .left {
        width: 50%;
    }
    
    .right {
        width: 40%;
        margin-left: 10%;
    }
    
    @media screen and (max-width: 600px) {
        display: block;
        
        .left, .right {
            width: 100%;
            margin: 20px 0;
        }
        
        .left {
            text-align: center;
        }
    }
`;

export default () => (
    <div>
        <LogoContainer>
            <img src={logoImg} alt="CastQ"/>
        </LogoContainer>
        <div style={{textAlign: 'center'}}>
            <h1>Find your next podcast guest.</h1>
        </div>

        <div style={{display: 'flex', marginTop: '24px', alignItems: 'center'}}>
            <OrbitContainer>
                <img src={orbitInnerImg} className={`inner`}/>
                <img src={orbitOuterImg} className={`outer`}/>
            </OrbitContainer>
            <p className={`intro`} style={{width: '100%'}}>
                Podcast guests are the lifeblood of lively, informative, entertaining conversations.
                CastQ helps connect you with the people that you, and your audience, want to hear from.
            </p>
        </div>

        <MainContainer>
            <div className={`left`}>
                <h2>Are you a podcast host?</h2>
                <p>We’re podcast fans and, selfishly, we’d love to hear from a wider variety of voices.
                    That’s why we’re on a mission to create a platform that connects
                    podcasters with emerging subject-matter experts.</p>

                <p>Our goal is to make it easier for you to find interesting guests to invite onto your show.
                    We also want to help you filter out the self-promotional clutter.</p>

                <p>Have feedback for us? We're good listeners. Reach out on Twitter at @maplethorpej or @castq.</p>
            </div>
            <div className={`right`}>
                <Form/>
            </div>
        </MainContainer>
    </div>
)
