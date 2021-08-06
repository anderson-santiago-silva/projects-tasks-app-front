import { Switch, Route } from 'react-router'; // Receita de bolo. Faz parte da configuração do React Router

import Login from './pages/Login';
import ProjectsList from './pages/ProjectsList';
import ProjectDetail from './pages/ProjectDetail';

const App = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/projects" component={ProjectsList} />
      <Route exact path="/projects/:id" component={ProjectDetail} />
    </Switch>
  );
}

export default App;
