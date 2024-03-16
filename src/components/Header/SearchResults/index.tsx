import { useLocationByNameQuery } from '@/api';
import { Loader } from '@/components/Loader';
import { useClientSettingsStore } from '@/store';

import { RecentSearchesItem } from './RecentSearchesItem';
import { SearchResultItem } from './SearchResultItem';
import styles from './searchresults.module.css';

export const SearchResults = () => {
    const { data, isFetching, isSuccess } = useLocationByNameQuery();
    const { recentSearches } = useClientSettingsStore();
    return (
        <div className={styles.container}>
            {recentSearches.length > 0 && (
                <div className={styles.listContainer}>
                    <h3>— Recent searches</h3>
                    <div className={styles.list}>
                        {recentSearches.map((item, ind) => (
                            <RecentSearchesItem className={styles.item} key={ind} coords={item.coords}>
                                {item.name}
                            </RecentSearchesItem>
                        ))}
                    </div>
                </div>
            )}

            {isSuccess && (
                <div className={styles.listContainer}>
                    <h3>— Search results</h3>
                    <div className={styles.list}>
                        {data?.map((item, ind) => <SearchResultItem className={styles.item} key={ind} {...item} />)}
                    </div>
                </div>
            )}
            {isFetching && <Loader />}
        </div>
    );
};
