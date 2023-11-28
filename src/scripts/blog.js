const data = [
  {
    header: 'Unveiling the Digital Canvas: Exploring Web Design Trends Shaping 2024',
    date: '23 Nov 2023',
    short: 'In the dynamic realm of web design, 2024 introduces trends that redefine digital aesthetics. Multimedia elevates engagement with videos and 3D elements. Dynamic gradients and vibrant color schemes inject vitality. Trends promise a 2024 web design blend of innovation and user-centric aesthetics.',
    long: 'In the dynamic realm of web design, the year 2023 unfolds a tapestry of innovative trends, reshaping the digital landscape and redefining user experiences. As we navigate through this era, several key design elements emerge, each contributing to the evolution of online aesthetics.</p><h5>1. Minimalistic Marvels:</h5><p>The concept of less is more continues to reign supreme. Minimalistic design principles focus on simplicity, emphasizing clean lines, ample white space, and purposeful typography. This approach not only enhances visual appeal but also improves user navigation and overall website performance.</p><h5>2. Dark Mode Dominance:</h5><p>Dark mode, once an alternative, is now a mainstream design feature. Embraced for its aesthetic allure and energy efficiency, dark mode provides users with a visually pleasing and comfortable browsing experience, especially in low-light conditions.</p><h5>3. Multimedia Immersion:</h5><p>Web design transcends static visuals as multimedia takes center stage. The integration of high-quality videos, interactive animations, and 3D elements enhances user engagement and tells a compelling brand story. This immersive approach transforms websites into dynamic, memorable experiences.</p><h5>4. Colorful Vibrancy:</h5><p>Dynamic color schemes and bold gradients inject vibrancy into web interfaces. Designers are exploring adventurous combinations to create visually stimulating websites. The strategic use of colors not only grabs attention but also conveys brand personality and evokes specific emotions.</p><h5>5. Inclusive Accessibility:</h5><p>Accessibility is no longer an afterthought; its a fundamental design principle. Web designers prioritize creating interfaces that cater to users of all abilities. This includes implementing features like alternative text for images, ensuring compatibility with screen readers, and designing with a focus on usability for individuals with diverse needs.</p><p>In conclusion, the web design landscape of 2023 is a kaleidoscope of creativity and functionality. As designers continue to push boundaries and embrace technological advancements, users can anticipate a visually stunning and seamlessly interactive online experience. Whether through the elegance of minimalism or the dynamism of multimedia, the web design trends of 2023 converge to create a harmonious and user-centric online environment.</p>',
    img: '../src/images/blog/1.jpg',
  },
  {
    header: 'Website SEO Optimization: Keys to Success in the Online Realm',
    date: '08 Oct 2023',
    short: 'Explore the essential components of SEO optimization, from strategic keyword deployment to technical fine-tuning and ethical practices. This article provides a comprehensive guide to unlocking your websites potential in the competitive online space, ensuring enhanced visibility and engagement for sustainable success.',
    long: '<p>SEO optimization is the cornerstone of a successful online presence, offering a roadmap to elevate your websites visibility and reach in the vast digital landscape. From strategic keyword deployment and engaging content creation to technical fine-tuning and ethical SEO practices, a comprehensive approach is essential. This article explores the fundamental elements of SEO optimization, providing insights into the strategies that can unlock the full potential of your website in the competitive online environment. </p><p>Search Engine Optimization (SEO) is a dynamic and multifaceted strategy aimed at enhancing a websites visibility on search engines. A strategic emphasis on keyword research ensures that your content aligns with what your audience is searching for, while compelling and regularly updated content contributes to improved search rankings. Technical aspects, such as mobile optimization, user-friendly URLs, and site speed, play a pivotal role in delivering a seamless user experience and positively influencing search engine algorithms. </p><p>Beyond technicalities, the success of SEO optimization lies in ethical practices, continuous adaptation to algorithm changes, and a holistic understanding of your online landscape. By incorporating these key elements, your website can not only rank higher in search engine results but also provide a more engaging and valuable experience for your users. </p>',
    img: '../src/images/blog/2.jpg',
  },
  {
    header: 'Interactive Websites: How They Enhance Your Online Business',
    date: '12 Sep 2023',
    short: 'Discover the transformative power of interactive websites and their pivotal role in enhancing online business success. From engaging multimedia to personalized user experiences, this article explores how interactive features captivate visitors, foster engagement, and contribute to sustained growth in the dynamic and competitive digital landscape.',
    long: '<p>In the digital age, the significance of interactive websites cannot be overstated, as they play a pivotal role in shaping user experiences and driving online business success. Interactive elements, such as engaging multimedia, user feedback mechanisms, and personalized interfaces, transform static websites into dynamic platforms that captivate and retain visitors. This article explores the myriad ways in which interactive features elevate online business, fostering user engagement, enhancing brand perception, and ultimately contributing to sustained growth in the competitive online market. </p><p>Interactive websites go beyond static content, incorporating features that actively involve users in the online experience. Multimedia elements, including videos, interactive animations, and 3D graphics, provide a visually appealing and immersive environment, keeping visitors engaged and encouraging longer stays on the site. Additionally, interactive feedback mechanisms, such as surveys, quizzes, and user comments, not only solicit valuable insights but also create a sense of community and responsiveness. </p><p>Furthermore, the trend towards personalized interfaces and user-centric experiences is reshaping the online landscape. Websites that tailor content and recommendations based on individual preferences not only stand out in a crowded digital space but also build a stronger connection with users. Personalization fosters a sense of relevance, encouraging repeat visits and increasing the likelihood of conversions. </p><p>In conclusion, embracing interactivity in web design is not just a trend; it is a strategic move that can significantly impact the success of your online business. From captivating multimedia to user engagement strategies, the incorporation of interactive elements creates a dynamic and user-friendly online environment that stands out in todays competitive digital market. </p>    ',
    img: '../src/images/blog/3.jpg',
  },

]

function populateData() {
  const articles = document.querySelector(".articles")
  console.dir
  for (let i = 0; i < data.length; i++) {
    const article = articles.children[i]
    const [img, header, date, short, button] = article.children;
    img.src = data[i].img;
    header.innerHTML = data[i].header;
    date.innerHTML = data[i].date;
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
  const [header, date, text] = articleWrapper.children;
  header.innerHTML = data[number].header
  date.innerHTML = data[number].date
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
