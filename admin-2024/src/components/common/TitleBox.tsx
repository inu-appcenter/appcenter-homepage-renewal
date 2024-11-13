import { Box } from '@mui/material';

interface TitleBoxProps {
  title: string;
  description: string;
}

const TitleBox = ({ title, description }: TitleBoxProps) => {
  return (
    <Box
      sx={{ height: 165 }}
      className='flex flex-col items-center justify-center rounded-3xl bg-[#2761DE]'
    >
      <h1 className='text-4xl font-bold text-white'>{title}</h1>
      <br />
      <p className='text-lg text-gray-400'>{description}</p>
    </Box>
  );
};
export default TitleBox;
