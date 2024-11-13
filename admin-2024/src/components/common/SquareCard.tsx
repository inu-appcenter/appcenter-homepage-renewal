import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface SquareCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const SquareCard = ({ icon, title, description, onClick }: SquareCardProps) => {
  return (
    <Box
      className='cursor-pointer rounded-lg border-gray-300 bg-white shadow-md transition-colors duration-300 hover:bg-[#e1e1e1]'
      onClick={onClick}
    >
      <CardContent className='flex h-full w-full flex-col justify-between'>
        <div className='mb-2 w-16'>{icon}</div>
        <div>
          <Typography
            variant='h5'
            component='div'
            className='text-2xl font-bold'
          >
            {title}
          </Typography>
          <Typography
            sx={{ color: 'text.secondary', mb: 1.5 }}
            className='mb-2 text-sm text-gray-500'
          >
            {description}
          </Typography>
        </div>
      </CardContent>
    </Box>
  );
};
export default SquareCard;
