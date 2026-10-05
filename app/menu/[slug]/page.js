import Image from "next/image";
import {notFound} from "next/navigation";

const data={
"rolls":{eyebrow:"01 · THE ROLLS",title:"ROLLS.",line:"The art of the House.",image:"gold-signature-roll.png",second:"rainbow-roll-platter.png",copy:"Color, texture, precision and Thalia’s point of view—built into every roll."},
"signature-sides":{eyebrow:"02 · SIGNATURE SIDES",title:"SIDES.",line:"Never an afterthought.",image:"house-bowl.png",second:"sushi-table-spread.png",copy:"The supporting cast deserves its own spotlight. Small plates with full House energy."},
"beverages":{eyebrow:"03 · BEVERAGES",title:"DRINK.",line:"Pour something beautiful.",image:"new-090333.png",second:"dining-room-green-wall.png",copy:"Something bright, something sparkling, something made to sit beside the food."},
"desserts":{eyebrow:"04 · DESSERTS",title:"SWEET.",line:"The last bite matters.",image:"dessert-duo.png",second:"vegan-tiramisu.png",copy:"Tiramisu, cheesecake and sweet finishes that deserve their own course."},
"ramen":{eyebrow:"05 · RAMEN",title:"RAMEN.",line:"Deep comfort. House rules.",image:"ramen-house.png",second:"ramen-bowl.png",copy:"A bowl built for the moment when sushi is not enough."},
"dumplings":{eyebrow:"06 · HOUSE OBSESSION",title:"DUMPLINGS.",line:"You weren’t ready for these.",image:"dumplings.png",second:"signature-dumplings.png",copy:"Soft. Tender. Rich. Sweet. Savory. Some dishes need an explanation. These need another order.",obsession:true},
"test-kitchen":{eyebrow:"07 · THE TEST KITCHEN",title:"WHAT’S NEXT?",line:"Ideas before they become rules.",image:"thalia-chef-platter.png",second:"signature-roll-closeup.png",copy:"This is where Thalia experiments—limited ideas, new obsessions and dishes that may never sit still."},
"poke-bowl":{eyebrow:"08 · POKE BOWL",title:"THE BOWL.",line:"Built layer by layer.",image:"poke-bowl.png",second:"house-bowl.png",copy:"Color, texture and House flavor in every layer."},
"special-event":{eyebrow:"09 · SPECIAL EVENT",title:"MAKE IT YOURS.",line:"A table worth gathering around.",image:"dining-room-green-wall.png",second:"sushi-kraft-trays.png",copy:"Birthdays, celebrations, private gatherings and the food that makes people stay longer."},
"lunch-special":{eyebrow:"10 · LUNCH SPECIAL",title:"MIDDAY.",line:"The House, for lunch.",image:"sushi-board-signatures.png",second:"avocado-signature-roll.png",copy:"A reason to make lunch the best part of the day. Current availability and pricing are confirmed when ordering."}
};
export function generateStaticParams(){return Object.keys(data).map(slug=>({slug}))}
export default async function Category({params}){const {slug}=await params;const d=data[slug];if(!d)return notFound();return <main className="categoryExperience">
<header className="categoryTop"><a href="/">← THE HOUSE</a><a href="/menu">FULL MENU</a><a href="https://www.houseofvegano.com/" target="_blank" rel="noreferrer">ORDER NOW ↗</a></header>
<section className="categoryHero"><Image src={"/images/"+d.image} alt={d.title+" at House of Vegano"} fill priority sizes="100vw"/><div className="categoryShade"/><div className="categoryHeroCopy"><p>{d.eyebrow}</p><h1>{d.title}</h1><em>{d.line}</em></div></section>
<section className="categoryStatement"><span>HOUSE OF VEGANO · ST. PETERSBURG</span><h2>{d.copy}</h2></section>{d.obsession&&<><section className="dumplingEditorial"><div className="dumplingNumber">01</div><div><p>THE HOUSE OBSESSION</p><h2>SOFT.<br/>TENDER.<br/><em>RIDICULOUS.</em></h2></div><figure><Image src="/images/dumplings-bowl.png" alt="House of Vegano dumplings" fill sizes="45vw"/></figure></section><section className="dumplingQuote"><div>★★★★★</div><blockquote>“Just had the best dumplings ever. Who knew they were vegan?”</blockquote><span>GREGGORY BUTLER · GOOGLE REVIEW</span></section></>}
<section className="categoryDiptych"><figure><Image src={"/images/"+d.second} alt={d.title+" House of Vegano"} fill sizes="60vw"/></figure><div><small>THALIA’S HOUSE</small><h2>COME<br/>TASTE<br/><em>WHY.</em></h2><p>Plant-based. Chef-driven. Made to be remembered.</p><a href="https://www.houseofvegano.com/" target="_blank" rel="noreferrer">ORDER FROM THE HOUSE →</a></div></section>
<footer className="categoryFooter"><a href="/">HOUSE OF VEGANO</a><span>1990 CENTRAL AVE · ST. PETERSBURG</span><a href="/menu">EXPLORE THE FULL MENU →</a></footer>
<a className="mobileOrder" href="https://www.houseofvegano.com/" target="_blank" rel="noreferrer">ORDER NOW ↗</a>
</main>}