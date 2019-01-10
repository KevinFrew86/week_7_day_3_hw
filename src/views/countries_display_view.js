const PubSub = require('../helpers/pub_sub.js');

const CountriesView = function(){

};

CountriesView.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:country-selected', (event) => {
    const countryData = event[index].detail;
    this.render(countryData);
  });
}

CountriesView.prototype.render = function (countryData){
  const container = document.querySelector('#country');
  container.innerHTML = '';

  const header = this.addElement('h2', countryData[index].name);


};

CountriesView.prototype.addElement = function(type, text){
  const element == document.createElement(type);
  element.textContent = text;
  return element;
}


module.exports = CountriesView;
