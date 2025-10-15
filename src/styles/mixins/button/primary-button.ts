import { css } from 'styled-components';
import typography from '@/styles/tokens/typography';

const button = {
   'Headline-xl': css`
    font-size: 48px;
    font-weight: ${typography.bold};
    line-height: 120%;
  `,
  'Headline-lg': css`
    font-size: 40px;
    font-weight: ${typography.bold};
    line-height: 120%;
  `,
  'Headline-base': css`
    font-size: 32px;
    font-weight: ${typography.bold};
    line-height: 120%;
  `,
  'Headline-sm': css`
    font-size: 24px;
    font-weight: ${typography.regular};
    line-height: 150%;
  `,
  'Headline-sm-high200': css`
    font-size: 24px;
    font-weight: ${typography.bold};
    line-height: 150%;
  `,
};

export default headline;