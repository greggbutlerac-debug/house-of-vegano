import Image from "next/image";
import HeroSlider from "./HeroSlider";

const orderUrl="https://www.houseofvegano.com/";
const reviews=[
["THE DUMPLINGS WERE AMAZING TOO!","J_OKAYYY"],
["EVERYTHING WAS FANTASTIC.","KAYA BEMLEY"],
["SPICY TAHINI DUMPLINGS WERE 100% THE HIGHLIGHT.","MITCHELL BARNES"]
];

export default function Home(){return <main>
<header className="nav navV2">
<a className="brand" href="#top"><Image src="/images/house-of-vegano-logo.png" alt="House of Vegano" width={68} height={68}/><span>HOUSE OF VEGANO</span></a>
<nav><a href="/menu">MENU</a><a href="/menu/beverages">DRINKS</a><a href="/specials">SPECIALS</a><a href="/catering">CATERING</a><a href="/events">EVENTS</a><a href="#visit">VISIT</a></nav>
<a className="order" href={orderUrl} target="_blank" rel="noreferrer">ORDER NOW ↗</a>
</header>

<section id="top" className="hero heroV2"><div className="heroMotion" aria-hidden="true"><span className="motionWord m1">THALIA’S HOUSE</span><span className="motionWord m2">REIMAGINED</span><span className="motionWord m3">ST. PETE</span></div>
<video className="houseHeroVideo" autoPlay loop muted playsInline poster="https://static.spotapps.co/website_images/ab_websites/109242_website/video_poster.jpg" aria-label="House of Vegano restaurant video">
<source src="/videos/4438.mp4" type="video/mp4"/>
</video>
<div className="shade v2Shade"/>
<div className="heroCopy v2Copy"><p className="kicker">ST. PETERSBURG · FLORIDA</p><h1>WELCOME<br/>TO <em>THE HOUSE.</em></h1><p className="lead">A plant-based sushi house with a global point of view—rooted in St. Petersburg, built around Thalia Tatham’s food, color, culture and imagination.</p><div className="heroMiniProof"><span>REIMAGINED SUSHI</span><span>CHEF-DRIVEN</span><span>BUILT IN ST. PETE</span></div><div className="buttons"><a className="hot" href={orderUrl} target="_blank" rel="noreferrer">ORDER THE HOUSE</a><a className="line" href="/menu">EXPLORE THE MENU</a></div></div>
<div className="heroRail"><span>VEGAN SUSHI</span><span>RAMEN</span><span>DUMPLINGS</span><span>ST. PETE</span></div>
</section>

<section className="muralAfterVideo"><img src="https://raw.githubusercontent.com/greggbutlerac-debug/house-of-vegano/main/IMG_20261005_160343.jpg" alt="House of Vegano dining room and Thalia mural at 1990 Central Avenue"/><div className="muralAfterShade"/><div className="muralAfterWords"><span>1990 CENTRAL AVENUE · ST. PETERSBURG</span><strong>WELCOME<br/>TO <em>THE HOUSE.</em></strong></div></section>

<section className="houseVideoMoment houseVideoMomentA"><video autoPlay loop muted playsInline src="/videos/4435.mp4" aria-label="House of Vegano atmosphere and food video"></video><div><span>HOUSE IN MOTION · 01</span><strong>THE FOOD.<br/>THE ROOM.<br/><em>THE ENERGY.</em></strong></div></section><section className="motionInterlude"><div className="motionFrame"><img className="officialPhoto" src="https://static.spotapps.co/spots/e3/a4cf0cbd0545be875e5f25a082fa24/full" alt="House of Vegano Still I Rise roll"/></div><div className="motionType"><span>01</span><strong>COLOR.</strong><strong>TEXTURE.</strong><strong>THALIA.</strong></div></section><section className="marquee"><div>REDEFINING VEGAN · REIMAGINING SUSHI · AMAZING FOOD THAT JUST HAPPENS TO BE VEGAN · </div></section>

<section className="manifesto manifestoSplit">
<div className="manifestoVisual">
  <img src="https://static.spotapps.co/spots/8e/75c92c2ce74cc1b27b38c193a44dd0/full" alt="House of Vegano signature sushi"/>
  <div className="manifestoVisualCaption"><span>THE HOUSE · SIGNATURE ROLL</span><p>Color, texture and contrast—built to be remembered.</p></div>
</div>
<div className="manifestoSide manifestoSideDeep">
  <p className="kicker">HOUSE OF VEGANO · EST. BY THALIA TATHAM</p>
  <h2>NOT A VEGAN<br/>VERSION OF<br/><em>ANYTHING.</em></h2>
  <p className="manifestoLead">This is food with its own point of view: colorful, generous, unexpected and unmistakably Thalia.</p>
  <div className="manifestoNotes"><span><b>01</b> BUILT FOR CRAVING, NOT COMPROMISE.</span><span><b>02</b> TEXTURE, HEAT, COLOR AND SAUCE DO THE TALKING.</span><span><b>03</b> PLANT-BASED IS THE MEDIUM. THE EXPERIENCE IS THE POINT.</span></div>
  <a href="/menu">MEET THE MENU →</a>
</div>
</section>

<section className="houseCode">
  <div className="houseCodeIntro"><span>THE HOUSE CODE</span><h2>WHAT MAKES<br/>IT <em>VEGANO.</em></h2><p>The point is not to remove something from sushi. The point is to build something with enough flavor, texture and identity that nothing feels missing.</p></div>
  <div className="houseCodeGrid">
    <article><b>01</b><h3>FLAVOR FIRST.</h3><p>Heat, acidity, richness, sweetness, smoke and umami are treated as the architecture of the dish—not decoration at the end.</p></article>
    <article><b>02</b><h3>TEXTURE MATTERS.</h3><p>Mushrooms, vegetables, fruit, crisp elements, soft centers and sauces are layered so every bite has movement.</p></article>
    <article><b>03</b><h3>MAKE IT BEAUTIFUL.</h3><p>The plate should hit before the first bite. Color and presentation are part of the experience, not an afterthought.</p></article>
    <article><b>04</b><h3>KEEP MOVING.</h3><p>The House is not frozen in place. New dishes, new cities and new ways to bring the experience home are part of the vision.</p></article>
  </div>
</section>

<section className="editorialGrid">
<a href="/menu/rolls" className="edTall"><figure><img className="officialPhoto" src="https://static.spotapps.co/spots/5e/2c1afb6a71456cae33a86586a70aa7/full" alt="House of Vegano Adriana Vegano Sparkle II roll"/><figcaption><small>SIGNATURE ROLLS</small><strong>BUILT DIFFERENT.</strong><span>Layered, colorful and designed to make the first bite feel like an event.</span><b className="foodCta">EXPLORE THE ROLLS →</b></figcaption></figure></a>
<a href="/menu/ramen"><figure><img className="officialPhoto" src="https://static.spotapps.co/spots/6d/62cd163c7d4dc8b62aadd05bf3926f/full" alt="House of Vegano Tom Kha ramen"/><figcaption><small>RAMEN</small><strong>DEEP COMFORT.</strong><span>Warm, aromatic, rich and made for the bowl you keep thinking about later.</span><b className="foodCta">ENTER THE RAMEN →</b></figcaption></figure></a>
<a href="/menu/poke-bowl"><figure><img className="officialPhoto" src="https://static.spotapps.co/spots/c9/8f265be6d64e4fa455a6e9421a0dd4/full" alt="House of Vegano assortment of dishes"/><figcaption><small>POKE + PLATES</small><strong>THE HOUSE WAY.</strong><span>Fresh contrast, bold sauces and the kind of color that hits before the fork does.</span><b className="foodCta">EXPLORE THE BOWL →</b></figcaption></figure></a>
</section>

<section className="dumplingHero dumplingV2" id="dumplings">
<img className="officialPhoto" src="https://static.spotapps.co/spots/22/58ca1f2ae243adbe7beef55769878a/full" alt="House of Vegano dumplings"/>
<div className="dumplingShade"/>
<div className="dumplingWords"><p className="kicker">HOUSE OBSESSION · 01</p><h2>THE<br/><em>DUMPLINGS.</em></h2><p>Soft. Tender. Rich. Sweet. Savory.</p><blockquote>Some dishes need an explanation.<br/>These need another order.</blockquote><div className="flavorRail"><span>SOFT CENTER</span><span>BOLD SAUCE</span><span>SHAREABLE</span><span>ORDER-TWO ENERGY</span></div></div>
<aside className="dumplingReview"><div className="reviewStars">★★★★★</div><p>“Just had the best dumplings ever. Who knew they were vegan?”</p><p>“Thalia really has created something special. Wow wow wow.”</p><strong>GREGGORY BUTLER</strong><span>GOOGLE REVIEW</span></aside><a className="sectionCta" href="/menu/dumplings">ENTER THE DUMPLINGS →</a>
</section>

<section className="chapterBreak"><span>02</span><p>THE WOMAN<br/>BEHIND<br/><em>THE HOUSE.</em></p></section><section id="thalia" className="thaliaFeature">
<div className="thaliaPortrait"><img className="thaliaPortraitImage" src="https://raw.githubusercontent.com/greggbutlerac-debug/house-of-vegano/main/thalia-portrait-new.png" alt="Chef Thalia Tatham"/></div>
<div className="thaliaWords"><p className="kicker">THE CREATIVE FORCE · 02</p><h2>THALIA’S<br/><em>VISION.</em></h2><p className="bigQuote">“Our mission is to make plant-based sushi not just an alternative, but a destination.”</p><p>House of Vegano is reimagining sushi and redefining what plant-based cuisine can be on a global stage. Rooted in St. Petersburg, Florida, the flagship is the heartbeat of a vision that reaches far beyond the Gulf.</p><p>With planned locations in New York, Los Angeles and London, Thalia is building toward a future where creativity, sustainability and culture meet at the table. Beyond the restaurants, the vision extends into a retail line of signature ramen kits, dumplings and sauces designed to bring the House of Vegano experience into homes around the world.</p><p className="thaliaClosing">Bold. Elegant. Undeniably amazing.</p><div className="thaliaPrinciples"><span><b>01</b> REIMAGINE SUSHI.</span><span><b>02</b> BUILD GLOBALLY.</span><span><b>03</b> BRING THE HOUSE HOME.</span></div><a href="#visit">EXPERIENCE THE FLAGSHIP →</a></div>
</section>

<section className="thaliaGallery">
  <div className="thaliaGalleryIntro">
    <span>THALIA · IN THE HOUSE</span>
    <h2>THE CHEF.<br/>THE FOOD.<br/><em>THE VISION.</em></h2>
    <p>House of Vegano is inseparable from the person behind it—from the plate in her hands to the room she built around it.</p>
  </div>
  <div className="thaliaGalleryGrid">
    <figure><img src="/images/thalia-chef-platter.png" alt="House of Vegano plated dish presentation"/><figcaption>THE PLATE</figcaption></figure>
    <figure><img src="/images/thalia-founder-exterior.png" alt="House of Vegano founder outside the restaurant"/><figcaption>THE HOUSE</figcaption></figure>
  </div>
</section>

<section className="globalVision">
  <div className="globalVisionIntro"><p className="kicker">FROM ST. PETE TO THE WORLD · 03</p><h2>A HOUSE<br/>WITHOUT<br/><em>BORDERS.</em></h2><p>St. Petersburg is the beginning—not the boundary. House of Vegano is being shaped as a restaurant, a product line and a global point of view on what plant-based cuisine can become.</p></div>
  <div className="globalVisionGrid">
    <article><span>NOW</span><strong>ST. PETERSBURG</strong><p>The flagship. The heartbeat. Where the House is being built in public.</p></article>
    <article><span>PLANNED</span><strong>NEW YORK</strong><p>A future House in one of the world’s defining food cities.</p></article>
    <article><span>PLANNED</span><strong>LOS ANGELES</strong><p>Culture, creativity and plant-based dining at global scale.</p></article>
    <article><span>PLANNED</span><strong>LONDON</strong><p>A transatlantic expression of the House of Vegano vision.</p></article>
  </div>
  <div className="globalVisionRetail"><span>BEYOND THE RESTAURANT</span><h3>RAMEN KITS · DUMPLINGS · SAUCES</h3><p>Signature products designed to bring the House of Vegano experience into homes around the world.</p></div>
</section>

<section className="menuUniverse">
<div className="universeIntro"><p className="kicker">DINNER AT THE HOUSE · 04</p><h2>WHAT ARE<br/>YOU <em>CRAVING?</em></h2><p className="universeLead">Start with the thing you came for. Add the thing somebody else ordered that you suddenly need. Then keep going.</p><a className="universeCta" href="/menu">SEE THE ENTIRE MENU →</a></div>
<div className="categoryWall">
{[["ROLLS","rolls"],["SIGNATURE SIDES","signature-sides"],["BEVERAGES","beverages"],["DESSERTS","desserts"],["RAMEN","ramen"],["DUMPLINGS","dumplings"],["TEST KITCHEN","test-kitchen"],["POKE BOWL","poke-bowl"],["SPECIAL EVENT","special-event"],["LUNCH SPECIAL","lunch-special"]].map(([x,slug],i)=><a href={"/menu/"+slug} key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}<b>↗</b></a>)}
</div>
</section>

