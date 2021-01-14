import React from 'react';
import preloader from '../../../images/preloader.svg';
import styled from 'styled-components';


const PreloaderWrapper = styled.div`
    width: 100%;
    display: 'flex';
    justify-content: center;
`;

const Preloader = () => {
    return (
        <PreloaderWrapper>
            <img src={preloader} alt="preloader" />
        </PreloaderWrapper>
    )
}

export default Preloader;