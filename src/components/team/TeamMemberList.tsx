import useGetGroupsPublicAllQuery from '@api/query/useGetGroupsPublicAllQuery.ts';
import { useParams } from 'react-router-dom';
import { TeamParam } from '@type/common.ts';
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import LogoSmall from '@assets/svg/navbar_logo_small.svg';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const TeamMemberList = () => {
  const { part } = useParams<TeamParam>();
  const { data } = useGetGroupsPublicAllQuery({ part: part });

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 justify-center'>
      {data.map(
        ({
          member,
          profileImage,
          year,
          role,
          part,
          gitRepositoryLink,
          blogLink,
        }) => (
          <Card padding={4} rowGap={4} variant='outline' className='w-fit'>
            <CardBody padding={0}>
              <Image
                src={profileImage ?? LogoSmall}
                alt={`${member}의 프로필 사진`}
                className='w-40 h-40 min-w-40 sm:w-48 sm:h-48 md:w-50 md:h-50'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>
                  {member}
                  {['센터장', '파트장'].includes(role) && (
                    <Badge ml={2} colorScheme='green'>
                      운영진
                    </Badge>
                  )}
                </Heading>
                <Text>{`${year}기 ${part} ${role}`}</Text>
              </Stack>
            </CardBody>
            <CardFooter padding={0}>
              <Stack direction='row' spacing='4'>
                {gitRepositoryLink && (
                  <Link href={gitRepositoryLink} isExternal>
                    Github <ExternalLinkIcon mx='2px' />
                  </Link>
                )}
                {blogLink && (
                  <Link href={blogLink} isExternal>
                    Blog <ExternalLinkIcon mx='2px' />
                  </Link>
                )}
              </Stack>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
};

export default TeamMemberList;
