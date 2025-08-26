import styled from "styled-components";
import PaperPlain from '@assets/svg/paper-plane.svg';
import { useNavigate } from 'react-router-dom';

const Slogan = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-y-6 text-center break-keep">
      <h1 className="text-white text-6xl font-extrabold">INU APPCENTER</h1>
      <h2 className="text-secondary-300 font-bold text-2xl">
        "우리에게 필요한 것은 우리가 만든다"
      </h2>
      <p className="font-semibold text-white text-xl">
        앱센터는 교내 정보전산원 소속으로, 인천대학교 학생들이 애플리케이션과
        서비스를 만드는 공간입니다. <br />
        활동에 필요한 비용의 일부를 전산원으로부터 지원받고 있습니다.
        <br />
        앱센터에서 개발자와 디자이너를 만나 함께 성장해요!
      </p>

      <RecruitBox>
        <RecruitTitle>17.5기 모집 중!</RecruitTitle>
        <ApplyButton onClick={()=>{
          setTimeout(() => {
            navigate("/join");
          }, 400);
        }}>지원하러 가기<img src={PaperPlain} alt='앱센터 지원 공고 링크' width={20} />
        </ApplyButton>
      </RecruitBox>
    </div>
  );
};

export default Slogan;

const RecruitBox = styled.div`
    background: rgba(255, 255, 255, 0.15); /* 반투명 흰색 */
    backdrop-filter: blur(12px); /* 블러 처리 */
    -webkit-backdrop-filter: blur(12px); /* 사파리 대응 */
    border-radius: 1.25rem;
    padding: 2rem 3rem;
    margin-top: 1rem;
    text-align: center;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

const RecruitTitle = styled.h2`
    font-size: 1.85rem;
    font-weight: 800;
    color: #ffffff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
`;
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
