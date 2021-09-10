import { VFC } from 'react';
import { Checkbox } from 'semantic-ui-react'

interface ICheckboxInput {
    filter: string;
    handleSelectFilter: (arg: string) => void;
    label: string;
    activeFilter?: string[];
};

const CheckboxInput: VFC<ICheckboxInput> = ({
    activeFilter,
    filter,
    handleSelectFilter,
    label
}) => (
    <Checkbox
        label={label}
        onClick={() => handleSelectFilter(filter)}
        checked={activeFilter && activeFilter.includes(filter)}
    />
);

export { CheckboxInput };
