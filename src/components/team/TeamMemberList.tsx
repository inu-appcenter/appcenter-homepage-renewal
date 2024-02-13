import useGetGroupsPublicAllQuery from '@api/query/useGetGroupsPublicAllQuery.ts';
import { useParams } from 'react-router-dom';
import { TeamParam } from '@type/common.ts';
import { Card, CardBody, CardFooter, Heading, Image, Link, Stack, Text } from '@chakra-ui/react';
import LogoSmall from '@assets/svg/navbar_logo_small.svg';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const TeamMemberList = () => {
  const { part } = useParams<TeamParam>();
  const { data } = useGetGroupsPublicAllQuery({ part: part });

  return <div className='flex flex-wrap gap-3 justify-center'>
    {
      data.map(({ member, profileImage, year, role, part, gitRepositoryLink,blogLink }) => <Card maxW='sm'>
        <CardBody>
          <Image
            src={profileImage ?? LogoSmall}
            alt={`${member}의 프로필 사진`}
            width={200}
            height={200}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{member}</Heading>
            <Text>
              {`${year}기 ${part} ${role}`}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Stack direction="row" spacing="4">
            {
              gitRepositoryLink && <Link href={gitRepositoryLink} isExternal>
                Github <ExternalLinkIcon mx='2px' />
              </Link>
            }
            {
              blogLink && <Link href={blogLink} isExternal>
                Blog <ExternalLinkIcon mx='2px' />
              </Link>
            }
          </Stack>
        </CardFooter>
      </Card>)
    }
  </div>;
};

export default TeamMemberList;
