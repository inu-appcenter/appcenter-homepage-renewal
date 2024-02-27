import { useParams } from 'react-router-dom';
import { PartParam } from '@type/common.ts';
import useGetFaqsPublicAllQuery from '@api/query/useGetFaqsPublicAllQuery.ts';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';

const FaqDetailList = () => {
  const { part } = useParams<PartParam>();
  const { data } = useGetFaqsPublicAllQuery(part ?? 'android');

  return (
    <Accordion className='flex flex-col gap-4'>
      {data.map(({ id, question, answer }) => (
        <AccordionItem key={id} className='p-4 bg-primary-200 rounded-3xl'>
          <h2 className='rounded-3xl bg-white'>
            <AccordionButton className='rounded-3xl'>
              <Box
                as='span'
                flex='1'
                textAlign='left'
                className='font-semibold before:content-["Q."] before:mr-1 before:leading-4 before:font-semibold'
              >
                {question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={0} className='text-primary-800 font-medium'>
            {answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqDetailList;
