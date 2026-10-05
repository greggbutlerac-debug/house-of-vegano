import Image from "next/image";

const gallery=[
["sushi-board-signatures.png","House signatures"],
["rainbow-roll-platter.png","Color, craft, flavor"],
["sushi-table-spread.png","Made for the whole table"],
["signature-roll-closeup.png","Not your standard roll"],
];

export default function Home(){
return <main>
<header className="nav">
<a className="brand" href="#top"><Image src="/images/house-of-vegano-logo.png" alt="House of Vegano" width={76} height={76}/><span>HOUSE OF VEGANO</span></a>
<nav><a href="/menu">MENU</a><a href="#food">FOOD</a><a href="#story">THALIA</a><a href="#visit">VISIT</a></nav>
<a className="order" href="https://www.houseofvegano.com/" target="_blank" rel="noreferrer">ORDER NOW</a>
</header>

<section id="top" className="hero">
<Image src="/images/hero-sushi-restaurant.png" alt="House of Vegano sushi at the restaurant" fill priority sizes="100vw"/>
<div className="shade"/>
<div className="heroCopy"><p className="kicker">ST. PETERSBURG · FLORIDA</p><h1>REDEFINING<br/><em>VEGAN.</em><br/>REIMAGINING<br/><em>SUSHI.</em></h1><p className="lead">Come because it’s vegan. Come back because it’s unforgettable.</p><div className="buttons"><a className="hot" href="/menu">EXPLORE THE MENU</a><a className="line" href="#visit">VISIT 1990 CENTRAL</a></div></div>
<div className="scroll">SCROLL TO TASTE ↓</div>
</section>

<section className="menuCallout"><span>THE FULL HOUSE OF VEGANO MENU</span><h2>WHAT ARE<br/>YOU <em>CRAVING?</em></h2><p>Signature rolls. Dumplings. Ramen. Nigiri. Sweet finishes.</p><a href="/menu">SEE THE FULL MENU →</a></section><section className="statement"><p>PLANT-BASED DOESN’T<br/>MEAN <em>PLAYING IT SAFE.</em></p></section>

<section id="food" className="foodIntro">
<div><p className="kicker">01 · THE FOOD</p><h2>SUSHI WITH<br/><em>NOTHING</em><br/>TO PROVE.</h2></div>
<div className="introPhoto"><Image src="/images/thalia-chef-platter.png" alt="Chef Thalia holding a House of Vegano sushi platter" fill sizes="(max-width:800px) 100vw,50vw"/></div>
</section>

<section className="gallery">
{gallery.map(([src,label],i)=><figure key={src} className={"g g"+i}><Image src={"/images/"+src} alt={label} fill sizes="(max-width:800px) 100vw,50vw"/><figcaption><span>0{i+1}</span>{label}</figcaption></figure>)}
</section>

<section className="dumplingHero">
<Image src="/images/dumplings.png" alt="House of Vegano signature dumplings" fill sizes="100vw"/>
<div className="dumplingShade"/>
<div className="dumplingWords"><p className="kicker">02 · HOUSE OBSESSION</p><h2>THE<br/><em>DUMPLINGS.</em></h2><p>Soft. Tender. Rich. Sweet. Savory.</p><blockquote>Some dishes need an explanation.<br/>These need another order.</blockquote></div><aside className="dumplingReview"><div className="reviewStars">★★★★★</div><p>“Just had the best dumplings ever. Who knew they were vegan? If this is what vegan food is really about, I'm in!!!”</p><p>“Thalia really has created something special. Wow wow wow. 👌”</p><strong>GREGGORY BUTLER</strong><span>GOOGLE REVIEW</span><a href="https://www.google.com/search?q=House+of+Vegano+1990+Central+Ave+St+Petersburg+FL+reviews" target="_blank" rel="noreferrer">READ GOOGLE REVIEWS →</a></aside>
<div className="sideNote">YOU WEREN’T READY FOR THESE</div>
</section>

<section id="story" className="story">
<div className="portrait"><Image src="/images/thalia-portrait-greenery.png" alt="Chef Thalia Tatham at House of Vegano" fill sizes="(max-width:800px) 100vw,50vw"/></div>
<div className="storyCopy"><p className="kicker">03 · THE WOMAN BEHIND THE HOUSE</p><h2>THIS IS<br/><em>THALIA’S</em><br/>HOUSE.</h2><p>House of Vegano is Chef Thalia Tatham’s creative world expressed through food—bold, unexpected, personal and unmistakably St. Pete.</p><p className="quote">“It’s amazing food that just happens to be vegan.”</p></div>
</section>

<section className="spread"><Image src="/images/sushi-kraft-trays.png" alt="A colorful spread of House of Vegano sushi" fill sizes="100vw"/><div><span>04 · BRING EVERYBODY</span><h2>ORDER<br/>TOO MUCH.</h2></div></section>
<section className="houseFoodGrid"><figure><Image src="/images/ramen-house.png" alt="House of Vegano ramen" fill sizes="(max-width:760px) 100vw,50vw"/><figcaption>RAMEN · COMFORT WITH A POINT OF VIEW</figcaption></figure><figure><Image src="/images/gold-signature-roll.png" alt="House of Vegano signature sushi roll" fill sizes="(max-width:760px) 100vw,50vw"/><figcaption>SIGNATURE ROLLS · BUILT DIFFERENT</figcaption></figure></section>
<section className="sweetMoment"><div><p className="kicker">05 · SAVE ROOM</p><h2>THE LAST<br/>BITE <em>MATTERS.</em></h2><p>Tiramisu. Cheesecake. Sweet finishes worth staying for.</p><a href="/menu#sweet-finish">SEE SWEET FINISHES →</a></div><figure><Image src="/images/vegan-tiramisu.png" alt="House of Vegano vegan tiramisu" fill sizes="(max-width:760px) 100vw,50vw"/></figure></section>

<section className="houseMoment"><Image src="/images/mural-interior-hero.png" alt="House of Vegano interior mural in St. Petersburg" fill sizes="100vw"/><div><span>WELCOME TO</span><h2>THE HOUSE.</h2><a href="/menu">EXPLORE THE MENU →</a></div></section><section id="visit" className="visit">
<div className="visitPhoto"><Image src="/images/restaurant-exterior-1990-central.png" alt="House of Vegano at 1990 Central Avenue" fill sizes="(max-width:800px) 100vw,55vw"/></div>
<div className="visitCopy"><p className="kicker">06 · COME THROUGH</p><h2>YOUR TABLE<br/>IS <em>WAITING.</em></h2><p>1990 CENTRAL AVENUE<br/>ST. PETERSBURG, FLORIDA 33712</p><div className="buttons"><a className="hot" href="https://maps.google.com/?q=1990+Central+Ave+St+Petersburg+FL+33712" target="_blank" rel="noreferrer">GET DIRECTIONS</a><a className="darkLine" href="https://www.houseofvegano.com/" target="_blank" rel="noreferrer">MENU + ORDERING</a></div></div>
</section>
<footer><span>HOUSE OF VEGANO</span><span>PLANT-BASED · ST. PETE</span><span>PRIVATE CONCEPT PREVIEW</span></footer>
<a className="mobileOrder" href="https://www.houseofvegano.com/" target="_blank" rel="noreferrer">ORDER NOW</a>
</main>}