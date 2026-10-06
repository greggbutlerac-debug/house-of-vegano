import "./globals.css";

export const metadata={
  title:{
    default:"House of Vegano | Vegan Sushi in St. Petersburg",
    template:"%s | House of Vegano"
  },
  description:"House of Vegano is a chef-driven plant-based sushi restaurant in St. Petersburg, Florida, serving signature rolls, ramen, dumplings and more.",
  keywords:["House of Vegano","vegan sushi St. Petersburg","plant-based sushi","vegan restaurant St. Petersburg","vegan ramen","vegan dumplings"],
  icons:{icon:"/images/house-logo-blue.webp",apple:"/images/house-logo-blue.webp"},
  openGraph:{
    title:"House of Vegano | Redefining Vegan. Reimagining Sushi.",
    description:"Chef-driven plant-based sushi, ramen, dumplings and more in St. Petersburg, Florida.",
    type:"website",
    locale:"en_US",
    siteName:"House of Vegano",
    images:[{url:"/images/hero-sushi-restaurant.png",width:1200,height:630,alt:"House of Vegano plant-based sushi"}]
  },
  twitter:{
    card:"summary_large_image",
    title:"House of Vegano | Redefining Vegan. Reimagining Sushi.",
    description:"Chef-driven plant-based sushi, ramen, dumplings and more in St. Petersburg, Florida.",
    images:["/images/hero-sushi-restaurant.png"]
  }
};

export default function RootLayout({children}){
  return <html lang="en"><body>{children}</body></html>;
}
