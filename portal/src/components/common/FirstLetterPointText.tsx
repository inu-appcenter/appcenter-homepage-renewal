type FirstLetterPointLabelProps = {
  text: string;
};
const FirstLetterPointText: React.FC<FirstLetterPointLabelProps> = ({
  text,
}) => {
  return (
    <h4 className='text-4xl font-semibold mb-2 first-letter:text-primary-700'>
      {text}
    </h4>
  );
};

export default FirstLetterPointText;
