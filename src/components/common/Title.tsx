type TitleProps = {
  title: string;
  className?: string;
};
const Title: React.FC<TitleProps> = ({ className, title }) => {
  return (
    <h1 className={'text-5xl font-bold text-primary-600 ' + className}>
      {title}
    </h1>
  );
};

export default Title;
