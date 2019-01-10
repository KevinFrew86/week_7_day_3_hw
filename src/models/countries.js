const PubSub = require('../helpers/pub_sub.js');

const Countries = function(){
  this.countries = [];
}

Countries.prototype.bindEvents = function(){

}

Countries.prototype.getData = function(){
  // Make request to API and publish data from in here.

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    if (xhr.status !== 200){
      return;
    }
    console.log(xhr.responseText);

    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);
    this.countries = data;
    console.log(data);
    PubSub.publish('Countries:countries-loaded', this.countries);
  });

  xhr.open('GET', 'https://restcountries.eu/rest/v2/');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send();
  console.log('response text', xhr.responseText);

}

module.exports = Countries;
