function encapsulationDriver(scriptToLoad){
    fetch(scriptToLoad).then()
}

const $w = {
   hello: () =>{
     console.log(window);
     console.log(document);
     console.log(this);
   },
  bindToX: function(func){
     func();
  }
};

const wrapper = {
  prefix : '(function(window, document, $w){',
  suffix :'}).call({}, {}, {}, $w)'
};

(function (window, document, $w) {
  console.log(window);
  console.log(document);
  console.log(this);
  $w.bindToX(()=>alert("hello"))
}).call({}, {}, {}, $w);