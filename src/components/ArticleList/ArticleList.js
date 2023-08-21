import { Article } from "../Article/Article";

const ARTICLES = [
    {
        postTitle: "[1] Titulo da postagem do blog muito legal",
        description: "[1.1] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus at lectus non placerat. Maecenas id dapibus arcu. In tempor est at risus finibus convallis. Fusce iaculis elit et est vulputate fringilla. Nunc dolor sem, sagittis non sapien sed, rutrum fringilla quam. Nullam ultrices ligula sit amet ex gravida, quis.",
    },
    {
        postTitle: "[2] Titulo da postagem do blog muito legal",
        description: "[2.2] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus at lectus non placerat. Maecenas id dapibus arcu. In tempor est at risus finibus convallis. Fusce iaculis elit et est vulputate fringilla. Nunc dolor sem, sagittis non sapien sed, rutrum fringilla quam. Nullam ultrices ligula sit amet ex gravida, quis.",
    },
    {
        postTitle: "[3] Titulo da postagem do blog muito legal",
        description: "[3.3] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus at lectus non placerat. Maecenas id dapibus arcu. In tempor est at risus finibus convallis. Fusce iaculis elit et est vulputate fringilla. Nunc dolor sem, sagittis non sapien sed, rutrum fringilla quam. Nullam ultrices ligula sit amet ex gravida, quis.",
    }
]

export function ArticleList() {
    return (
        <>
            {ARTICLES.map((item) => <Article postTitle={item.postTitle} description={item.description} />)}
        </>
    )
}
