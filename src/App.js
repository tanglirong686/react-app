import { Button } from 'antd-mobile';

function App() {
  return (
    <div className="app">
        <Button type="primary" color='danger'>primary</Button>
        <Button type="primary" inline style={{ marginRight: '4px' }}>inline primary</Button>
    </div>
  );
}

export default App;
