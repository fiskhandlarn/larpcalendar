import {
  Box,
  ButtonGroup,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';

import { FaFacebook } from 'react-icons/fa';
import { FunctionComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer: FunctionComponent<FooterProps> = (_props) => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: '4', md: '8' }}
    >
      <Stack spacing="10" divider={<StackDivider />}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '10', lg: '28' }}
        >
          <Box flex="1">
            <Text fontSize="lg" fontWeight="semibold">
              Larp Calendar
            </Text>
          </Box>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '10', md: '20' }}
          >
            <SimpleGrid
              columns={2}
              spacing={{ base: '10', md: '20', lg: '28' }}
              flex="1"
            >
              <Box minW="130px">
                <Stack>
                  <Link as={RouterLink} to="/about">
                    About
                  </Link>
                </Stack>
              </Box>
              <Box minW="130px">
                <Stack>
                  <Link as={RouterLink} to="/privacy-policy">
                    Privacy Policy
                  </Link>
                  <Link as={RouterLink} to="/terms-of-service">
                    Terms of Service
                  </Link>
                </Stack>
              </Box>
            </SimpleGrid>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'row' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="sm">
            &copy; {new Date().getFullYear()} <Link>Nordic Larp</Link>. All
            rights reserved.
          </Text>
          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton
              as="a"
              href="https://www.facebook.com/larpcalendar"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="20px" />}
            />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
