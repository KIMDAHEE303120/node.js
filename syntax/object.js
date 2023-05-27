// 배열
var members = ['kkk', 'ddd', 'hhh'];
console.log(members[1]);

var i = 0;
while(i<members.length) {
    console.log('array loop', members[i]);
    i += 1;
}

// 객체
var roles = {
    'programmer' : 'kkk',
    'designer' : 'ddd',
    'manager' : 'hhh'
} 

console.log(roles.designer);

for(var name in roles) {
    console.log('object => ', name, '/ value => ', roles[name]);
}
