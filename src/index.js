import './fonts';
import './common/index.scss';
import initBlocks from './blocks';
import initPages from './pages';
import $ from 'jquery';

$(() => {
    initBlocks();
    initPages();
  });

const userStack = {
    language: 'JavaScript',
    framework: 'Angular'
}

const user = {
    name: 'Vitaliy',
    age: '34',
    ...userStack
}
$('.block').html('jquery is working');
console.log(user);