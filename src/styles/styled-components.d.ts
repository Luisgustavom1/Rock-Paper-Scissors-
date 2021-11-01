import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        background: string,
        lizardGradient: string,
        cyan: string,
        headerOutline: string,
        actions: {
            ScissorsGradient: string,
            PaperGradient: string,
            RockGradient: string,
        },
        text: {
            darkText: string,
            scoreText: string,
        },
    }
};