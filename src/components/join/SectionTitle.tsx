type SectionTitleProps = {
  title: string;
  className?: string;
};
const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <div className={className}>
      <h4 className='inline relative text-primary-700 font-bold text-3xl before:content-[""] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2 before:bg-primary-700 before:h-2.5 before:w-2.5 before:rounded-full after:content-[""] after:absolute after:-right-6 after:top-1/2 after:-translate-y-1/2 after:bg-primary-700 after:h-2.5 after:w-2.5 after:rounded-full'>
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;
