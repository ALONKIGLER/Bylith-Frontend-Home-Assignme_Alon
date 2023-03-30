import { Fragment } from 'react';
import classes from './Layout.module.css';
import MainNavigation2 from './MainNavigation2';
import { useSelector } from 'react-redux';

const Layout = (props) => {


  // nightMode state:
  const bgClass2 = useSelector((state) => state.nightMode.bgClass2) ; 
  
  return (
    <Fragment>
      <div className={bgClass2}>
      <MainNavigation2 />
      <main className={classes.main}>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
