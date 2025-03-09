import styles from './Character.module.css';

export default function Character({
    id,
    thumbnail,
    name,
    handleSearchComics
}) {
    return (
        <div
            className={styles.characterCard}
            style={{
                background: `url(${thumbnail.path}.${thumbnail.extension})`,
                backgroundSize: 'cover'
            }}
            onClick={() => handleSearchComics(id)}
        >
            <div className={styles.caption}>{name}</div>
            <div className={styles.captionBottom}>View Comics</div>
        </div>
    );
};