import { GeoLocationButton } from './GeoLocationButton';
import { Popover } from './Popover';
import { SearchField } from './SearchField';
import { SearchResults } from './SearchResults';
import styles from './header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <GeoLocationButton />
                <Popover>
                    <Popover.Target>
                        <SearchField />
                    </Popover.Target>
                    <Popover.Menu>
                        <SearchResults />
                    </Popover.Menu>
                </Popover>
            </div>
        </header>
    );
};
