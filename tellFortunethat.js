var person = {
    nameofpartner: 'Alex',
    numberofchildren: 5,
    location: 'Dubai',
    job: 'coder',
    fortune1: function () {
        alert('You will be a ' + this.job + ' in ' + this.location + ',' + ' and married to ' + this.nameofpartner + ' with ' + this.numberofchildren + ' children.');
    }
};

person.fortune1();

var person2 = {
    nameofpartner: 'Z',
    numberofchildren: 2,
    location: 'Ecuador',
    job: 'Traveller',
    fortune2: function () {
        alert('You will be a ' + this.job + ' in ' + this.location + ',' + ' and married to ' + this.nameofpartner + ' with ' + this.numberofchildren + ' children.');
    }
};

person2.fortune2();

var person3 = {
    nameofpartner: 'Lee',
    numberofchildren: 10,
    location: 'China',
    job: 'Author',
    fortune3: function () {
        alert('You will be a ' + this.job + ' in ' + this.location + ',' + ' and married to ' + this.nameofpartner + ' with ' + this.numberofchildren + ' children.');
    }
};

person3.fortune3();