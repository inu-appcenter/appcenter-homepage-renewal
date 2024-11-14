import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface BoxCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const BoxCard = ({ icon, title, description, onClick }: BoxCardProps) => {
  return (
    <Box
      sx={{ width: 'w-full sm:min-w-[780px]', height: 100 }}
      className='flex cursor-pointer items-center justify-center rounded-lg border-gray-300 bg-white align-middle shadow-md transition-colors duration-300 hover:bg-[#e1e1e1]'
      onClick={onClick}
    >
      <CardContent className='flex h-full w-full flex-row'>
        <div className='mr-6'>{icon}</div>
        <div>
          <Typography className='text-lg font-bold'>{title}</Typography>
          <Typography
            sx={{ color: 'text.secondary', mb: 1.5 }}
            className='text-sm text-gray-500'
          >
            {description}
          </Typography>
        </div>
      </CardContent>
    </Box>
  );
};
export default BoxCard;
