import './404';
import initHome from './home';
import initPolicy from './policy';


export default () => {
  console.log('init pages');
  initHome();
  initPolicy();
};
