import type { Colors } from './types';

const colors: Colors = {
    accent: {
        orange: '#FE9A76;',
        pink: '#FF1493'
    },
    hover: {
        purple: '#B413EC;'
    },
    general: {
        black: '#000000',
        white: '#FFFFFF',
        grey: '#D0D0D0'
    },
    primary: {
        blue: '#0E6EB8',
        green: '#016936',
        red: ' #B03060;',
        yellow: '#FFD700',
        teal: '#008080',
        olive: '#32CD32'
    }
};

const theme = {
    colors,
    typography: {
        fontSize: 16,
        // https://www.figma.com/file/ac1K945HFTioYu1b65VZuh/Design-System?node-id=847%3A0
        body1: {
            fontSize: '1rem',
        },
        h1: {
            fontSize: '2.125rem', // 34px
        },
        h2: {
            fontSize: '1.75rem', // 28px
        },
        h3: {
            fontSize: '1.375rem', // 22px
        },
        h4: {
            fontSize: '1.25rem', // 20px
        },
        caption: {
            fontSize: '0.6875rem', // 11px
        },
    }
}

export { theme };
