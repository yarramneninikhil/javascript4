// const item = document.getElementsByClassName("list-group-item");
// for (let i = 0; i < item.length; i++) {
//   if (i == 1) {
//     item[i].style.backgroundColor = "green";
//   }
//   if (i == 2) {
//     item[i].style.display = "none";
//   }
// }

const items = document.querySelectorAll(".list-group-item");
let count = 1;
items.forEach((item) => {
  if (count == 2) {
    item.style.color = "green";
  } else if (count % 2 != 0) {
    item.style.backgroundColor = "green";
  }
  count++;
});
