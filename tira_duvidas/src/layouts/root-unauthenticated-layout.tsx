import { Flex } from '@chakra-ui/layout';
import { Outlet, useNavigation } from 'react-router-dom';
import LoadingLogo from '../assets/ufms-logo.png';

export function RootUnauthenticatedLayout() {
  const { state } = useNavigation();

  return (
    <Flex
      as='main'
      minWidth="500px"
      minH='100dvh'
      flex={1}
      bg='gray.100'
      position='relative'
      style={{
        containerType: 'inline-size',
      }}
    >
      <Flex w='full' flexDir='row'>
        <Flex w='full' flex={1} py={8} px={8}>
          {state === 'loading' ? (
            <>
              <LoadingLogo />
            </>
          ) : (
            <Outlet />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
