import styles from './Character.module.css';

export default function Character({
    thumbnail,
    name
}) {
    return (
        <div
            className={styles.characterCard}
            style={{
                background: `url(${thumbnail.path}.${thumbnail.extension})`,
                backgroundSize: 'cover'
            }}
        >
            <div className={styles.caption}>{name}</div>
            <div className={styles.captionBottom}>View Comics</div>
        </div>
    );
};