"use client";

import {useEffect,useState} from "react";

const slides=[
  ["https://cdn.spotapps.co/spothopper/image/fetch/f_auto%2Cq_auto%3Abest%2Cc_fit%2Ch_1200/http%3A//static.spotapps.co/spots/c2/ae5c2e4f5742e9ac7dead1b7914611/%3Aoriginal","House of Vegano sushi roll"],
  ["https://cdn.spotapps.co/spothopper/image/fetch/f_auto%2Cq_auto%3Abest%2Cc_fit%2Ch_1200/http%3A//static.spotapps.co/spots/cf/00245b22204421b01ca100e2bee55e/%3Aoriginal","House of Vegano signature dish"],
  ["https://cdn.spotapps.co/spothopper/image/fetch/f_auto%2Cq_auto%3Abest%2Cc_fit%2Ch_1200/http%3A//static.spotapps.co/spots/3f/bfd3dbb1754f2497985d998cb9c03e/%3Aoriginal","House of Vegano sushi"],
  ["https://cdn.spotapps.co/spothopper/image/fetch/f_auto%2Cq_auto%3Abest%2Cc_fit%2Ch_1200/http%3A//static.spotapps.co/spots/c1/b39035834f4f20998268b3332bb3bf/%3Aoriginal","House of Vegano featured dish"],
  ["https://cdn.spotapps.co/spothopper/image/fetch/f_auto%2Cq_auto%3Abest%2Cc_fit%2Ch_1200/http%3A//static.spotapps.co/spots/52/0ba92aab894b0fa8fee9bd01efdbfc/%3Aoriginal","House of Vegano featured sushi"],
  ["https://cdn.spotapps.co/spothopper/image/fetch/f_auto%2Cq_auto%3Abest%2Cc_fit%2Ch_1200/http%3A//static.spotapps.co/spots/87/da339b5d8c4135ba32e0eec7ee0292/%3Aoriginal","House of Vegano plated dish"],
  ["https://cdn.spotapps.co/spothopper/image/fetch/f_auto%2Cq_auto%3Abest%2Cc_fit%2Ch_1200/http%3A//static.spotapps.co/spots/25/aeb248fe094e4abdd24cc7a10bf0a1/%3Aoriginal","House of Vegano signature roll"],
  ["https://cdn.spotapps.co/spothopper/image/fetch/f_auto%2Cq_auto%3Abest%2Cc_fit%2Ch_1200/http%3A//static.spotapps.co/spots/5e/6f11571cc14ef69a62676edefa4a1b/%3Aoriginal","House of Vegano food presentation"]
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
