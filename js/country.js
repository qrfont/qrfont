
async function getCountryInfo() {
  try {
    const response = await fetch('https://ipapi.

async function getCountryInfo() {
  try {
    const response = await fetch('http

async function getCountryInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    document.getElementById('count

async function getCountryInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    document.getElementById('country-info').innerText = data.country_name;
  } catch (error) {
    document.getElementById('countr

async function getCountryInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    document.getElementById('country-info').innerText = data.country_name;
  } catch (error) {
    document.getElementById('country-info').innerText = 'Unable to determine countr

async function getCountryInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    document.getElementById('country-info').innerText = data.country_name;
  } catch (error) {
    document.getElementById('country-info').innerText = 'Unable

async function getCountryInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    document.getElementById('country-info').innerText = data.country_name;
  } catch (error) {
    document.getElementById('country-info').innerText = 'Unable to determine country';
    console.error('Error fetching country info:

async function getCountryInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    document.getElementById('country-info').innerText = data.country_name;
  } catch (error) {
    document.getElementById('country-info').innerText = 'Unable to determine country';
    console.error('Error fetching countr

async function getCountryInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    document.getElementById('country-info').innerText = data.country_name;
  } catch (error) {
    document.getElementById('country-info').innerText = 'Unable to determine country';
    console.error('Error fetching

async function getCountryInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    document.getElementById('country-info').innerText = data.country_name;
  } catch (error) {
    document.getElementById('country-info').innerText = 'Unable to determine country';
    console.error('Error fe

async function getCountryInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    document.getElementById('country-info').innerText = data.country_name;
  } catch (error) {
    document.getElementById('country-info').innerText = 'Unable to determine country';
    console.error('Er

async function getCountryInfo() {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    document.getElementById('country-info').innerText = data.country_name;
  } catch (error) {
    document.getElementById('country-info').innerText = 'Unable to determine country';
    console.error('Error fetching country info:', error);
  }
}

getCountryInfo();
