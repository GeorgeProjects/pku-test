/**
 * Created by yangtaofeng on 2017/1/13.
 */
function Test(name) {
  this.name = name
  return this
}

Test.prototype.say = function (words) {
   console.log(`${[this.name]}:"${words}"`)
  return this
}

// test

var t = new Test('huangxin')

t.say('hi everyone!')