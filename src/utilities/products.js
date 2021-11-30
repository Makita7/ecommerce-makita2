import capLatte from '../img/Capsule_Latte.png'
import capHazel from '../img/Capsule_Hazel_Mokka.png'
import capMokka from '../img/Capsule_Mokka.png'
import capVani from '../img/Capsule_Vanilla.png'
import capCapu from '../img/Capsule_Capuccino.png'
import cofArabica from '../img/coffee_Arabica.png'
import cofExcelsa from '../img/coffee_Excelsa.png'
import cofLiberica from '../img/coffee_Liberica.png'
import cofRobusta from '../img/coffee_Robusta.png'

const products = [
    //Coffee Capsules - ID 11-19
    {
        id: 11,
        name: "Latte",
        sweetness: 5,
        strength: 1,
        description:"half milk half coffee",
        price:200,
        img: capLatte,
        category:"CoffeeCapsules",
        stock: 40,
        categoryId:12,
    },
    {
        id: 12,
        name: "Hazel Mokka",
        sweetness: 5,
        strength: 3,
        description:"Hazel, caramel, chocolate, milk and sugary sweet coffee",
        price:200,
        img: capHazel,
        category:"CoffeeCapsules",
        stock: 20,
        categoryId:12,
    },
    {
        id: 13,
        name: "Mokka",
        sweetness: 5,
        strength: 3,
        description:"Single-origin coffees made from craft, small-batch roasters. With a more bitter profile, perfect for drinking with a splash of cream",
        price:200,
        img: capMokka,
        category:"CoffeeCapsules",
        stock: 22,
        categoryId:12,
    },
    {
        id: 14,
        name: "Capuccino",
        sweetness: 5,
        strength: 2,
        description:"Single-origin coffees made from craft, small-batch roasters. With a more bitter profile, perfect for drinking with a splash of cream",
        price:200,
        img: capCapu,
        category:"CoffeeCapsules",
        stock: 12,
        categoryId:12,
    },
    {
        id: 15,
        name: "Vanilla",
        sweetness: 5,
        strength: 1,
        description:"Single-origin coffees made from craft, small-batch roasters. With a more bitter profile, perfect for drinking with a splash of cream",
        price:200,
        img: capVani,
        category:"CoffeeCapsules",
        stock: 32,
        categoryId:12,
    },
    //Coffee Beans - ID 1-9
    {
        id: 1,
        name: "Robusta",
        roast: "dark",
        description:"Single-origin coffees made from craft, small-batch roasters. With a more bitter profile, perfect for drinking with a splash of cream",
        origin: "Vietnam",
        price:200,
        img: cofRobusta,
        category:"CoffeeBeans",
        stock: 5,
        categoryId:11,
    },
    {
        id: 2,
        name: "Robusta Premium",
        roast: "medium",
        description:"Delicious, hiqh quality Robusta coffees will find their way into your home. Single-origin coffees made from craft, small-batch roasters. The very best Robusta coffee beans with a hints of chocolate and rum within their flavor profile.",
        origin: "Vietnam",
        price:300,
        img: cofRobusta,
        category:"CoffeeBeans",
        stock: 65,
        categoryId:10,
    },
    {
        id: 3,
        name: "Liberica",
        roast: "light",
        description:"Liberica coffee beans are a rare treat. They’re grown in very specific climates. It has a soft cent of fruit and flowers.",
        origin: "Southeast Asia",
        price:310,
        img: cofLiberica,
        category:"CoffeeBeans",
        stock: 53,
        categoryId:9,
    },
    {
        id: 4,
        name: "Liberica Premium",
        roast: "medium",
        description:"Liberica coffee beans are a rare treat. They’re grown in very specific climates. The beans are considered a pleasant surprise. Many who’ve tried the coffee liken the aroma to fruit and flowers and describe the flavor as having a somewhat “woody” taste.",
        origin: "Southeast Asia",
        price:380,
        img: cofLiberica,
        category:"CoffeeBeans",
        stock: 75,
        categoryId:8,
    },
    {
        id: 5,
        name: "Arabica",
        roast: "dark",
        description:"Arabica beans have a sweeter tone to their taste, more delicate flavor and the coffee itself tends to be less acidic.",
        origin: "Brazil",
        price:280,
        img: cofArabica,
        category:"CoffeeBeans",
        stock: 65,
        categoryId:7,
    },
    {
        id: 6,
        name: "Arabica Premium",
        roast: "medium",
        description:"Arabica beans have a sweeter tone to their taste, more delicate flavor and the coffee itself tends to be less acidic. In this case we have a more nutty and chocolatey notes.",
        origin: "Brazil",
        price:350,
        img: cofArabica,
        category:"CoffeeBeans",
        stock: 98,
        categoryId:5,
    },
    {
        id: 7,
        name: "Excelsa",
        roast: "medium",
        description:"These Excelsa beans are for the purpose of being mixed with other varieties in order soften the pronounced taste and aroma yet complementing other beans.",
        origin: "Southeast Asia",
        price:450,
        img: cofExcelsa,
        category:"CoffeeBeans",
        stock: 88,
        categoryId:6,
    },
    {
        id: 8,
        name: "Excelsa Premium",
        roast: "medium",
        description:"Excelsa beans posses an extremely pronounced taste and aroma designed for only the most delicate and trained pallet.",
        origin: "Southeast Asia",
        price:600,
        img: cofExcelsa,
        category:"CoffeeBeans",
        categoryId:1,
        stock: 53,
    },
    //Tea Strands - ID 21-29 //
    {
        id: 21,
        name: "Rosehip and Chamomile",
        strength: 1,
        description:"Single-origin coffees made from craft, small-batch roasters. With a more bitter profile, perfect for drinking with a splash of cream",
        price:200,
        img:"https://media.istockphoto.com/photos/coffee-cup-concept-message-picture-id825340486?b=1&k=20&m=825340486&s=170667a&w=0&h=xHF4mKNDYr_HGCFBlgEAb7P88X-w8DiHyzwyzG4LMT8=",
        category:"TeaStrands",
        categoryId:3,
        stock: 40,
    },
    //Yerba Mate - ID 31-39
    {
        id: 31,
        name: "Yerba Mate",
        strength: 3,
        description:"Single-origin coffees made from craft, small-batch roasters. With a more bitter profile, perfect for drinking with a splash of cream",
        price:200,
        img:"https://media.istockphoto.com/photos/coffee-cup-concept-message-picture-id825340486?b=1&k=20&m=825340486&s=170667a&w=0&h=xHF4mKNDYr_HGCFBlgEAb7P88X-w8DiHyzwyzG4LMT8=",
        category:"YerbaMate",
        categoryId:2,
        stock: 40,
    },
    //Accesories - ID 41-49
    {
        id: 41,
        name: "French Press",
        roast: "dark",
        description:"used for",
        price:2500,
        img:"https://media.istockphoto.com/photos/coffee-cup-concept-message-picture-id825340486?b=1&k=20&m=825340486&s=170667a&w=0&h=xHF4mKNDYr_HGCFBlgEAb7P88X-w8DiHyzwyzG4LMT8=",
        category:"Accesories",
        categoryId:5,
        stock: 31,
    },
];

export default products;