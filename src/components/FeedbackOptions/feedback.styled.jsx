import styled from '@emotion/styled';

export const OptionsThumb = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 16px;
   
`;

export const Button = styled.button`
    padding: 4px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: #f3d37a;
    }
`;