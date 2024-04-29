//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    const maxCacheValuesCount = 5;
    
    return (...args) => {
        const hash = md5(args);
        let objectInCache = cache.find((object) => object.hash === hash);
    
        if (objectInCache) {
            console.log("Из кеша: " + objectInCache.value);
            return "Из кеша: " + objectInCache.value;
        }
        let result = func(...args);
        cache.push({hash: hash, value: result});
    
        if (cache.length > maxCacheValuesCount) {
            cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
}

const hasingText = "какой-нибудь текст";
console.log(md5(hasingText)); // 8d1d3ecc455a4220590e6d27e6c1a267
console.log(md5([10, 20, 30])); // 7f49b84d0bbc38e96493718013baace6

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
  
    function arc(...args) {
      clearTimeout(timeoutId);
      func.apply(this, [...args]);
      wrapper.count++;
    }
  
    function wrapper(...args) {
      if(!timeoutId) {
        arc(args);
      }
      timeoutId = setTimeout(() => arc(args), delay);
      wrapper.allCount++;
    }
  
    return wrapper;
}
