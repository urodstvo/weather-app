import { usePopoverStore } from '@/store';
import {
    type HTMLProps,
    type PropsWithChildren,
    type ReactElement,
    cloneElement,
    useCallback,
    useEffect,
    useRef,
} from 'react';

import styles from './popover.module.css';

const Popover = ({ children }: PropsWithChildren) => {
    const { setVisible, visible } = usePopoverStore();
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!visible) return;
        const el = ref.current as HTMLDivElement;

        const handleClick = (e: MouseEvent) => {
            if (!el.contains(e.target as Node)) setVisible(false);
        };

        if (el) {
            document.querySelector('body')!.addEventListener('click', handleClick);
            return () => document.querySelector('body')!.removeEventListener('click', handleClick);
        }
    }, [visible, setVisible]);
    return (
        <div className={styles.popoverContainer} ref={ref}>
            {children}
        </div>
    );
};

const TargetComponentWithProps = (props: HTMLProps<HTMLElement>) =>
    cloneElement(props.children as ReactElement, { onFocus: props.onFocus });

/* eslint-disable */
Popover.Target = ({ children }: PropsWithChildren) => {
    const { setVisible } = usePopoverStore();

    const handleFocus = useCallback(() => setVisible(true), [setVisible]);

    return (
        <div>
            <TargetComponentWithProps onFocus={handleFocus}>{children}</TargetComponentWithProps>
        </div>
    );
};

Popover.Menu = ({ children }: PropsWithChildren) => {
    const { visible } = usePopoverStore();

    return <div className={styles.popoverMenu}>{visible && children}</div>;
};

export { Popover };
