const test = document.querySelectorAll('.test');
let counter = 0;
test.forEach((item) => {
  item.addEventListener('click', () => {
    if (counter % 2 == 0) {
      if (!item.hasChildNodes()){
        const img = document.createElement('img');
        img.src = "./Assets/O.png";
        item.appendChild(img);
        counter++;
        console.log(counter);
      }
    } else if (counter % 2 == 1) {
      if (!item.hasChildNodes()){
        const img = document.createElement('img');
        img.src = "./Assets/X.png";
        item.appendChild(img);
        counter++;
        console.log(counter);
      }
    }
  });
});