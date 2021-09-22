import { Container, Heading, Text, VStack } from '@chakra-ui/react';

import { FunctionComponent } from 'react';
import { Meta } from '../meta/meta';

/* eslint-disable-next-line */
export interface TermsOfServicePageProps {}

export const TermsOfServicePage: FunctionComponent<TermsOfServicePageProps> = (
  _props
) => {
  return (
    <VStack alignItems="flex-start">
      <Meta title="Terms of Service" />
      <Heading as="h1">Terms of Service</Heading>
      <Container px={0}>
        <VStack alignItems="flex-start">
          <Text>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </Text>
          <Text>
            Suspendisse mauris. Fusce accumsan mollis eros. Pellentesque a diam
            sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem.
            Nullam quis massa sit amet nibh viverra malesuada. Nunc sem lacus,
            accumsan quis, faucibus non, congue vel, arcu. Ut scelerisque
            hendrerit tellus. Integer sagittis. Vivamus a mauris eget arcu
            gravida tristique. Nunc iaculis mi in ante. Vivamus imperdiet nibh
            feugiat est.
          </Text>
          <Text>
            Ut convallis, sem sit amet interdum consectetuer, odio augue aliquam
            leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet
            metus fermentum posuere. Morbi sit amet nulla sed dolor elementum
            imperdiet. Quisque fermentum. Cum sociis natoque penatibus et magnis
            xdis parturient montes, nascetur ridiculus mus. Pellentesque
            adipiscing eros ut libero. Ut condimentum mi vel tellus. Suspendisse
            laoreet. Fusce ut est sed dolor gravida convallis. Morbi vitae ante.
            Vivamus ultrices luctus nunc. Suspendisse et dolor. Etiam dignissim.
            Proin malesuada adipiscing lacus. Donec metus. Curabitur gravida
          </Text>
        </VStack>
      </Container>
    </VStack>
  );
};

export default TermsOfServicePage;
