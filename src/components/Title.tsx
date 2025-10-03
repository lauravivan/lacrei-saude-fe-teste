import styled, { css } from "styled-components";

type TitleType = {
  number: 1 | 2 | 3 | 4 | 5;
  children: string;
};

const sharedStyles = css`
  color: var(--emerald-60);
  margin: 0;
`;

const Title1 = styled.h1`
  ${sharedStyles}
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
`;

const Title2 = styled.h2`
  ${sharedStyles}
  font-size: 40px;
  font-weight: 700;
  line-height: 120%;
`;

const Title3 = styled.h3`
  ${sharedStyles}
  font-size: 32px;
  font-weight: 700;
  line-height: 120%;
`;

const Title4 = styled.h4`
  ${sharedStyles}
  font-size: 24px;
  font-weight: 400;
  line-height: 150%;
`;

const Title5 = styled.h5`
  ${sharedStyles}
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
`;

export default function Title({ number, children }: TitleType) {
  const h1 = number === 1 && <Title1>{children}</Title1>;
  const h2 = number === 2 && <Title2>{children}</Title2>;
  const h3 = number === 3 && <Title3>{children}</Title3>;
  const h4 = number === 4 && <Title4>{children}</Title4>;
  const h5 = number === 5 && <Title5>{children}</Title5>;

  return h1 || h2 || h3 || h4 || h5;
}
