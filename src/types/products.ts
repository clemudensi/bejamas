type recommendationsType = {
    src: string;
    alt: string;
}

interface Products {
    id: string;
    name: string;
    category: string;
    price: number;
    currency: string;
    image: {
        src: string;
        alt: string;
    },
    bestseller: boolean;
    featured: boolean;
    details: {
        dimensions: {
            width: number;
            height: number;
        },
        size: number;
        description: string;
        recommendations: recommendationsType [];
    }
}

export type { Products };
