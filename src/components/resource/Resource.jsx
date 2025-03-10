import styles from './Resource.module.css';

export default function Resource({
    id,
    thumbnail,
    name,
    onClick
}) {
    return (
        <div
            className={styles.resourceCard}
            style={{
                background: `url(${thumbnail.path}.${thumbnail.extension})`,
                backgroundSize: 'cover'
            }}
            onClick={() => onClick(id)}
        >
            <div className={styles.caption}>{name}</div>
            <div className={styles.captionBottom}>View Comics</div>
        </div>
    );
};
