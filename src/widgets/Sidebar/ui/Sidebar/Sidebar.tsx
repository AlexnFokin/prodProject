import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const ontoggle = () => {
    setCollapsed(prev => !prev)
  }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button
        style={{height: '25px'}}
        onClick={ontoggle}>toggle</button>
      <div className={cls.switcher}>
        <ThemeSwitcher/>
        <LangSwitcher/>

      </div>
    </div>
  );
};