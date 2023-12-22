import  menuImage1 from "./assets/images/menu-1.png";
const dish = [
    {
      id: 1,
      name: "Chicken Tikka Masala",
      price: 14.99,
      quantity: 0,
      image: "https://img.freepik.com/free-photo/meat-dish-with-vegetables_144627-18110.jpg?size=626&ext=jpg&ga=GA1.1.876937323.1703159128&semt=ais"
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      price: 12.99,
      quantity: 0,
      image:"https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?size=626&ext=jpg&ga=GA1.1.876937323.1703159128&semt=ais"
    },
    {
      id: 3,
      name: "Biryani",
      price: 11.99,
      quantity: 0,
      image: "https://img.freepik.com/free-photo/plate-biryani-with-bowl-rice-bowl-food-table_505751-3814.jpg?size=626&ext=jpg&ga=GA1.1.876937323.1703159128&semt=sph"
    },
    {
      id: 4,
      name: "Samosa",
      price: 2.99,
      quantity: 0,
      image: "https://img.freepik.com/free-photo/fried-dumplings-samosas-ready-eat-generated-by-ai_188544-43164.jpg?size=626&ext=jpg&ga=GA1.1.876937323.1703159128&semt=sph"
    },
    {
      id: 5,
      name: "Chole Bhature",
      price: 9.99,
      quantity: 0,
      image: "https://img.freepik.com/free-photo/bowl-filled-with-beans_23-2148746870.jpg?size=626&ext=jpg&ga=GA1.1.876937323.1703159128&semt=sph"
    },
    {
      id: 6,
      name: "Butter Chicken",
      price: 15.99,
      quantity: 0,
      image:"https://media.istockphoto.com/id/1472620857/photo/tasty-butter-chicken-curry-dish-from-indian-cuisine.jpg?b=1&s=612x612&w=0&k=20&c=mYMZyawX1vEoQPDlbduSJTI7Tj7oG7eNi4VUtCosI0E="
    },
    {
      id: 7,
      name: "Palak Paneer",
      price: 10.99,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1273066287/photo/image-of-cast-iron-round-skillet-frying-pan-vegetarian-meal-palak-paneer-recipe-blue-grey.jpg?b=1&s=612x612&w=0&k=20&c=8m9qcHWyUHz3NI-Mo1mEb3JdfoKEJ8WSnuTIb9_Wf18="
    },
    {
      id: 8,
      name: "Dosa",
      price: 8.99,
      quantity: 0,
      image: "https://media.istockphoto.com/id/154919144/photo/south-indian-snacks-masala-dosa.jpg?b=1&s=612x612&w=0&k=20&c=wwqagFj3uKvAOSHiJid2na5SvOZnRa4XjxsWckaXkKo="
    },
    {
      id: 9,
      name: "Aloo Gobi",
      price: 9.49,
      quantity: 0,
      image: "https://media.istockphoto.com/id/174961905/photo/gobi-aloo-indian-curry-dish.jpg?b=1&s=612x612&w=0&k=20&c=6sEwYqQLaeVsTzTR-w1kUW-FAM0X3YJ4wqR-JnWJlrs="
    },
    {
      id: 10,
      name: "Rogan Josh",
      price: 16.99,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1253934130/photo/mutton-masala-curry-in-plastic-container-for-home-delivery.jpg?b=1&s=612x612&w=0&k=20&c=XfIhh3nnTLD78qes8RTu3JzFPa2-7E_BWMTt60QbxzY="
    },
    {
      id: 11,
      name: "Vada Pav",
      price: 3.99,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1329213718/photo/vada-pav.jpg?b=1&s=612x612&w=0&k=20&c=u9pskaH2ULBH3zVKZSR4NxVTfoWVzN93tljOBqooFIc="
    },
    {
      id: 12,
      name: "Fish Curry",
      price: 17.99,
      quantity: 0,
      image: "https://media.istockphoto.com/id/482121467/photo/indian-thali-with-fish.jpg?b=1&s=612x612&w=0&k=20&c=CUUANkeDSsRBm6g4L2MlqhmPR5F9bNb-1QZQWB6l_Yo="
    },
    {
      id: 13,
      name: "Raita",
      price: 4.99,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1493126973/photo/delicious-boondi-raita-in-bowl.jpg?b=1&s=612x612&w=0&k=20&c=CpajNkiC_57t9xX-kFBxXyYj7U8P5SQTORaJvx71c5s="
    },
    {
      id: 14,
      name: "Chana Masala",
      price: 10.49,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1223625174/photo/spicy-chana-masala.jpg?b=1&s=612x612&w=0&k=20&c=BCxM60c2VMgkQdMNGcJVhdquoffooUEbWO-R9vSXhYw="
    },
    {
      id: 15,
      name: "Pav Bhaji",
      price: 7.99,
      quantity: 0,
      image: "https://media.istockphoto.com/id/517679282/photo/indian-spicy-fast-food-pav-bhaji-with-bread.jpg?b=1&s=612x612&w=0&k=20&c=WGnuJoAg0clSpNhoWg6rOOo8FW1kq5UyanvldAKiei8="
    },
    {
      id: 16,
      name: "Tandoori Roti",
      price: 2.49,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1412774152/photo/tandoori-roti-indian-baked-flatbread.jpg?b=1&s=612x612&w=0&k=20&c=Ns7d9GvLZTzJ3M5K3r7P7LirhG9vsk8GEUzWB5z9vkw="
    },
    {
      id: 17,
      name: "Hyderabadi Biryani",
      price: 13.99,
      quantity: 0,
      image: "https://media.istockphoto.com/id/488481490/photo/fish-biryani-with-basmati-rice-indian-food.jpg?b=1&s=612x612&w=0&k=20&c=t03bdu5qcvxf2GdDvlozmXn4YfMqCkhj02IEgCm4vNo="
    },
    {
      id: 18,
      name: "Pakora",
      price: 5.49,
      quantity: 0,
      image: "https://media.istockphoto.com/id/177314242/photo/vegetable-pakora.jpg?b=1&s=612x612&w=0&k=20&c=qeJ42GmhrzkswlJV6E5z_6tkPr0yDx9xSfQjvNuxdwY="
    },
    {
      id: 19,
      name: "Baingan Bharta",
      price: 9.99,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1620333150/photo/tomato-bhorta-with-onion-green-chilli-bharta-and-vorta-served-in-dish-isolated-on-background.jpg?b=1&s=612x612&w=0&k=20&c=riTWCQhUErItu8CCcHclRYer2Yr2hJfxz9Egdjp_Zpc="
    },
    {
      id: 20,
      name: "Rasgulla",
      price: 6.99,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1156631698/photo/rasgulla-sweet-food.jpg?b=1&s=612x612&w=0&k=20&c=5NueNbdRIP4ctJMirbxFN4yCK9FD4Wy7CwPjGVRgSkw="
    },
    {
      id: 21,
      name: "Chicken Korma",
      price: 15.49,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1443602402/photo/chicken-karahi-korma-msala-served-in-dish-isolated-on-table-top-view-of-asian-and-indian-food.jpg?b=1&s=612x612&w=0&k=20&c=mdExtg19bh7eblu76e8nfJ-0lsjJfcqln1nR0Yo18lc="
    },
    {
      id: 22,
      name: "Puri Bhaji",
      price: 8.49,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1761109019/photo/indian-food-deep-fried-puri-bhaji-or-aloo-ki-sabji-potatoes-and-kheer.jpg?b=1&s=612x612&w=0&k=20&c=r0EEERsC6JEOIBaiQb_9WbNj5t_7q9FfyOoqP34znZ0="
    },
    {
      id: 23,
      name: "Malai Kofta",
      price: 11.49,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1203164861/photo/malai-kofta-famous-indian-cuisine.jpg?b=1&s=612x612&w=0&k=20&c=R-xdTDzQX9Z3sa7BCRtQQ5-CpsUh7IicSe4ORFekty4="
    },
    {
      id: 24,
      name: "Mango Lassi",
      price: 4.49,
      quantity: 0,
      image: "https://media.istockphoto.com/id/1442604654/photo/food-photos-various-entrees-appetizers-deserts-etc.jpg?b=1&s=612x612&w=0&k=20&c=X8Gaz6uHzlUZCMxxBXrXi-AFYSDEY53yQ5QELMOL-68="
    },
    {
      id: 25,
      name: "Gulab Jamun",
      price: 5.99,
      quantity: 0,
      image:"https://media.istockphoto.com/id/95408403/photo/gulabjamun-indian-sweet-recipe-background.jpg?b=1&s=612x612&w=0&k=20&c=6Q5YklGxx38pH42orrt7tNWWWPCxl2-Auwsm5P_0lzE="
    },
  ];
  
  export {dish};
  
  
  