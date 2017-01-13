import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  react: '15.x',
  'react-dom': '15.x',
  express: '4.x',
  helmet: '3.x',
  'react-helmet': '3.x',
  'react-redux': '5.x',
  winston: '2.x',
}, 'ssrwpo:ssr');

/* eslint-disable import/no-unresolved, import/no-extraneous-dependencies */
const React = require('react');
const { renderToString, renderToStaticMarkup } = require('react-dom/server');
const express = require('express');
const helmet = require('helmet');
const { rewind } = require('react-helmet');
const { Provider } = require('react-redux');
const winston = require('winston');
/* eslint-enable */

export {
  React,
  renderToString,
  renderToStaticMarkup,
  express,
  helmet,
  rewind,
  Provider,
  winston,
};
