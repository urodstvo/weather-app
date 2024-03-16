import { IconLoader2 } from '@tabler/icons-react';

export const Loader = () => {
    return (
        <span className="animate-spin">
            <IconLoader2 strokeWidth={1.5} size={24} />
        </span>
    );
};
