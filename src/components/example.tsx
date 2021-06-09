import React from 'react';

interface Example {
    id: number;
    name: string;
    desc: string;

}

interface Props {
    example: Example;
}

const Example: React.FC<Props> = ({ example }) => {
    return <></>;
};

export default Example;