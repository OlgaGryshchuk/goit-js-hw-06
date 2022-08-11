const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function gallery() {
  const galleryList = document.querySelector(".gallery");

  const galleryItem = images
    .map(
      (item) =>
        `<li> <img class ="img" src ="${item.url}" alt = "${item.alt}"/></li>`
    )
    .join(" ");

  galleryList.insertAdjacentHTML("afterbegin", galleryItem);
  console.log(galleryList);

  galleryList.style.display = "flex";
  galleryList.style.padding = "0";
  galleryList.style.justifyContent = "center";
  galleryList.style.listStyle = "none";
  

  const imgCollection = document.querySelectorAll("img");
  imgCollection.forEach(
    (image) => (image.style.height = "100%") && (image.style.width = "100%")
  );

  const imgItem = document.querySelectorAll("li");
  imgItem.forEach((image) => (image.style.margin = "15px"));
}

gallery();