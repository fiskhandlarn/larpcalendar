import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

export interface MetaProps {
  title?: string;
}

const PAGE_TITLE = 'Larp Calendar';

export const Meta: FunctionComponent<MetaProps> = ({ title, children }) => {
  return (
    <Helmet>
      <title>{title ? `${title} | ${PAGE_TITLE}` : PAGE_TITLE}</title>
      {children}
    </Helmet>
  );
};

export default Meta;
