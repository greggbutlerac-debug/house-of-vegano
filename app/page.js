import Image from "next/image";

const orderUrl="https://tmt.spotapps.co/ordering-menu?spot_id=109242&accordion=true&images=yes";

export default function Home(){return <main className="fwConcept">
<header className="fwTop">
  <a className="fwBrand" href="#top"><Image src="/images/house-logo-blue.webp" alt="House of Vegano" width={62} height={62}/><span>HOUSE OF VEGANO</span></a>
  <nav><a href="/menu">MENU</a><a href="/specials">SPECIALS</a><a href="#visit">VISIT</a><a href="/events">EVENTS</a></nav>
  <a className="fwOrder" href={orderUrl} target="_blank" rel="noreferrer">ORDER NOW</a>
</header>

<section id="top" className="fwHero">
  <img src="https://static.spotapps.co/spots/43/b7fab7b2ec420e90c7db99b2b78da5/full" alt="House of Vegano sushi spread"/>
  <div className="fwHeroShade"/>
  <div className="fwHeroCopy">
    <span>ST. PETERSBURG · FLORIDA</span>
    <h1>REDEFINING VEGAN.<br/><em>REIMAGINING SUSHI.</em></h1>
    <p>A plant-based sushi house built around flavor, color, texture and Thalia Tatham’s point of view.</p>
    <div className="fwHeroActions"><a href="/menu">VIEW MENU</a><a href={orderUrl} target="_blank" rel="noreferrer">ORDER ONLINE</a></div>
  </div>
</section>

<section className="fwQuick">
  <a href="/menu"><b>01</b><strong>VIEW MENU</strong><span>See the full House lineup →</span></a>
  <a href={orderUrl} target="_blank" rel="noreferrer"><b>02</b><strong>ORDER ONLINE</strong><span>Get straight to the food →</span></a>
  <a href="/specials"><b>03</b><strong>CURRENT SPECIALS</strong><span>See what’s happening now →</span></a>
  <a href="#visit"><b>04</b><strong>VISIT THE HOUSE</strong><span>Hours, directions, phone →</span></a>
</section>

<section className="fwFeature">
  <div className="fwFeatureCopy">
    <span>WHAT’S HITTING NOW</span>
    <h2>2 ROLLS.<br/>1 DRINK.<br/><em>$25.</em></h2>
    <p>Lunch does not need to be an afterthought. Two classic rolls, one drink, dine-in only during the current special window.</p>
    <a href="/specials">SEE TODAY’S SPECIAL →</a>
  </div>
  <figure><img src="https://static.spotapps.co/spots/e3/a4cf0cbd0545be875e5f25a082fa24/full" alt="House of Vegano Still I Rise roll"/></figure>
</section>

<section className="fwMenuIntro">
  <span>START WITH THE CRAVING</span>
  <h2>WHAT ARE YOU<br/><em>IN THE MOOD FOR?</em></h2>
</section>

<section className="fwFoodGrid">
  <a href="/menu/rolls"><img src="https://static.spotapps.co/spots/5e/2c1afb6a71456cae33a86586a70aa7/full" alt="House of Vegano signature roll"/><div><span>SIGNATURE ROLLS</span><strong>BUILT DIFFERENT.</strong><b>EXPLORE →</b></div></a>
  <a href="/menu/dumplings"><img src="https://static.spotapps.co/spots/22/58ca1f2ae243adbe7beef55769878a/full" alt="House of Vegano dumplings"/><div><span>DUMPLINGS</span><strong>THE HOUSE OBSESSION.</strong><b>EXPLORE →</b></div></a>
  <a href="/menu/ramen"><img src="https://static.spotapps.co/spots/6d/62cd163c7d4dc8b62aadd05bf3926f/full" alt="House of Vegano Tom Kha ramen"/><div><span>RAMEN</span><strong>DEEP COMFORT.</strong><b>EXPLORE →</b></div></a>
  <a href="/menu/signature-sides"><img src="https://static.spotapps.co/spots/c9/8f265be6d64e4fa455a6e9421a0dd4/full" alt="House of Vegano sides"/><div><span>SIDES + NIGIRI</span><strong>NEVER AN AFTERTHOUGHT.</strong><b>EXPLORE →</b></div></a>
  <a href="/menu/beverages"><img src="https://static.spotapps.co/spots/ce/a90a531f1f4aaaac27e6b2db34e2fe/full" alt="House of Vegano beverage"/><div><span>DRINKS</span><strong>POUR. SIP. STAY.</strong><b>EXPLORE →</b></div></a>
  <a href="/menu/desserts"><img src="https://static.spotapps.co/spots/56/031328c8ed48eabc685c378ce80859/full" alt="House of Vegano dessert"/><div><span>DESSERTS</span><strong>SAVE ROOM.</strong><b>EXPLORE →</b></div></a>
</section>

<section className="fwOrderBand">
  <div><span>READY WHEN YOU ARE</span><h2>SEE IT.<br/>CRAVE IT.<br/><em>ORDER IT.</em></h2></div>
  <a href={orderUrl} target="_blank" rel="noreferrer">ORDER FROM THE HOUSE →</a>
</section>

<section className="fwStory">
  <figure><img src="/images/thalia-chef-platter.png" alt="Thalia Tatham with House of Vegano food"/></figure>
  <div><span>THE PERSON BEHIND THE HOUSE</span><h2>THALIA’S<br/><em>VISION.</em></h2><p>“Our mission is to make plant-based sushi not just an alternative, but a destination.”</p><p>House of Vegano starts with the food, but it is also a point of view: bold flavor, color, culture and a restaurant that feels unmistakably its own.</p></div>
</section>

<section className="fwVisit" id="visit">
  <div><span>COME THROUGH</span><h2>THE HOUSE<br/>IS <em>HERE.</em></h2><p>1990 Central Ave<br/>St. Petersburg, FL 33712</p><div className="fwHours"><b>MON + THU</b><span>11 AM — 7 PM</span><b>FRI + SAT</b><span>11 AM — 10 PM</span><b>SUN</b><span>12 PM — 7 PM</span><b>TUE + WED</b><span>CLOSED</span></div><div className="fwVisitBtns"><a href="https://maps.google.com/?q=1990+Central+Ave+St+Petersburg+FL+33712" target="_blank" rel="noreferrer">GET DIRECTIONS</a><a href="tel:+17275068627">CALL THE HOUSE</a></div></div>
  <figure><img src="/images/restaurant-exterior-1990-central.png" alt="House of Vegano at 1990 Central Avenue"/></figure>
</section>

<footer className="fwFooter"><span>HOUSE OF VEGANO</span><span>FIRST WATCH-INSPIRED FLOW · PRIVATE PREVIEW</span><a href="/menu">FULL MENU →</a></footer>
<a className="fwMobileOrder" href={orderUrl} target="_blank" rel="noreferrer">ORDER NOW</a>
</main>}
