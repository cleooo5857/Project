import { keyframes } from 'styled-components';

export const spin = keyframes`
    to{
        transform: rotate(360deg);
    }
`;

export const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
        transform: translateY(-30px);
    }
`;

export const onToggle = keyframes`
    from {
        transform: translateY(-100%);
    }
    
`
export const offToggle = keyframes`
    to {
        transform: translateY(0%);
    }
`