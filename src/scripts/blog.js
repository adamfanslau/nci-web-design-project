const data = [
  {
    header: 'Lorem Ipsum1',
    short: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit nihil quaerat enim ad et cupiditate eius? Unde dolorem eos culpa commodi praesentium incidunt beatae, eius in corrupti, natus quo.',
    long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit nihil quaerat enim ad et cupiditate eius? Unde dolorem eos culpa commodi praesentium incidunt beatae, eius in corrupti, natus quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae sed laborum labore, exercitationem ea dolor dignissimos dolorum aspernatur assumenda! Sapiente soluta fugit tenetur iure earum nobis neque cupiditate quidem?    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores earum fugit delectus sequi. Quod modi maiores facilis consectetur aliquid, laboriosam temporibus porro enim deleniti placeat quisquam nihil, cum fuga.',
    img: '../src/images/blog/1.jpg',
  },
  {
    header: 'Lorem Ipsum2',
    short: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit nihil quaerat enim ad et cupiditate eius? Unde dolorem eos culpa commodi praesentium incidunt beatae, eius in corrupti, natus quo.',
    long: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit nihil quaerat enim ad et cupiditate eius? Unde dolorem eos culpa commodi praesentium incidunt beatae, eius in corrupti, natus quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi recusandae sed laborum labore, exercitationem ea dolor dignissimos dolorum aspernatur assumenda! Sapiente soluta fugit tenetur iure earum nobis neque cupiditate quidem?    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores earum fugit delectus sequi. Quod modi maiores facilis consectetur aliquid, laboriosam temporibus porro enim deleniti placeat quisquam nihil, cum fuga.',
    img: '../src/images/blog/2.jpg',
  },
  {
    header: 'Lorem Ipsum3',
    short: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit nihil quaerat enim ad et cupiditate eius? Unde dolorem eos culpa commodi praesentium incidunt beatae, eius in corrupti, natus quo.',
    long: 'ASDASD iboriosam temporibus porro enim deleniti placeat quisquam nihil, cum fuga.',
    img: '../src/images/blog/3.jpg',
  },

]

function populateData() {
  const articles = document.querySelector(".articles")
  console.dir
  for (let i = 0; i < data.length; i++) {
    const article = articles.children[i]
    const [img, header, short, button] = article.children;
    img.src = data[i].img;
    header.innerHTML = data[i].header;
    short.innerHTML = data[i].short;
    button.dataset.number = i;
  }
};
populateData();


const articleFull = document.querySelector(".articleFull")
const articleClose = document.querySelector(".articleClose")

const articleImageBig = document.querySelector(".articleImageBig")
const articleWrapper = document.querySelector(".articleWrapper")

function handleMoreClick(e) {
  const number = e.target.dataset.number
  articleImageBig.style.backgroundImage = `url(${data[number].img})`
  const [header, text] = articleWrapper.children;
  header.innerHTML = data[number].header
  text.innerHTML = data[number].long

  articleFull.style.visibility = "visible"
}

const articleMoreBtns = document.querySelectorAll(".articleMore")
for (let i = 0; i < articleMoreBtns.length; i++) {
  articleMoreBtns[i].addEventListener("click", handleMoreClick)
}

function handleArticleClose() {
  articleFull.style.visibility = "hidden"
}
articleClose.addEventListener("click", handleArticleClose)
