var dealsArr = [{
    img: "./images/img1.webp"
},
{
    img: "./images/img3.webp"
},
{
    img: "./images/img4.webp"
},
{
    img: "./images/img5.webp"
},
{
    img: "./images/img6.webp"
},

{
    img: "./images/img7.webp"
},
{
    img: "./images/cat26plain.webp"
},
{
    img: "./images/img9.webp"
},
{
    img: "./images/img10.webp"
},
{
    img: "./images/img11.webp"
},
{
    img: "./images/img12.webp"
},
{
    img: "./images/cat26plain.webp"
},
];

dealsArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#deals").append(box);
});

var bestArr = [{
    img: "./images/img14.webp"
},
{
    img: "./images/img20.webp"
},
{
    img: "./images/img17.webp"
},
{
    img: "./images/img18.webp"
},
{
    img: "./images/img19.webp"
},
{
    img: "./images/img15.webp"
},

];

bestArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#best").append(box);
});


// var topArr = [{
//     img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/062cea23-9a6a-44b9-bdd4-87cae6a462311645602543339-Kurta-sets.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/8d65d400-decd-4f42-902c-a40350a16ed11645602543346-Kurtas.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/398ee53b-5899-4a9a-9d0b-b35d60c01cb41645602543325-Dresses.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/2f410d81-7fae-400e-9ecc-b4a8b6df72b91645602543430-Women-Jeans.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/82a9be01-3032-4725-9500-bcc94366b7931645602543399-Mens-Shirts.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/c6b09c0f-5c57-472c-a3fc-854ec506a90e1645602543387-Men-T-shirt.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/f08e2bac-9bed-4f87-b022-0dce8defeded1645602543380-Men-Trousers.jpg"
// },
// ];

// topArr.map(function (el) {

//     var box = document.createElement("div");
//     var img = document.createElement("img")
//     img.setAttribute("src", el.img)

//     box.append(img);
//     document.querySelector("#top").append(box);
// });


var categoriesArr = [{
    img: "./images/pic1.png"
},
{
    img: "./images/pic2.png"
},
{
    img: "./images/pic3.png"
},
{
    img: "./images/pic4.png"
},
{
    img: "./images/pic5.png"
},
{
    img: "./images/pic6.png"
},
{
    img: "./images/pic7.png"
},
{
    img: "./images/pic8.png"
},
{
    img: "./images/pic9.png"
},
{
    img: "./images/pic10.png"
},
{
    img: "./images/pic11.png"
},
{
    img: "./images/pic12.png"
},
{
    img: "./images/pic13.png"
},
{
    img: "./images/pic14.png"
},
{
    img: "./images/pic15.png"
},
{
    img: "./images/pic16.png"
},
{
    img: "./images/pic17.png"
},
{
    img: "./images/pic18.png"
}


];

categoriesArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#categories").append(box);
});

// var dealsTopArr = [{
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/3/f0dc0024-a8d3-4aec-9e1b-d9b6873b52d51599144996663-Crocs.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/85d5e2e1-fa21-43b0-a352-438e15f1006e1598892141455-Nike.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/22b908fa-38aa-46a6-a3cd-a5ccd46b04ce1598892141560-Puma.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/26/adc58a2c-fa18-4b94-b2d6-4c692a44123d1601115417606-unnamed--6-.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8238147e-a86e-4fe4-a830-ab5c2c49beba1598892141840-W.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/7d0153c1-2fc4-49ec-ac7c-3c402d1ed45f1598948396008-USPA.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/c6a4ec29-f907-4d54-8ed7-83006938b20c1598892141612-Tommy-Hilfiger.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/d1fab403-7742-4a91-a781-2e36bea65a8a1598445950683-Men-s-Apparel---Roadster.png"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/4abbda25-8d58-44f7-a986-c80fa31b08b31598892141513-Only.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/72af0092-fd16-4b61-b1fb-e617c089fe251598456566139-image_jpeg1938580873.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/9/5a5a162e-c4ad-4497-b995-a3c077d25df71596975348916-Women-s-Ethnic-Wear_Vishudh.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/da4935ce-8f3f-4273-bfbe-6ded783cf2131598948352513-Levis.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/ee953e28-7ca8-4e08-a6a9-c51c98f823411598892141010-BIBA.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/1/08f15f56-156e-45c8-b0bc-7aecd0b122431598970514602-Veromoda.jpg"
// },    
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ec275a-9d3a-432c-b3df-736a7e9518d11598892141670-UCB.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/26/0390ad1a-1262-4f7a-8f81-37c1644142a91598445950839-Sports---HRX-by-Hrithik-Roshan.png"
// },
// ];

