interface Colors {
    accent: Record<
        | 'orange'
        | 'pink',
        string>;
    hover: Record<
        | 'purple',
        string>;
    general: Record<
        | 'black'
        | 'white'
        | 'grey',
        string>;
    primary: Record<
        | 'blue'
        | 'green'
        | 'red'
        | 'yellow'
        | 'teal'
        | 'olive',
        string>;
}

export type { Colors };
