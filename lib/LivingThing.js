'use strict';

module.exports = class LivingThing {
  constructor ( name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if ( typeof name !== 'string')  {
      throw new TypeError('name must be spelt using alphabets! What a bish...');
    }
    this._name = name;
  }

  get uniCellular() {
    return this._uniCellular;
  }

  set uniCellular(uniCellular) {
    if (typeof uniCellular !== 'boolean') {
      throw new TypeError('name must be spelt using alphabets!');
    }
    this._uniCellular = uniCellular;
  }

  get multiCellular() {
    return !this._uniCellular;
  }

  set multiCellular(multiCellular) {
    this._uniCellular = !multiCellular;
  }

  get eukaryote() {
    return this._trueNucleus;
  }

  set eukaryote(eukaryote)  {
    this._trueNucleus = eukaryote;
  }

  get prokaryote()  {
    return !this.trueNucleus;
  }

  set prokaryote(prokaryote)  {
    this._trueNucleus = !prokaryote;
  }

  get trueNucleus() {
    return this._trueNucleus;
  }

  set trueNucleus(trueNucleus) {
    if (typeof trueNucleus !== 'boolean')  {
      throw new TypeError('name must be spelt using alphabets! What a bish...');
    }
    this._trueNucleus = trueNucleus;
  }

  get anaerobic() {
    return this._anaerobic;
  }

  set anaerobic(anaerobic) {
    if (typeof anaerobic !== 'boolean')  {
      throw new TypeError('name must be spelt using alphabets! What a bish...');
    }
    this._anaerobic = anaerobic;
  }

  get aerobic() {
    return !this._anaerobic;
  }

  set aerobic(aerobic)  {
    this._anaerobic = !aerobic;
  }

  get asexual() {
    return this._asexual;
  }

  set asexual(asexual) {
    if (typeof asexual !== 'boolean')  {
      throw new TypeError('name must be spelt using alphabets! What a bish...');
    }
    this._asexual = asexual;
  }

  get sexual()  {
    return !this._asexual;
  }

  set sexual(sexual)  {
    this._asexual = !sexual;
  }

  get mobile() {
    return this._mobile;
  }

  set mobile(mobile) {
    if (typeof mobile !== 'boolean')  {
      throw new TypeError('name must be spelt using alphabets! What a bish...');
    }
    this._mobile = mobile;
  }

  get immobile()  {
    return !this._mobile;
  }

  set immobile(immobile)  {
    this._mobile = !immobile;
  }
};
