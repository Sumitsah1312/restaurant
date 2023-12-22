import  menuImage1 from "./assets/images/menu-1.png";
import menuImage2 from "./assets/images/menu-2.png";
import menuImage3 from "./assets/images/menu-3.png";
import menuImage4 from "./assets/images/menu-4.png";
import menuImage5 from "./assets/images/menu-5.png";
import menuImage6 from "./assets/images/menu-6.png";
import cartImage1 from "./assets/images/cart-item-1.png";
import cartImage2 from "./assets/images/cart-item-2.png";
import cartImage3 from "./assets/images/cart-item-3.png";
import cartImage4 from "./assets/images/cart-item-4.png";
import productImage1 from "./assets/images/product-1.png";
import productImage2 from "./assets/images/product-3.png";
import productImage3 from "./assets/images/product-3.png";
import reviewImage1 from "./assets/images/pic-1.png";
import reviewImage2 from "./assets/images/pic-1.png";
import reviewImage3 from "./assets/images/pic-1.png";
import blogImage1 from "./assets/images/blog-1.jpeg";
import blogImage2 from "./assets/images/blog-2.jpeg";
import blogImage3 from "./assets/images/blog-3.jpeg";






const menu = [
  {
    img: menuImage1,
    name: "Burgir",
    cost: 70
  },
  {
    img: menuImage2,
    name: "Rabi Meal",
    cost: 120
  },
  {
    img: menuImage3,
    name: "Chicken Nuggets",
    cost: 130
  },
  {
    img: menuImage4,
    name:" Pizza",
    cost: 270
  },
  {
    img: menuImage5,
    name: "Orange Juice",
    cost: 50
  },
  {
    img: menuImage6,
    name: "Tea",
    cost: 100
  },
];

const cart = [
  {
    img: cartImage1,
    price:"32.12",
  },
  {
    img: cartImage2,
    price:"16.54",
  },
  {
    img: cartImage3,
    price:"24.62",
  },
  {
    img: cartImage4,
    price:"31.66",
  },
];

const product = [
  {
    img: productImage1,
    name:" Burgers",
    cost: 180
  },
  {
    img: productImage2,
    name:" Choco Taat Taco",
    cost: 300
  },
  {
    img: productImage3,
    name:"Vegan Choco Tat",
    cost: 260
  },
];
const review = [
  {
    img: reviewImage1,
    name:"Aditya Geek",
    txt:"This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it."
  },
  {
    img: reviewImage2,
    name:"Rohanpreet",
    txt:"Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it is worth checking them out before you book. Highly recommended.  "
  },
  {
    img: reviewImage3,
    name:"Saksham Khuswaha",
    txt:"This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again."
  },
];
const blog = [
  {
    img: blogImage1,
    title:"Heart of Fries",
    feed: "French fries can provide healthy fats like monounsaturated and polyunsaturated fats. The fiber in potatoes can also help with digestion.",
    link:"https://frenchfriesmachine.com/blog"
  },
  {
    img: blogImage2,
    title:"Italian Sandwich",
    feed:"The balance between different components, such as meats, cheeses, veggies, and condiments, is crucial. The bread should be fresh and of the right texture.",
    link:"https://www.sipandfeast.com/italian-sub-hoagie-hero/"
  },
  {
    img: blogImage3,
    title:"Detox Drinks",
    feed:"Over the years, detoxification has caught on as a simple method of keeping our mind, body and soul relaxed. ",
    link:"https://www.healthifyme.com/blog/detox-waters-for-weight-loss/"
  },
];
export {menu, cart, product, review, blog };
