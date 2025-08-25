import SectionLayout from '@components/common/layouts/SectionLayout.tsx';
import SectionTitle from '@components/join/SectionTitle.tsx';
import PaperPlain from '@assets/svg/paper-plane.svg';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const joinStep = [
  {
    label: 'step1',
    content: '3월, 9월에 에브리타임 게시판에서 공고를 확인합니다.',
  },
  {
    label: 'step2',
    content: '공고에 올라온 지원 링크에서 원하는 파트를 지원합니다!',
  },
  {
    label: 'step3',
    content: '서류 합격 시 적합성 면접을 진행합니다!',
  },
  {
    label: 'step4',
    content: '최종 합격 시 활동을 시작합니다.',
  },
];

const JoinSection = () => {
  return (
    <SectionLayout className='md:h-auto gap-y-8 items-center'>
      <SectionTitle title='앱센터 지원' className='flex justify-center' />
      <div className='flex flex-col gap-4 md:grid md:grid-cols-2 max-w-screen-md'>
        {joinStep.map(({ label, content }) => (
          <div
            key={label}
            className='flex flex-col gap-y-2 bg-primary-200 rounded-3xl px-6 py-6 md:py-4'
          >
            <p className='bg-white w-fit px-4 py-1 rounded-2xl text-primary-700 font-semibold'>
              {label}
            </p>
            <p className='pl-2 font-medium'>{content}</p>
          </div>
        ))}
      </div>
      {/*<a*/}
      {/*  href='https://join.inuappcenter.kr'*/}
      {/*  className='flex items-center gap-x-2 border border-primary-700 rounded-3xl px-4 py-2 text-primary-700 font-semibold text-lg hover:bg-primary-200 transition cursor-pointer'*/}
      {/*>*/}
      {/*  지원하러 가기*/}
      {/*  <img src={PaperPlain} alt='앱센터 지원 공고 링크' width={20} />*/}
      {/*</a>*/}

        <ApplyButton onClick={()=>{
          window.open('https://join.inuappcenter.kr', '_blank')
        }}>지원하러 가기<img src={PaperPlain} alt='앱센터 지원 공고 링크' width={20} />
        </ApplyButton>
    </SectionLayout>
  );
};

export default JoinSection;



const ApplyButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    background-color: #ffffff;
    color: #007aff;
    font-size: 1.125rem;
    font-weight: bold;
    padding: 0.85rem 2.25rem;
    border: none;
    border-radius: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.25s ease;

    img {
        filter: invert(32%) sepia(99%) saturate(3200%) hue-rotate(201deg) brightness(95%) contrast(101%);
    }

    &:hover {
        background: linear-gradient(90deg, #007aff, #00cfff);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 122, 255, 0.35);
    }

    &:active {
        transform: scale(0.97);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.4);
    }
`;
