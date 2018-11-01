import React from 'react'
import styled from 'styled-components';
import logoImg from '../img/castQ-logo-horizontal.png';

import Form from '../components/Form';

const TopSection = styled.div`
    padding: 32px 0;
    background: #ffffff; /* Old browsers */
    background: -moz-linear-gradient(-45deg, #ffffff 0%, #efefef 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(-45deg, #ffffff 0%,#efefef 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(135deg, #ffffff 0%,#efefef 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#efefef',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

const Inner = styled.div`
    width: 750px;
    margin: 0 auto;
`;

const Grid = styled.div`
    display: flex;
    margin: 32px 0;
    justify-content: space-between;
    
    .left {
      width: 66%;
    }
    
    .right {
      width: 33%;
    }
`;

const Logo = styled.img`
    max-width: 120px;
`;

export default () => (
    <div>
        <TopSection>
            <header>
                <Inner>
                    <Logo src={logoImg} />
                </Inner>
            </header>
            <Inner>
                <Grid>
                    <div className="left">
                        <h1>Give your listeners a voice.</h1>
                        <p>Propose topics you’d like to discuss on your podcast and let your listeners submit their questions and recommend guests.</p>
                        <Form/>
                    </div>
                    <div className="right">
                        Placeholder
                    </div>
                </Grid>
            </Inner>
        </TopSection>
    </div>
)
