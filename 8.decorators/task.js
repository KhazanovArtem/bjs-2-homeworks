//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    const maxCacheValuesCount = 5;
    return (...args) => {
        const hash = md5(args);
        let inCache = cache.find((item) => item.hash == hash);
        
        if (inCache) {
            console.log("Из кеша: " + inCache.value);
            return "Из кеша: " + inCache.value;
        }

        let result = func(...args);
        cache.push({hash, value: result});

        if (cache.length >maxCacheValuesCount) {
            cache.shift();
        }

        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    wrapper.count = 0;
    wrapper.allCount = 0;
  
    function wrapper(...args) {
        wrapper.allCount++;
        if (timeoutId == null) {
            func(...args);
            wrapper.count++;
        }

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            wrapper.count++;
            func(...args)
        },delay);
    }
  
    return wrapper;
}
