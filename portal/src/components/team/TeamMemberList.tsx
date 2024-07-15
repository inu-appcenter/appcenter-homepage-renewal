import useGetGroupsPublicAllQuery from '@api/query/useGetGroupsPublicAllQuery.ts';
import { useLocation, useParams } from 'react-router-dom';
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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { part } = useParams<TeamParam>();
  const { data } = useGetGroupsPublicAllQuery({
    part: part,
    year: Number(queryParams.get('year')) ?? undefined,
  });

  return (
    <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'>
      {data.map(
        ({
          group_id,
          member,
          profileImage,
          year,
          role,
          part,
          gitRepositoryLink,
          blogLink,
        }) => (
          <Card
            key={group_id}
            padding={4}
            rowGap={4}
            border='none'
            variant='outline'
            className='w-fit'
          >
            <CardBody padding={0}>
              <Image
                src={profileImage || LogoSmall}
                alt={`${member}의 프로필 사진`}
                aspectRatio={1}
                width={150}
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
