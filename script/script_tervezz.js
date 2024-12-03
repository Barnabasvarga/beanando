
const modell = document.getElementById('modell');
const colour = document.getElementById('colour');
const ajanlas = document.getElementById('ajanlas');
const eredmeny = document.getElementById('eredmeny');

let jordan = null;
let szin = null;


const ajanlasok = {
    '1-1': { 
        name: 'Jordan 1 Triple White', 
        img: 'images/kepjs/jordan1triplewhite.jpg', 
        url: 'https://stockx.com/air-jordan-1-low-triple-white-2022',
        price: 180
    },
    '1-2': { 
        name: 'Jordan 1 Triple Black', 
        img: 'images/kepjs/jordan1tripleblack.jpg', 
        url: 'https://stockx.com/air-jordan-1-low-triple-black',
        price: 190
    },
    '1-3': { 
        name: 'Jordan 1 Chicago', 
        img: 'images/kepjs/jordan1lostandfound.jpg', 
        url: 'https://stockx.com/air-jordan-1-retro-high-og-chicago-reimagined-lost-and-found',
        price: 200
    },
    '1-4': { 
        name: 'Jordan 1 UNC', 
        img: 'images/kepjs/jordan1unc.jpg', 
        url: 'https://stockx.com/air-jordan-1-retro-high-white-university-blue-black',
        price: 185
    },
    '1-5': { 
        name: 'Jordan 1 Atmosphere', 
        img: 'images/kepjs/jordan1pink.jpg', 
        url: 'https://stockx.com/air-jordan-1-retro-high-og-atmosphere-w',
        price: 190
    },
    '2-1': { 
        name: 'Jordan 3 White Cement', 
        img: 'images/kepjs/jordan3whitecement.jpg', 
        url: 'https://stockx.com/air-jordan-3-retro-white-cement-reimagined',
        price: 210
    },
    '2-2': { 
        name: 'Jordan 3 Black Cement', 
        img: 'images/kepjs/jordan3blackcement.jpg', 
        url: 'https://stockx.com/air-jordan-3-retro-black-cement-2024',
        price: 200
    },
    '2-3': { 
        name: 'Jordan 3 Fire Red', 
        img: 'images/kepjs/jordan3firered.jpg', 
        url: 'https://stockx.com/air-jordan-3-retro-fire-red-2022',
        price: 200
    },
    '2-4': { 
        name: 'Jordan 3 True Blue', 
        img: 'images/kepjs/jordan3trueblue.jpg', 
        url: 'https://stockx.com/air-jordan-3-retro-true-blue-2016',
        price: 190
    },
    '2-5': { 
        name: 'Jordan 3 Rust Pink', 
        img: 'images/kepjs/jordan3rustpink.jpg', 
        url: 'https://stockx.com/air-jordan-3-retro-rust-pink-w',
        price: 195
    },
    '3-1': { 
        name: 'Jordan 4 Oreo', 
        img: 'images/kepjs/jordan4oreo.jpg', 
        url: 'https://stockx.com/air-jordan-4-retro-white-oreo-2021',
        price: 220
    },
    '3-2': { 
        name: 'Jordan 4 Black Cat', 
        img: 'images/kepjs/jordan4blackcat.jpg', 
        url: 'https://stockx.com/air-jordan-4-retro-black-cat-2020',
        price: 200
    },
    '3-3': { 
        name: 'Jordan 4 Red Thunder', 
        img: 'images/kepjs/jordan4redthunder.jpg', 
        url: 'https://stockx.com/air-jordan-4-retro-red-thunder',
        price: 210
    },
    '3-4': { 
        name: 'Jordan 4 Military Blue', 
        img: 'images/kepjs/jordan4militaryblue.jpg', 
        url: 'https://stockx.com/air-jordan-4-retro-military-blue-2024',
        price: 200
    },
    '3-5': { 
        name: 'Jordan 4 Orchid', 
        img: 'images/kepjs/jordan4orchid.jpg', 
        url: 'https://stockx.com/air-jordan-4-retro-orchid-womens',
        price: 195
    },
    '4-1': { 
        name: 'Jordan 6 White/Black', 
        img: 'images/kepjs/jordan6white.jpg', 
        url: 'https://stockx.com/air-jordan-6-retro-reverse-oreo',
        price: 200
    },
    '4-2': { 
        name: 'Jordan 6 Black Infrared', 
        img: 'images/kepjs/jordan6blackinfrared.jpg', 
        url: 'https://stockx.com/air-jordan-6-retro-black-infrared-2019',
        price: 220
    },
    '4-3': { 
        name: 'Jordan 6 Toro Bravo', 
        img: 'images/kepjs/jordan6torobravo.jpg', 
        url: 'https://stockx.com/air-jordan-6-retro-toro-bravo',
        price: 215
    },
    '4-4': { 
        name: 'Jordan 6 UNC', 
        img: 'images/kepjs/jordan6unc.jpg', 
        url: 'https://stockx.com/air-jordan-6-retro-unc-white',
        price: 200
    },
    '4-5': { 
        name: 'Jordan 6 Pink', 
        img: 'images/kepjs/jordan6pink.jpg', 
        url: 'https://stockx.com/air-jordan-6-retro-aleali-may-w',
        price: 205
    },
    '5-1': { 
        name: 'Jordan 11 Concord', 
        img: 'images/kepjs/jordan11concord.jpg', 
        url: 'https://stockx.com/air-jordan-11-retro-concord-2018',
        price: 220
    },
    '5-2': { 
        name: 'Jordan 11 Bred', 
        img: 'images/kepjs/jordan11bred.jpg', 
        url: 'https://stockx.com/air-jordan-11-retro-bred-velvet-womens',
        price: 210
    },
    '5-3': { 
        name: 'Jordan 11 Cherry', 
        img: 'images/kepjs/jordan11cherry.jpg', 
        url: 'https://stockx.com/air-jordan-11-retro-cherry-2022',
        price: 215
    },
    '5-4': { 
        name: 'Jordan 11 Midnight Navy', 
        img: 'images/kepjs/jordan11midnightnavy.jpg', 
        url: 'https://stockx.com/air-jordan-11-retro-midnight-navy-w',
        price: 200
    },
    '5-5': { 
        name: 'Jordan 11 Legend Pink', 
        img: 'images/kepjs/jordan11legendpink.jpg', 
        url: 'https://stockx.com/air-jordan-11-retro-low-legend-pink-womens',
        price: 205
    }
};

