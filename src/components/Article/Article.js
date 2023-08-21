import styles from "./Article.module.css";

export function Article({
    postTitle,
    description
}) {
    return (
        <article className={styles.container}>
            <img src="http://placehold.it/150x150" alt="" />
            <div className={styles.articleInfo}>
                <h2>{postTitle}</h2>
                <p>{description}</p>
            </div>
        </article>
    )
}
