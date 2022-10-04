start();
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  var countDownDate = new Date("DEC 31, 2022 00:00:00").getTime()
  console.log(countDownDate)

  
  var countDown = setInterval(function() {
    var now = new Date().getTime()
    var distance = countDownDate - now
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60))
    var seconds = Math.floor((distance%(1000*60))/(1000))
    document.getElementById("count").innerHTML = days + "D " +  hours + "H " + minutes + "M " + seconds + "S ";
    if (distance<=0)
    clearInterval(countDown)
},1000);

function start(){
  var main=document.getElementById("main")
  var html= `        <header>
  <div class="nav-pc">
      <a href="">ComingSoon</a>
      <nav class="nav-bar-pc">
          <div class="menu">
              <ul>
                  <li><a href="">home</a></li>
                  <li><a href="">info</a></li>
                  <li><a href="">contact</a></li>
              </ul>
          </div>
      </nav> 
  </div>
  <input type="checkbox" hidden class="nav-input" id="nav-mobile-input">
  <div class="toggle">
      <label for="nav-mobile-input"> 
          <i class="fa-solid fa-bars"></i>
      </label>
  </div>
  <label class="overlay" for="nav-mobile-input"></label>
  <div class="nav-mobile">
      <nav class="nav-bar-mobile">
          <ul class="menu-mobile">
              <div class="close_btn">
                  <label for="nav-mobile-input">
                   <i class="fa fa-times" aria-hidden="true"></i>
                  </label>
              </div>
              <li><a href="">home</a></li>
              <li><a href="">info</a></li>
              <li><a href="">contact</a></li>
          </ul>
      </nav>
  </div>
</header>
<div id="middle">
  <h1>COMING SOON</h1><hr>
      <p id="count"></p>
</div>
<div class="footer">
  <div class="footer-menu">
      <a href="">testing</a><a href="">content</a><a href="">about</a>
  </div>   
  <i class="fa-solid fa-clock"></i> 
</div>
<div id="particles-js"></div>`;
  main.innerHTML=html;
}