// Képek kiválasztásának kezelése
function valasztas(event, type) {
    const gallery = type === 'style' ? modell : colour;
    const selectedData = type === 'style' ? 'data-style' : 'data-color';

    [...gallery.children].forEach(img => img.classList.remove('selected'));
    event.target.classList.add('selected');

    if (type === 'style') {
        jordan = event.target.getAttribute(selectedData);
    } else {
        szin = event.target.getAttribute(selectedData);
    }
}

// stilus
modell.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') valasztas(event, 'style');
});

// szinek
colour.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') valasztas(event, 'color');
});

// a gomb
ajanlas.addEventListener('click', () => {
    if (!jordan || !szin) {
        eredmeny.innerHTML = '<p>Kérlek válassz mind stílust, mind színt!</p>';
        return;
    }

    const key = `${jordan}-${szin}`;
    const recommendation = ajanlasok[key];

    if (!recommendation) {
        eredmeny.innerHTML = '<p>Nincs találat a megadott kombinációra!</p>';
        return;
    }

    eredmeny.innerHTML = `
        <p>A hozzád legjobban illő cipő: <strong>${recommendation.name}</strong></p>
        <img src="${recommendation.img}" alt="${recommendation.name}" style="max-width: 500px; margin: auto; border-radius: 8px">
        <p><strong>Retail ár:</strong> $${recommendation.price}</p>
        <p><a href="${recommendation.url}" target="_blank" style= margin-top: 10px; text-decoration: underline;">Tekintsd meg a jelenlegi piaci árát</a></p>
    `;
});

document.getElementById("ugras5").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
