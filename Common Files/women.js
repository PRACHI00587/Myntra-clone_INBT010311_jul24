var categoryBag = [
    {image_url :'https://bit.ly/3wMvK2N'},
    {image_url :'https://bit.ly/3wY0TA6'},
    {image_url :'https://bit.ly/3IWRXxk'},
    {image_url :'https://bit.ly/36I2HCP'},
    {image_url :'https://bit.ly/3LtKeIK'},
    {image_url :'https://bit.ly/3uEEhC2'},
  ]
  categoryBag.map(function(element){
    var box = document.createElement('div');
    var img =  document.createElement('img');
    img.setAttribute('src', element.image_url)
    box.append(img); 
    document.getElementById('categoryBag_women').append(box)
  })
  
  // <!-- BRAND DISPLAY 2 -->
  var brandsBag = [
    {image_url :'https://bit.ly/3qOmNSH'},
    {image_url :'https://bit.ly/3Dx4Lth'},
    {image_url :'https://bit.ly/3uGBVTh'},
    {image_url :'https://bit.ly/3DxPVCY'},
    {image_url :'https://bit.ly/3iQbIfq'},
  ]
  brandsBag.map(function(element){
    var box = document.createElement('div');
    var img =  document.createElement('img');
    img.setAttribute('src', element.image_url)
    box.append(img); 
    document.getElementById('explore_more_women').append(box)
  })
  
  
  // <------- SLIDER IMAGES -------> //
  var slideImages = [
    //FOR TABLET & DEKSTOP VIEW
    [{img_url : "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/a20271c6-249f-480b-bcc7-1b150516e54e1651599573998-Dressberry_Desk.jpg"},
    {img_url : "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/38f37101-f335-44be-af8f-5d53de15c75e1649530843725-Casual---Sports-Shoes_Desk--1-.jpg"},
    {img_url : "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/17/f1874a9d-c423-44d3-a529-6c63521d6f991650181498608-Sarees_Desk.jpg"},
    {img_url : "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/30/b9aa3c3d-17a5-4d5e-afed-ba679d629a0d1693375596341-DB.png"},
    ],
  
    //FOR MOBILE VIEW
    // [{img_url : "https://bit.ly/36X3qjg"},
    // {img_url: "https://bit.ly/3DnFd1L"},
    // {img_url: "https://bit.ly/3tVztt3"},
    // {img_url: "https://bit.ly/3iR1aN6"},
    // ]
  ]
  
  var z = null; 
  
    //script for media queries
    var value = window.matchMedia("(max-width: 550px)") //FOR TABLET VIEW
      mFunction(value) 
      value.addListener(mFunction) 
      function mFunction(value) {
        if (value.matches) { 
          z = slideImages[1];
        } 
        else {
          z = slideImages[0]
        }
    }
  
  z.map(function(ele, index){
    var slideDiv = document.createElement('div');
    switch(index){
      case 0 :
        slideDiv.setAttribute('class', 'slide first');
        break;
      default :
      slideDiv.setAttribute('class', 'slide')
    }
   
    var images = document.createElement('img');
    images.src = ele.img_url;
    
    slideDiv.append(images); 
    document.getElementById('slides').append(slideDiv)
  })
  
  var images = document.querySelectorAll('img')
  for(let i=0; i<images.length; i++){
    images[i].addEventListener('click', function(){
      window.location.href = "../womensdata/women.html"
    })
  }
  // LANDING PAGE
  document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "../Landingpage/index.html"
  })