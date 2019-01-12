import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';

import EmployeeCreate from './components/EmployeeCreate';
import EmployeeList from './components/EmployeeList';
import EmployeeEdit from './components/EmployeeEdit';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
