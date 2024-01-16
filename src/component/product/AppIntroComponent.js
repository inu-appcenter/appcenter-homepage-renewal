import styled from 'styled-components';
import productList from '../../resource/string/productList';

export default function AppIntroComponent({ appData, onClose }) {
    return (
        <ModalContainer>
            <figure>
                <AppImage src={appData.images[1]} loading='lazy' alt='' />
            </figure>
            <AppTitle>{appData.title}</AppTitle>
            <AppDescription>{appData.subTitle}</AppDescription>
            <InstallBtn onClick={onClose}>설치</InstallBtn>
            <DetailInfo>{appData.body}</DetailInfo>
            <DetailImage src={appData.images[2]} loading='lazy' alt='' />
            <DetailImage src={appData.images[3]} loading='lazy' alt='' />
            <DetailImage src={appData.images[4]} loading='lazy' alt='' />
        </ModalContainer>
    );
}

const DetailImage = styled.img`
    position: relative;
    border-radius: 8px;
    left: -10px;
    top: 4rem;
    width: 200px;
    height: 400px;
    z-index: 2;
    & + & {
        left: 0rem;
    }
    & + & + & {
        left: 10px;
    }
`;

const DetailInfo = styled.div`
    position: relative;
    width: 70%;
    margin: 0 auto;
    top: -1rem;
`;

const InstallBtn = styled.button`
    position: absolute;
    border: none;
    background-color: #5858fa;
    border-radius: 5px;
    color: white;
    width: 6rem;
    height: 2rem;
    margin: 1rem 3.5rem 0 auto;
    left: 32rem;
    top: 1.2rem;
`;

const ModalContainer = styled.div`
    background: rgba(255, 255, 255, 0.95);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    height: 250px;
    width: 100%;
    margin: auto;
    position: relative;
`;

const AppImage = styled.img`
    position: absolute;
    width: 7rem;
    height: 7rem;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;

    top: -1.5rem;
    left: 1.5rem;
`;

const AppTitle = styled.h2`
    position: relative;
    font-size: 24px;
    top: -1rem;
    left: 8rem;
`;

const AppDescription = styled.p`
    font-size: 16px;
    color: #666;
    position: relative;
    top: -2rem;
    left: 8rem;
`;

const AppDemoImage = styled.img`
    width: 100%;
    border-radius: 8px;
`;
