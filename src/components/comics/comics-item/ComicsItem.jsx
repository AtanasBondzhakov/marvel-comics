import styles from './ComicsItem.module.css';

export default function ComicsItem({
    thumbnail,
    title
}) {
    return (
        <div
            className={styles.comicBookCard}
            style={{
                background: `url(${thumbnail.path}.${thumbnail.extension})`,
                backgroundSize: 'cover'
            }}
        >
            <div className={styles.caption}>{title}</div>
            <div className={styles.captionBottom}>Comics Details</div>
        </div>
    );
};