import { Meteor } from 'meteor/meteor';
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

const sharedPkjs = {
  'is-retina': '1.x',
  lodash: '4.x',
  moment: '2.x',
  react: '15.x',
  'react-dom': '15.x',
  'react-helmet': '4.x',
  'react-intl': '2.x',
  'react-intl-redux': '0.x',
  'react-redux': '5.x',
  'react-router-dom': '4.0.0-beta.6',
  redux: '3.x',
};

if (Meteor.isClient) {
  checkNpmVersions(Object.assign({}, sharedPkjs, {
    logatim: '0.x',
  }), 'ssrwpo:ssr');
}
if (Meteor.isServer) {
  checkNpmVersions(Object.assign({}, sharedPkjs, {
    actual: '0.x',
    express: '4.x',
    helmet: '3.x',
    intl: '1.x',
    receptacle: '1.x',
    'serialize-javascript': '1.x',
    'url-pattern': '1.x',
    useragent: '2.1.x',
    winston: '2.x',
  }), 'ssrwpo:ssr');
}