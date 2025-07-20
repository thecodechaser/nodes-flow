import { PipelineToolbar } from './components/toolbar';
import { NodesFlow } from './components/nodesflow';
import { SubmitButton } from './components/submit';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <NodesFlow />
      <SubmitButton />
    </div>
  );
}

export default App;
