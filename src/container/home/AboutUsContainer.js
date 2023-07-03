import { PageTitle } from '../../component/common/PageTitle';
import styled from 'styled-components';
import Slogan from '../../component/home/Slogan';
import Interview from '../../component/home/Interview';

export default function AboutUsContainer({ mref }) {
    return (
        <AboutUsContainerLayout ref={mref}>
            <div>
                <PageTitleBox>
                    <PageTitle title='About Us' />
                </PageTitleBox>
                <SloganBox>
                    <Slogan />
                </SloganBox>
            </div>
            <InterviewBox>
                <Interview />
            </InterviewBox>
        </AboutUsContainerLayout>
    );
}

const AboutUsContainerLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 15rem;
    @media (max-width: 1800px) {
        row-gap: 20rem;
    }
    @media (max-width: 1200px) {
        row-gap: 15rem;
    }
    @media (max-width: 768px) {
        row-gap: 10rem;
    }
    @media (max-width: 576px) {
        row-gap: 5rem;
    }
`;

const PageTitleBox = styled.div`
    padding-top: 150px;
    @media (max-width: 1800px) {
        padding-top: 100px;
    }
    @media (max-width: 576px) {
        padding-top: 50px;
    }
`;

const SloganBox = styled.div`
    margin-top: 150px;
    @media (max-width: 576px) {
        margin-top: 100px;
    }
`;

const InterviewBox = styled.div`
    //height: 40vh;
    //padding-top: 30vh;
    //@media (max-width: 1800px){
    //  padding-top: 20vh;
    //  height: 70vh;
    //}
    //@media (max-width: 576px){
    //  height: 40vh;
    //}
`;
