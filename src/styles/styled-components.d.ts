import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        background: string,
        lizardGradient: string,
        cyan: string,
        headerOutline: string,
        actions: {
            scissorsGradient: string,
            paperGradient: string,
            rockGradient: string,
        },
        text: {
            darkText: string,
            scoreText: string,
        },
    }
};