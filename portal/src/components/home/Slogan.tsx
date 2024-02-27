const Slogan = () => {
  return (
    <div className='flex flex-col items-center gap-y-6 text-center'>
      <h1 className='text-white text-6xl font-extrabold'>INU APPCENTER</h1>
      <h2 className='text-secondary-300 font-bold text-2xl'>
        "우리에게 필요한 것은 우리가 만든다"
      </h2>
      <p className='font-semibold text-white text-xl'>
        앱센터는 교내 정보전산원 소속으로, 인천대학교 학생들이 애플리케이션과
        서비스를 만드는 공간입니다. <br />
        활동에 필요한 비용의 일부를 전산원으로부터 지원받고 있습니다.
        <br />
        앱센터에서 개발자와 디자이너를 만나 함께 성장해요!
      </p>
    </div>
  );
};

export default Slogan;
