import styles from './ComicsItem.module.css';

export default function ComicsItem({
    id,
    thumbnail,
    title,
    handleSearchComicBook
}) {
    return (
        <div
            className={styles.comicBookCard}
            style={{
                background: `url(${thumbnail.path}.${thumbnail.extension})`,
                backgroundSize: 'cover'
            }}
            onClick={() => handleSearchComicBook(id)}
        >
            <div className={styles.caption}>{title}</div>
            <div className={styles.captionBottom}>Comics Details</div>
        </div>
    );
};