// dealsTopArr.map(function (el) {

//     var box = document.createElement("div");
//     var img = document.createElement("img")
//     img.setAttribute("src", el.img)

//     box.append(img);
//     document.querySelector("#dealsTop").append(box);
// });

// var unmissableArr = [{
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/1ec9ffd5-335f-4ecb-a7e9-ea403da9a7df1645805770868-SS22-SeasonChecklist-PricePoints-CleanBlueDenim.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/a0e60587-5d1e-41f0-9d5f-f42a925a55921645793729467-SS22-SeasonChecklist-Trending-BlockHeels.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/99a29231-2050-4fde-ad40-efa35de66e5b1645805770994-SS22-SeasonChecklist-PricePoints-TrendySneakers.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/bdde4d47-9908-4764-b09e-5a55034e32b01645793729554-SS22-SeasonChecklist-Trending-Loungewera.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/6bcf042c-5f07-47e2-a1cb-3da58c4f94951645793729590-SS22-SeasonChecklist-Trending-SlipOns.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/50c525cc-6724-4d41-9e97-5b931a33631b1645806100291-SS22-SeasonChecklist-AddOns-New-Season-Wallets_.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/62ef932d-b023-4c34-b649-bc3b399057a31646114955627-SS22-SeasonChecklist-Styling-Women-Kurtas.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/518f4774-cd01-4076-b2ee-03170d232c161645793729608-SS22-SeasonChecklist-Trending-Stylecast.jpg"
// },
// ];

// unmissableArr.map(function (el) {

//     var box = document.createElement("div");
//     var img = document.createElement("img")
//     img.setAttribute("src", el.img)

//     box.append(img);
//     document.querySelector("#unmissable").append(box);
// });

// var coloursArr = [{
//     img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/53a0e7bc-64e7-4fb3-94fd-a1ada51fbefa1647516450800-SS22-Colours-Metallic-Hues.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/a6ef0785-eb3c-4726-a6ba-c09f6a44379c1647516450782-SS22-Colours-Elegant-Olive.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/8/65446aed-c0e9-4bab-af02-3e96c6ad7ab51646753796263-SS22-Colours-Cobalt.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3b1d43f4-46bf-4e3f-903b-ec5ca5c2bac91645860983331-SS22-Colours-Mens-BreezyWhite.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/96018800-d6b6-47e1-9998-62de5ce5c16a1647516450837-SS22-Colours-Soft-Pastels.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/389fe98d-b379-4816-9411-63624b03c0671647516450765-SS22-Colours-Electric-Lime.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/c1c00661-aff4-439e-9fd1-76982e7784831647516450875-SS22-Colours-Turquoise-Blue.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/3a8ac38f-76fe-4ee4-84fa-f9bd4947c4431647516450746-SS22-Colours-Coffee-Browns.jpg"
// },

// ];

// coloursArr.map(function (el) {

//     var box = document.createElement("div");
//     var img = document.createElement("img")
//     img.setAttribute("src", el.img)

//     box.append(img);
//     document.querySelector("#colours").append(box);
// });

