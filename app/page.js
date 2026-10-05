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

<section className="statement"><p>PLANT-BASED DOESN’T<br/>MEAN <em>PLAYING IT SAFE.</em></p></section>

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
<div className="dumplingWords"><p className="kicker">02 · HOUSE OBSESSION</p><h2>THE<br/><em>DUMPLINGS.</em></h2><p>Soft. Tender. Rich. Sweet. Savory.</p><blockquote>Some dishes need an explanation.<br/>These need another order.</blockquote></div>
<div className="sideNote">YOU WEREN’T READY FOR THESE</div>
</section>

<section id="story" className="story">
<div className="portrait"><Image src="/images/thalia-founder-exterior.png" alt="Thalia Tatham outside House of Vegano" fill sizes="(max-width:800px) 100vw,50vw"/></div>
<div className="storyCopy"><p className="kicker">03 · THE WOMAN BEHIND THE HOUSE</p><h2>THIS IS<br/><em>THALIA’S</em><br/>HOUSE.</h2><p>House of Vegano is Chef Thalia Tatham’s creative world expressed through food—bold, unexpected, personal and unmistakably St. Pete.</p><p className="quote">“It’s amazing food that just happens to be vegan.”</p></div>
</section>

<section className="spread"><Image src="/images/sushi-platter-assortment.png" alt="House of Vegano sushi assortment" fill sizes="100vw"/><div><span>04 · BRING EVERYBODY</span><h2>ORDER<br/>TOO MUCH.</h2></div></section>

<section id="visit" className="visit">
<div className="visitPhoto"><Image src="/images/restaurant-exterior-1990-central.png" alt="House of Vegano at 1990 Central Avenue" fill sizes="(max-width:800px) 100vw,55vw"/></div>
<div className="visitCopy"><p className="kicker">05 · COME THROUGH</p><h2>YOUR TABLE<br/>IS <em>WAITING.</em></h2><p>1990 CENTRAL AVENUE<br/>ST. PETERSBURG, FLORIDA 33712</p><div className="buttons"><a className="hot" href="https://maps.google.com/?q=1990+Central+Ave+St+Petersburg+FL+33712" target="_blank" rel="noreferrer">GET DIRECTIONS</a><a className="darkLine" href="https://www.houseofvegano.com/" target="_blank" rel="noreferrer">MENU + ORDERING</a></div></div>
</section>
<footer><span>HOUSE OF VEGANO</span><span>PLANT-BASED · ST. PETE</span><span>PRIVATE CONCEPT PREVIEW</span></footer>
<a className="mobileOrder" href="https://www.houseofvegano.com/" target="_blank" rel="noreferrer">ORDER NOW</a>
</main>}