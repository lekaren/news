import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import TabScreen from './Components/TabScreen';
import Register from './pages/Register';

function Routes () {
  return (
    <Router>
			{/* 기본 네비게이션바가 나오는데 이를 숨기기 위해 hideNavBar 옵션을 준다. */}
      <Stack key="root" hideNavBar>
        <Scene key="login" component={Login} title="Login" initial={true} initial/>
        <Scene key="newsList" component={TabScreen} title="News" />
        <Scene key="register" component={Register} title="Register"  />
      </Stack>
    </Router>
  );
};

export default Routes;