<section className="testKitchen">
<div><p className="kicker">THE TEST KITCHEN · 05</p><h2>WHAT’S<br/><em>NEXT?</em></h2><p>Where Thalia experiments. Limited ideas, new obsessions and dishes that may never behave like permanent menu items.</p><p className="testKitchenExtra">This is the permission slip for the menu to stay alive. A place for surprise, seasonal instincts and whatever idea is too interesting to leave in the notebook.</p><div className="testKitchenTags"><span>LIMITED</span><span>EXPERIMENTAL</span><span>THALIA’S PICK</span></div><a className="sectionCta darkCta" href="/menu/test-kitchen">ENTER THE TEST KITCHEN →</a></div>
<figure><img className="officialPhoto" src="/images/sushi-table-spread.png" alt="House of Vegano sushi spread"/></figure>
</section>

<section id="catering" className="splitAction">
<div className="actionCard cateringCard"><img className="officialPhoto" src="https://static.spotapps.co/spots/ba/8052955df8400daceafb22e25c7503/full" alt="House of Vegano assorted sushi rolls"/><div><span>CATERING · TAKE THE HOUSE WITH YOU</span><h2>BRING<br/>THE HOUSE.</h2><p>Make the table the part everyone remembers. Rolls, color, presentation and the unmistakable House of Vegano point of view—built for sharing.</p><div className="actionDetails"><b>OFFICE TABLES</b><b>CELEBRATIONS</b><b>PRIVATE GATHERINGS</b></div><a href="/catering">START A CATERING CONVERSATION →</a></div></div>
<div id="events" className="actionCard eventCard"><img className="officialPhoto" src="https://static.spotapps.co/spots/49/7633410b0144fda313508e6311d55a/wide_medium" alt="House of Vegano tables and chairs with mural visible on the left"/><div><span>PARTIES + EVENTS · MAKE IT PERSONAL</span><h2>YOUR<br/>OCCASION.</h2><p>Birthdays, gatherings, celebrations and nights worth making personal. Come for dinner—or make the room part of the story.</p><div className="actionDetails"><b>BIRTHDAYS</b><b>DINNERS</b><b>CELEBRATIONS</b></div><a href="/events">PLAN AN EVENT →</a></div></div>
</section>

