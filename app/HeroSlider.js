"use client";

import {useEffect,useState} from "react";

const slides=[
  ["https://static.spotapps.co/spots/19/df68b6b6464223ab75475f858e73cf/full","House of Vegano Spicy Tuna roll"],
  ["https://static.spotapps.co/spots/8e/75c92c2ce74cc1b27b38c193a44dd0/full","House of Vegano Rainbow Roll"],
  ["https://static.spotapps.co/spots/1e/625e4f72784322b93a681619b32b35/full","House of Vegano The Burg roll"],
  ["https://static.spotapps.co/spots/78/f7bf21f6d54df0a81af0f66bb33bf5/full","House of Vegano Seaweed Salad"],
  ["https://static.spotapps.co/spots/56/031328c8ed48eabc685c378ce80859/full","House of Vegano Vegan Tiramisu"],
  ["https://static.spotapps.co/spots/22/58ca1f2ae243adbe7beef55769878a/full","House of Vegano HOV Dumplings"],
  ["https://static.spotapps.co/spots/6d/62cd163c7d4dc8b62aadd05bf3926f/full","House of Vegano Tom Kha ramen"],
  ["https://static.spotapps.co/spots/43/b7fab7b2ec420e90c7db99b2b78da5/full","House of Vegano Palms and Rainbow rolls"]
];

export default function HeroSlider(){
  const [index,setIndex]=useState(0);
  const [paused,setPaused]=useState(false);
  useEffect(()=>{
    if(paused)return;
    const id=setInterval(()=>setIndex(i=>(i+1)%slides.length),5000);
    return()=>clearInterval(id);
  },[paused]);
  return <div className="heroDishSlider" aria-label="House of Vegano featured dishes">
    {slides.map(([src,alt],i)=><img key={src} src={src} alt={alt} className={"heroDishSlide "+(i===index?"isActive":i===(index-1+slides.length)%slides.length?"isLeaving":"")}/>)}
    <div className="heroDots" role="tablist" aria-label="Featured dishes">
      {slides.map((_,i)=><button key={i} type="button" className={i===index?"active":""} aria-label={"Show dish "+(i+1)} aria-selected={i===index} onClick={()=>setIndex(i)}/>)}
    </div>
    <button type="button" className="heroPause" onClick={()=>setPaused(p=>!p)} aria-label={paused?"Resume slideshow":"Pause slideshow"}>{paused?"▶":"Ⅱ"}</button>
  </div>;
}
