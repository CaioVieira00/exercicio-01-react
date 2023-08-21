import './App.css';
import { ArticleList } from './components/ArticleList/ArticleList';
import { BlogMenu } from './components/BlogMenu/BlogMenu';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <BlogMenu />

      <ArticleList />
    </>
  );
}

export default App;
