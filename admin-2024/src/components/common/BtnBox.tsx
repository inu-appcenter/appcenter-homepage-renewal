interface BtnBoxProps {
  text: string;
  color?: string;
  onClick?: () => void;
}

const BtnBox = ({ text, color = '#FBB010', onClick }: BtnBoxProps) => {
  return (
    <button
      className='rounded-2xl pb-1 pl-4 pr-4 pt-1'
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default BtnBox;
