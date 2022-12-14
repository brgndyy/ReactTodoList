
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";

import TodoProvider from "./store/TodoProvider";

function App() {

    return (
    <>
    <TodoProvider>
    <Card>
    <TodoContainer/>
    </Card>
    </TodoProvider>
    </>
  );
}

export default App;