<section className="dishShowcaseWrap"><div className="dishShowcaseIntro"><span>THE MENU IN MOTION · 06</span><h2>ONE DISH.<br/>THEN <em>ANOTHER.</em></h2><p>House of Vegano is meant to be discovered dish by dish. Swipe through a rotating look at the food, then follow the craving into the full menu.</p><a href="/menu">EXPLORE THE FULL MENU →</a></div><div className="dishShowcase"><HeroSlider/></div></section>

<section className="houseVideoMoment houseVideoMomentB"><video autoPlay loop muted playsInline src="/videos/4437.mp4" aria-label="House of Vegano restaurant experience video"></video><div><span>HOUSE IN MOTION · 02</span><strong>THIS IS<br/><em>THALIA'S HOUSE.</em></strong></div></section><section className="housePulse"><div>HOUSE OF VEGANO</div><div>HOUSE OF VEGANO</div></section><section className="hospitalityMoment"><span>THE PEOPLE OF THE HOUSE</span><h2>THEY WANT<br/>TO BE<br/><em>HERE.</em></h2><p>You can feel the difference when people genuinely want to be part of the room. The team at House of Vegano is friendly, attentive and engaged—and that energy becomes part of the experience. It feels less like being processed through a restaurant and more like being welcomed into a place people are proud to represent.</p></section><section className="love">
<p className="kicker">LOVE FOR THE HOUSE · 06</p><h2>PEOPLE<br/><em>REMEMBER.</em></h2><p className="loveLead">The best restaurant marketing is the sentence somebody says on the drive home: “We have to bring someone here.”</p>
<div className="reviewGrid">{reviews.map(([q,n])=><blockquote key={n}><div>★★★★★</div><p>“{q}”</p><cite>{n}<br/>GOOGLE REVIEW</cite></blockquote>)}</div>
</section>