// var topInfluencersArr = [{
//     img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/c7fff41e-a426-4188-b319-bde1651f109e1647417948711-Studiocontent-HPBanner-Men-FestiveWearBythomson_19071gif.gif"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ab0ac260-8f5d-4a64-a626-83b58129e3491647417948743-Studiocontent-HPBanner-Women-WeddingOutfitsBy-thankgod_itsfashion.gif"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/d210ddcf-73f4-4044-a75d-e8a6665fb9151647417948735-Studiocontent-HPBanner-Women-PartyLooksByiamartichauhan.gif"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/8872ea7e-92a1-4be6-9706-d78845d480781647417948726-Studiocontent-HPBanner-Men-StreetWearByurban.lad.gif"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/462e80ef-51d4-4a81-a509-72d45ec7f6331647417948751-Studiocontent-HPBanner-Women-WorkWearBasicsByoutlanSrish.gif"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/f6826795-22fa-4d40-8573-d5e1ee1178531647417948719-Studiocontent-HPBanner-MenGymBasicsByiakashchoudhary.gif"
// },
// ];

// topInfluencersArr.map(function (el) {

//     var box = document.createElement("div");
//     var img = document.createElement("img")
//     img.setAttribute("src", el.img)

//     box.append(img);
//     document.querySelector("#topInfluencers").append(box);
// });

// var budgetArr = [{
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/f7dd9f7e-e99d-42ee-b968-22ffa616d8681647418063204-Studiocontent-HPGrid-SummerShirts.png"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/13c90fd6-62ca-459a-86c6-ebdf19617a251647418063195-Studiocontent-HPGrid-ClassicDenim.png"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/973855e5-a1d8-4a4a-810c-60a02068b0cb1647418043970-Studiocontent-HPGrid-TrendyTops.png"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/bf5c8576-26e6-42a7-a4d0-eba5dd2a59f11647418043962-Studiocontent-HPGrid-SummerSkirts.png"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/f9d82a54-06f3-4bfb-8dd3-0f6c258212a71647418043955-Studiocontent-HPGrid-ElegantSarees.png"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/e14a3767-485e-4f99-a92f-e5880dcc39181647418063210-Studiocontent-HPGrid-TraditionalKurtas.png"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/5ba2861b-33cd-45cb-a526-cca93d2629a31647418063217-Studiocontent-HPGrid-TrendyTshirts.png"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/37ad6a46-8dfc-46cc-9d4b-a1781079a0511647418043947-Studiocontent-HPGrid-DreamyDresses.png"
// },
// ];

// budgetArr.map(function (el) {

//     var box = document.createElement("div");
//     var img = document.createElement("img")
//     img.setAttribute("src", el.img)

//     box.append(img);
//     document.querySelector("#budget").append(box);
// });

// var trendingArr = [{
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0d7a22b9-e201-44db-ba04-6dfba8ebd5061647418012721-Studiocontent-HPCarousel-Women-WesternWear.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/d8bee915-9dbd-4cbb-9562-896dd16afdf31647418012563-Studiocontent-HPCarousel-Men-BeyondBasicsCasulaWear.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/fa1a37d5-db35-4df5-9f3b-dfeebf9a22bd1647418012703-Studiocontent-HPCarousel-Women-IndianWearGuide.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/843d4a44-833a-4179-a5a2-7f8c52bb1ef71647418012580-Studiocontent-HPCarousel-Men-FootwearFavouritesjpg.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ce751fad-7e3a-456d-87cd-457c6de7fccc1647418012597-Studiocontent-HPCarousel-Men-FormalWear.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0b6937a5-cf76-49c6-a3ab-551b7a17fafa1647418012686-Studiocontent-HPCarousel-Women-GymWear.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/3edddaf4-c192-4651-966d-6b8e04fa309b1647418012668-Studiocontent-HPCarousel-Women-FormalWear.jpg"
// },
// {
//     img: "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/99b98dd2-83e4-4ac1-b2a5-b0bf8b81d62a1647418012633-Studiocontent-HPCarousel-Men-LoungeWear.jpg"
// },

// ];

// trendingArr.map(function (el) {

//     var box = document.createElement("div");
//     var img = document.createElement("img")
//     img.setAttribute("src", el.img)

//     box.append(img);
//     document.querySelector("#trending").append(box);
// });


//LANDING PAGE SCRIPT
document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "index.html"
})
