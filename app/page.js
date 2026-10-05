import Image from "next/image";

const orderUrl="https://www.houseofvegano.com/";
const reviews=[
["THE DUMPLINGS WERE AMAZING TOO!","J_OKAYYY"],
["EVERYTHING WAS FANTASTIC.","KAYA BEMLEY"],
["SPICY TAHINI DUMPLINGS WERE 100% THE HIGHLIGHT.","MITCHELL BARNES"]
];

export default function Home(){return <main>
<header className="nav navV2">
<a className="brand" href="#top"><Image src="/images/house-of-vegano-logo.png" alt="House of Vegano" width={68} height={68}/><span>HOUSE OF VEGANO</span></a>
<nav><a href="/menu">MENU</a><a href="#thalia">THALIA</a><a href="#catering">CATERING</a><a href="#events">EVENTS</a><a href="#visit">VISIT</a></nav>
<a className="order" href={orderUrl} target="_blank" rel="noreferrer">ORDER NOW ↗</a>
</header>

<section id="top" className="hero heroV2"><div className="heroMotion" aria-hidden="true"><span className="motionWord m1">THALIA’S HOUSE</span><span className="motionWord m2">REIMAGINED</span><span className="motionWord m3">ST. PETE</span></div>
<Image src="/images/mural-interior-hero.png" alt="House of Vegano dining room and mural" fill priority sizes="100vw"/>
<div className="shade v2Shade"/>
<div className="heroCopy v2Copy"><p className="kicker">ST. PETERSBURG · FLORIDA</p><h1>WELCOME<br/>TO <em>THE HOUSE.</em></h1><p className="lead">Thalia Tatham is redefining vegan and reimagining sushi—one unforgettable table at a time.</p><div className="buttons"><a className="hot" href={orderUrl} target="_blank" rel="noreferrer">ORDER THE HOUSE</a><a className="line" href="/menu">EXPLORE THE MENU</a></div></div>
<div className="heroRail"><span>VEGAN SUSHI</span><span>RAMEN</span><span>DUMPLINGS</span><span>ST. PETE</span></div>
</section>

<section className="motionInterlude"><div className="motionFrame"><Image src="/images/signature-roll-closeup.png" alt="House of Vegano signature sushi" fill sizes="100vw"/></div><div className="motionType"><span>01</span><strong>COLOR.</strong><strong>TEXTURE.</strong><strong>THALIA.</strong></div></section><section className="marquee"><div>REDEFINING VEGAN · REIMAGINING SUSHI · AMAZING FOOD THAT JUST HAPPENS TO BE VEGAN · </div></section>

<section className="manifesto">
<p className="kicker">HOUSE OF VEGANO · EST. BY THALIA TATHAM</p>
<h2>NOT A VEGAN<br/>VERSION OF<br/><em>ANYTHING.</em></h2>
<div className="manifestoSide"><p>This is food with its own point of view: colorful, generous, unexpected and unmistakably Thalia.</p><a href="/menu">MEET THE MENU →</a></div>
</section>

<section className="editorialGrid">
<a href="/menu/rolls" className="edTall"><figure><Image src="/images/gold-signature-roll.png" alt="House of Vegano signature roll" fill sizes="50vw"/><figcaption>SIGNATURE ROLLS · BUILT DIFFERENT</figcaption></figure></a>
<a href="/menu/ramen"><figure><Image src="/images/ramen-house.png" alt="House of Vegano ramen" fill sizes="50vw"/><figcaption>RAMEN · DEEP COMFORT</figcaption></figure></a>
<a href="/menu/poke-bowl"><figure><Image src="/images/poke-bowl.png" alt="House of Vegano poke bowl" fill sizes="50vw"/><figcaption>POKE · THE HOUSE WAY</figcaption></figure></a>
</section>

<section className="dumplingHero dumplingV2" id="dumplings">
<Image src="/images/dumplings.png" alt="House of Vegano signature dumplings" fill sizes="100vw"/>
<div className="dumplingShade"/>
<div className="dumplingWords"><p className="kicker">HOUSE OBSESSION · 01</p><h2>THE<br/><em>DUMPLINGS.</em></h2><p>Soft. Tender. Rich. Sweet. Savory.</p><blockquote>Some dishes need an explanation.<br/>These need another order.</blockquote></div>
<aside className="dumplingReview"><div className="reviewStars">★★★★★</div><p>“Just had the best dumplings ever. Who knew they were vegan?”</p><p>“Thalia really has created something special. Wow wow wow.”</p><strong>GREGGORY BUTLER</strong><span>GOOGLE REVIEW</span></aside><a className="sectionCta" href="/menu/dumplings">ENTER THE DUMPLINGS →</a>
</section>

<section id="thalia" className="thaliaFeature">
<div className="thaliaPortrait"><Image src="/images/thalia-portrait-greenery.png" alt="Chef Thalia Tatham" fill sizes="50vw"/></div>
<div className="thaliaWords"><p className="kicker">THE CREATIVE FORCE · 02</p><h2>THALIA’S<br/><em>HOUSE.</em></h2><p className="bigQuote">“It’s amazing food that just happens to be vegan.”</p><p>House of Vegano is personal. The menu, the room, the color, the experimentation—everything carries the point of view of the woman who built it.</p><a href="#visit">COME EXPERIENCE IT →</a></div>
</section>

<section className="menuUniverse">
<div className="universeIntro"><p className="kicker">DINNER AT THE HOUSE · 03</p><h2>WHAT ARE<br/>YOU <em>CRAVING?</em></h2></div>
<div className="categoryWall">
{[["ROLLS","rolls"],["SIGNATURE SIDES","signature-sides"],["BEVERAGES","beverages"],["DESSERTS","desserts"],["RAMEN","ramen"],["DUMPLINGS","dumplings"],["TEST KITCHEN","test-kitchen"],["POKE BOWL","poke-bowl"],["SPECIAL EVENT","special-event"],["LUNCH SPECIAL","lunch-special"]].map(([x,slug],i)=><a href={"/menu/"+slug} key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}<b>↗</b></a>)}
</div>
</section>

