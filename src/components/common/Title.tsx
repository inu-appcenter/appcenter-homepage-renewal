type TitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};
const Title: React.FC<TitleProps> = ({ className, title, subtitle }) => {
  return (
    <div className={className}>
      <h1 className='text-5xl font-bold text-primary-700'>{title}</h1>
      {subtitle && (
        <h3 className='text-2xl text-gray-500 font-semibold mt-1'>
          {subtitle}
        </h3>
      )}
    </div>
  );
};

export default Title;
