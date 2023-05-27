// var v1 = 'v1';

// // ~ 10,000개 코드가 있다고 가정 ~

// v1 = 'egoing';
// var v2 = 'v2';

// 아래처럼 객체화 하는것이 좋음
var o = {
    v1 : 'v1',
    v2 : 'v2',
    f1 : function() {
        console.log(this.v1);
    },
    f2 : function() {
        console.log(this.v1);
    }
}



o.f1();
o.f2();