<section className="finalFood"><img className="officialPhoto" src="https://static.spotapps.co/spots/43/b7fab7b2ec420e90c7db99b2b78da5/full" alt="House of Vegano Palms and Rainbow rolls"/><div><p>ONE TABLE.<br/><em>ORDER TOO MUCH.</em></p><a href={orderUrl} target="_blank" rel="noreferrer">ORDER NOW ↗</a></div></section>

<section className="flagshipCallout"><span>THE FLAGSHIP</span><strong>ST. PETE IS<br/><em>THE BEGINNING.</em></strong><p>The first House is where the vision becomes real—on the plate, in the room and around the table.</p></section>

<section id="visit" className="visit visitV2">
<div className="visitPhoto"><Image src="/images/restaurant-exterior-1990-central.png" alt="House of Vegano at 1990 Central Avenue" fill sizes="55vw"/></div>
<div className="visitCopy"><p className="kicker">COME THROUGH · 07</p><h2>THE HOUSE<br/>IS <em>HERE.</em></h2><p>1990 CENTRAL AVENUE<br/>ST. PETERSBURG, FL 33712</p><p className="visitLead">Come hungry. Stay long enough to look around. The mural, the color, the room and the food are all part of the same experience.</p><div className="hours"><span>MON + THU</span><b>11 AM — 7 PM</b><span>FRI + SAT</span><b>11 AM — 10 PM</b><span>SUN</span><b>12 PM — 7 PM</b><span>TUE + WED</span><b>CLOSED</b></div><div className="buttons"><a className="hot" href="https://maps.google.com/?q=1990+Central+Ave+St+Petersburg+FL+33712" target="_blank" rel="noreferrer">GET DIRECTIONS</a><a className="darkLine" href="tel:+17275068627">(727) 506-8627</a></div></div>
</section>

<footer className="footerV2"><div><Image src="/images/house-of-vegano-logo.png" alt="House of Vegano" width={88} height={88}/><strong>HOUSE OF VEGANO</strong><p>REDEFINING VEGAN.<br/>REIMAGINING SUSHI.</p></div><div><b>EXPLORE</b><a href="/menu">Menu</a><a href="#thalia">Thalia</a><a href="#catering">Catering</a><a href="#events">Events</a></div><div><b>VISIT</b><span>1990 Central Ave</span><span>St. Petersburg, FL 33712</span><a href="tel:+17275068627">(727) 506-8627</a><a href="mailto:hello@houseofvegano.com">hello@houseofvegano.com</a></div><small>PRIVATE CONCEPT PREVIEW · HOUSE OF VEGANO</small></footer>
<a className="mobileOrder" href={orderUrl} target="_blank" rel="noreferrer">ORDER NOW ↗</a>
</main>}