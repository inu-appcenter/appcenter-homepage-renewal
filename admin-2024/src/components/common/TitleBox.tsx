import { Box } from '@mui/material';

interface TitleBoxProps {
  title: string;
  description: string;
}

const TitleBox = ({ title, description }: TitleBoxProps) => {
  return (
    <Box className='h-165 mx-auto flex flex-col items-center justify-center rounded-3xl bg-[#2761DE] p-12 md:w-[700px] lg:w-[800px]'>
      <h1 className='text-4xl font-bold text-white'>{title}</h1>
      <br />
      <p className='text-lg text-gray-400'>{description}</p>
    </Box>
  );
};

export default TitleBox;
