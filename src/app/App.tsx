import React from 'react';
import './styles/index.scss';

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProviders";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Sidebar} from "widgets/Sidebar";


const App = () => {

  const {theme} = useTheme()
  return (
    <div className={classNames('app', {}, [theme])}>
{/*<ThemeSwitcher/>*/}
     <Navbar/>
      <div className="content-page">
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  );
};

export default App;