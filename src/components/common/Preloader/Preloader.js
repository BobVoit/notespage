import React from 'react';
import preloader from '../../../images/preloader.svg';
import styled from 'styled-components';
import preloader2 from '../../../images/preloader2.svg';

const PreloaderWrapper = styled.div`
`;

const Preloader = () => {
    return (
        <PreloaderWrapper>
            <img src={preloader2} alt="preloader" />
        </PreloaderWrapper>
    )
}

export default Preloader;