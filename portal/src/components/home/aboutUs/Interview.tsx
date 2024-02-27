import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { Autoplay, EffectCards, Pagination } from 'swiper/modules';

export const interviewAnswer = [
  {
    key: 0,
    answer:
      '제일 좋았던 점이라면, 서비스를 만들고 운영하는 신나고 때로는 익스트림한 경험들을 할 수 있었다는 것, 또 무엇보다 소중한 동료들을 알게 되고 함께할 수 있게 되었다는게 제일 좋았네요(웃음). 아무래도 혼자서 할 수 있는 일에는 한계가 있잖아요. 마음이 맞는 사람이 모이는 것도 기적같은 일인데, 그런 사람들과 함께 실제로 작동하는 서비스를 만들어서 운영해볼 수 있는 경험이 저에게는 너무 소중했어요. 직접 만든 앱이 잘 사용되는 모습을 보는 게 얼마나 뿌듯하고 행복한지 몰라요. 이런 즐거운 여정에 함께하고 싶으신 분이라면 앱센터는 누구에게든 열려 있습니다. 어서 오세요(웃음).\n',
    name: '안드로이드 송병준',
  },
  {
    key: 1,
    answer:
      '파트마다 진행하는 스터디나 프로그래밍에 관심이 있는 사람들과 만날 수 있고, 의견을 나눌 수 있는 환경이 좋았던 것 같아요. 서버 파트의 활동을 하면서 다른 파트의 스터디도 참여하거나 스터디 자료를 보면서 배워볼 수 있는 기회를 얻었던 점이 분야에 대한 고민이 있던 저에게는 큰 수확이었다고 생각해요. 그리고 방학에 진행하는 프로젝트를 통해 배운 내용을 실제로 활용하면서 부족한 부분이나 모르는 부분에 대해 알아갈 수 있어서 좋았어요.',
    name: '서버 이주원',
  },
  {
    key: 2,
    answer:
      '프로젝트의 기획부터 출시까지 모든 과정을 경험하면서, 다른 사람과 함께 작업하려면 어떻게 해야하는 지 생각해볼 수 있었어요. 그리고 앱센터에는 어마무시한 실력을 가진 사람들이 있답니다.',
    name: '익룡',
  },
  {
    key: 3,
    answer:
      '공강시간에 자유롭게 모여서 프로그래밍 이야기를 하고 정보를 공유할 수 있다는 점이 좋았습니다!',
    name: '익명',
  },
  {
    key: 4,
    answer: '서로 교류하면서 프로젝트나 스터디를 진행하는게 좋았습니다!',
    name: '웹 이하령',
  },
  {
    key: 5,
    answer:
      '팀원들이 친절해서 스터디 하는데 전혀 부담이 없었고, 웹 개발 공부를 처음으로 시작했는데 배워간게 많은 것 같아서 좋았습니다!!',
    name: '웹 홍정우',
  },
];

const Interview = () => {
  return (
    <div className='flex flex-col justify-center overflow-hidden'>
      <div className='flex gap-16 flex-wrap justify-center'>
        <h2 className='mt-8 pl-8 text-primary-700 font-bold text-4xl before:content-["Q."] before:relative -indent-8'>
          앱센터 활동을 하면서 <br />
          어떤 점이 좋았나요?
        </h2>
        <Swiper
          className='px-4  w-full sm:w-2/3 lg:w-1/2'
          effect='cards'
          pagination={{
            clickable: true,
          }}
          grabCursor
          modules={[Pagination, Autoplay, EffectCards]}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
        >
          {interviewAnswer.map((item) => (
            <SwiperSlide
              key={item.key}
              className='p-10 h-fit rounded-4xl text-grayscale-900 bg-primary-200'
            >
              <p className='font-semibold'>{item.answer}</p>
              <p className='text-sm font-bold text-primary-900'>{item.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Interview;
