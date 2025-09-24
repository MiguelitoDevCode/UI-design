const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 15000,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 15000,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price:15000,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 15000,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 15000,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});


// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
  // Gestion des tailles de chaussures
  const sizes = document.querySelectorAll('.size');
  sizes.forEach(size => {
    size.addEventListener('click', function() {
      // Enlever la sélection précédente
      sizes.forEach(s => s.classList.remove('selected'));
      // Ajouter la nouvelle sélection
      this.classList.add('selected');
    });
  });

  // Gestion des couleurs
  const colors = document.querySelectorAll('.color');
  colors.forEach(color => {
    color.addEventListener('click', function() {
      colors.forEach(c => c.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  // Animation du bouton BUY NOW au scroll
  const buyButtons = document.querySelectorAll('.buyButton');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;

    buyButtons.forEach(button => {
      if (isElementInViewport(button)) {
        if (scrollTop > lastScrollTop) {
          button.style.transform = 'translateX(10px)';
        } else {
          button.style.transform = 'translateX(0)';
        }
      }
    });

    lastScrollTop = scrollTop;
  });

  // Animation des features au scroll
  const features = document.querySelectorAll('.feature');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px'
  };

  const featureObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  features.forEach(feature => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(20px)';
    feature.style.transition = 'all 0.6s ease-out';
    featureObserver.observe(feature);
  });

  // Animation du formulaire de paiement
  const payInputs = document.querySelectorAll('.payInput');
  payInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.transform = 'translateX(5px)';
    });

    input.addEventListener('blur', function() {
      this.style.transform = 'translateX(0)';
    });
  });

  // Animation de la navbar au scroll
  let prevScrollpos = window.pageYOffset;
  const navbar = document.querySelector('nav');

  window.addEventListener('scroll', function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-50px";
    }

    if (currentScrollPos > 100) {
      navbar.style.background = 'rgba(217, 214, 214, 0.95)';
    } else {
      navbar.style.background = '#d9d6d6';
    }

    prevScrollpos = currentScrollPos;
  });

  // Fonction utilitaire pour vérifier si un élément est visible
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});