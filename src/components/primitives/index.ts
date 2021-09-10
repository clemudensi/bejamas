import styled from 'styled-components';

const Title = styled.h3`
    color: ${({ theme }) => theme.colors.primary.black};
    font-weight: 600;
    margin-bottom: 1rem;
    line-height: 1.3;
    font-size: ${({ theme }) => theme.typography.h3};
`;

const Subtitle = styled.h5`
    color: ${({ theme }) => theme.colors.primary.grey};
    line-height: 1.15;
`;

const TextContainer = styled.div`
    font-size: ${({ theme }) => theme.typography.caption};
`;

export { Subtitle, TextContainer, Title };
