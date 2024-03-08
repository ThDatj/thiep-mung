
var to = ' BTK!';
var gift_url = 'https://www.facebook.com/groups/558324651945766';
var gift_image_url = 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/269601717_1828690563998415_5028632125967342495_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGpkPafMGjb3_PiirisfhPaqkkPJllkSYaqSQ8mWWRJhkbpHR8ZJYUBJxizzBZLLbsSKfR1LYP9qJHwokF-lwff&_nc_ohc=C5GDgkHnbgAAX8np-5Q&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDbi_cJrxbS5lNxlzy9-Ipqq1H9QuZD3EfCyiUzhUVROQ&oe=65EFD6CB';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

