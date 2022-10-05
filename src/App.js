import AddPostForm from "./components/AddPostForm";
import PostsList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <h1 className="text-7xl font-bold underline">Hello world!</h1>
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
