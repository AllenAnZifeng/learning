var sinon = require("sinon");
console.log(123);
const func1 = sinon.stub().returns(5);
const func2 = () => 5;

// console.log(func1());
// console.log(func2());

const switcher = {
    show: () => {
        console.log('show');
    },
    hide: () => {
        console.log('hide');
    }
}
sinon.stub(switcher, 'show');
sinon.stub(switcher, 'hide');
switcher.hide();