<section className="testKitchen">
<div><p className="kicker">THE TEST KITCHEN · 04</p><h2>WHAT’S<br/><em>NEXT?</em></h2><p>Where Thalia experiments. Limited ideas, new obsessions and dishes that may never behave like permanent menu items.</p><a className="sectionCta darkCta" href="/menu/test-kitchen">ENTER THE TEST KITCHEN →</a></div>
<figure><Image src="/images/thalia-chef-platter.png" alt="Thalia with House of Vegano creations" fill sizes="55vw"/></figure>
</section>

<section id="catering" className="splitAction">
<div className="actionCard cateringCard"><Image src="/images/sushi-kraft-trays.png" alt="House of Vegano catering spread" fill sizes="50vw"/><div><span>CATERING</span><h2>BRING<br/>THE HOUSE.</h2><p>Make the table the part everyone remembers.</p><a href="/catering">START A CATERING CONVERSATION →</a></div></div>
<div id="events" className="actionCard eventCard"><Image src="/images/dining-room-green-wall.png" alt="House of Vegano dining room" fill sizes="50vw"/><div><span>PARTIES + EVENTS</span><h2>YOUR<br/>OCCASION.</h2><p>Birthdays, gatherings, celebrations and nights worth making personal.</p><a href="/events">PLAN AN EVENT →</a></div></div>
</section>

<section className="love">
<p className="kicker">LOVE FOR THE HOUSE · 05</p><h2>PEOPLE<br/><em>REMEMBER.</em></h2>
<div className="reviewGrid">{reviews.map(([q,n])=><blockquote key={n}><div>★★★★★</div><p>“{q}”</p><cite>{n}<br/>GOOGLE REVIEW</cite></blockquote>)}</div>
</section>

<section className="finalFood"><Image src="/images/sushi-table-spread.png" alt="House of Vegano table spread" fill sizes="100vw"/><div><p>ONE TABLE.<br/><em>ORDER TOO MUCH.</em></p><a href={orderUrl} target="_blank" rel="noreferrer">ORDER NOW ↗</a></div></section>

<section id="visit" className="visit visitV2">
<div className="visitPhoto"><Image src="/images/restaurant-exterior-1990-central.png" alt="House of Vegano at 1990 Central Avenue" fill sizes="55vw"/></div>
<div className="visitCopy"><p className="kicker">COME THROUGH · 06</p><h2>THE HOUSE<br/>IS <em>HERE.</em></h2><p>1990 CENTRAL AVENUE<br/>ST. PETERSBURG, FL 33712</p><div className="hours"><span>MON + THU</span><b>11 AM — 7 PM</b><span>FRI + SAT</span><b>11 AM — 10 PM</b><span>SUN</span><b>12 PM — 7 PM</b><span>TUE + WED</span><b>CLOSED</b></div><div className="buttons"><a className="hot" href="https://maps.google.com/?q=1990+Central+Ave+St+Petersburg+FL+33712" target="_blank" rel="noreferrer">GET DIRECTIONS</a><a className="darkLine" href="tel:+17275068627">(727) 506-8627</a></div></div>
</section>

<footer className="footerV2"><div><Image src="/images/house-of-vegano-logo.png" alt="House of Vegano" width={88} height={88}/><strong>HOUSE OF VEGANO</strong><p>REDEFINING VEGAN.<br/>REIMAGINING SUSHI.</p></div><div><b>EXPLORE</b><a href="/menu">Menu</a><a href="#thalia">Thalia</a><a href="#catering">Catering</a><a href="#events">Events</a></div><div><b>VISIT</b><span>1990 Central Ave</span><span>St. Petersburg, FL 33712</span><a href="tel:+17275068627">(727) 506-8627</a><a href="mailto:hello@houseofvegano.com">hello@houseofvegano.com</a></div><small>PRIVATE CONCEPT PREVIEW · HOUSE OF VEGANO</small></footer>
<a className="mobileOrder" href={orderUrl} target="_blank" rel="noreferrer">ORDER NOW ↗</a>
</main>}