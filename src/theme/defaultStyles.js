import { css } from "styled-components"

// Generic CSS for Flexbox
const Flex = css`
    display: flex;
    align-content: center;
    justify-content: center;
`;

// Flexbox with flexflow = ROW
export const FlexRow = css`
    ${Flex}
    flex-flow: row wrap;
`;

// Flexbox with flexflow = Column
export const FlexColumn = css`
    ${Flex}
    flex-flow: column wrap;
`;