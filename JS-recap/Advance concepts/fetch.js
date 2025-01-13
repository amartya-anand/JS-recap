fetch("https://dummyjson.com/RESOURCE/?delay=1000")
  .then((res) => res.json())
  .then(console.log);
