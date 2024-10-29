import { Flex, Heading, Text } from '@chakra-ui/layout';
import { useMediaQuery, Avatar, Button } from '@chakra-ui/react';
import { Plus, User } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import {
  Link,
  useNavigate,
  useNavigation,
  useRouteError,
} from 'react-router-dom';
import LoadingLogo from '../../assets/ufms-logo.png';

export function DefaultErrorElement() {
  const { state } = useNavigation();
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const error = useRouteError() as { message: string };

  const navigate = useNavigate();

  return (
    <Flex
      as='main'
      minH='100dvh'
      flex={1}
      bg='gray.100'
      position='relative'
      flexDir={isLargerThan800 ? 'row' : 'column'}
    >
      <Flex w='full' flexDir='column'>
        {isLargerThan800 ? (
          <Flex
            as='nav'
            w='full'
            px={16}
            py={3}
            gap={6}
            bg='blackAlpha.900'
            justifyContent='flex-end'
            alignItems='center'
            shadow='md'
          >
            <Flex
              as={motion.div}
              bg='whiteAlpha.400'
              borderRadius={4}
              p={2}
              lineHeight={1}
              textAlign='center'
              fontSize='xl'
              color='whiteAlpha.900'
              gap={2}
            >
              <Button
                as={Link}
                to='/settings/balance'
                bg='green.600'
                w='max-content'
                color='whiteAlpha.900'
                _hover={{
                  bg: 'green.700',
                }}
                px={2}
                size='md'
                gap={2}
              >
                <Plus weight='bold' size={16} />
              </Button>
              <Avatar
                border='1px'
                borderColor='whiteAlpha.900'
                name={' '}
                icon={<User size={24} />}
                onClick={() => navigate('/settings/perfil')}
                cursor='pointer'
                _hover={{
                  borderWidth: '2px',
                }}
              />
            </Flex>
          </Flex>
        ) : null}
        <Flex w='full' flex={1} py={16} px={8} flexDir='column' gap={8}>
          {state === 'loading' ? (
            <>
              <LoadingLogo />
            </>
          ) : (
            <>
              <Heading>Ops, ocorreu um erro 😯</Heading>

              <Text fontSize='xl'>
                Erro: {JSON.stringify(error.message)}
              </Text>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
