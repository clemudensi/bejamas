import { RouteComponentProps } from 'react-router-dom';

interface RouterProps {
    history: RouteComponentProps["history"];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
};

export type { RouterProps };
