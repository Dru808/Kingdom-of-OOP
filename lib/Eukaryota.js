'use strict';

var LivingThing = require('./LivingThing.js');

module.exports = class Eukaryota extends LivingThing  {
  constructor(name, uniCellular, asexual, mobile, heterotroph)  {
    super(name, uniCellular, true, false, asexual, mobile);
    this._name = name;
    this._uniCellular = uniCellular;
    this._asexual = asexual;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
  }

  get heterotroph() {
    return this._heterotroph;
  }

  set heterotroph(heterotroph)  {
    this._heterotroph = heterotroph;
  }

  get autotroph() {
    return !this.heterotroph;
  }

  set autotroph(autotroph)  {
    this.heterotroph = !autotroph;
  }
};

