

var ans = new Promise((res, rej) => {
  return res("task 1");
});

ans
  .then(function (data) {
    console.log(data);
    return new Promise((res, rej) => {
      return res("task 2");
    });
  })
  .then(function (data) {
    console.log(data);
    return new Promise((res, rej) => {
      return res("task 2");
    });
  })
  .then(function (data) {
    console.log(data);
    return new Promise((res, rej) => {
      return res('task 4');
    });
  }).then(function(data){
    console.log(data)
    return new Promise(function(res,rej){
        return res('task 5 ')
    })
  }).then(function(data){
    console.log(data)
  })
