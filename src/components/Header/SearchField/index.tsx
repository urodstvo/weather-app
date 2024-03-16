import { useClientGeoLocationStore } from '@/store';
import { IconSearch, IconX } from '@tabler/icons-react';
import debounce from 'lodash.debounce';
import { HTMLProps, memo, useId, useRef } from 'react';

import styles from './searchfield.module.css';

export const SearchField = memo((props: HTMLProps<HTMLInputElement>) => {
    const id = useId();
    const { query, setQuery } = useClientGeoLocationStore();
    const debouncedSetValue = debounce(setQuery, 700);
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className={styles.searchField}>
            <label className={styles.searchIcon} htmlFor={id}>
                <IconSearch strokeWidth={1.5} size={28} />
            </label>
            <div className={styles.searchInput}>
                <input
                    {...props}
                    ref={ref}
                    type="text"
                    placeholder="Search any city"
                    id={id}
                    onChange={(e) => debouncedSetValue(e.currentTarget.value)}
                    autoComplete="off"
                />
            </div>
            {query.length > 0 && (
                <button
                    className={styles.clearButton}
                    onClick={() => {
                        setQuery('');
                        ref.current!.value = '';
                    }}
                >
                    <IconX strokeWidth={1.5} size={20} />
                </button>
            )}
        </div>
    );
});
