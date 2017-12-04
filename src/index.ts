import Component from './component';

declare let window: Window;

window['angular']
    .module('gumga.avatar', [])
    .component('gumgaAvatar', Component);