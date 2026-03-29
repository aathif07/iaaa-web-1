"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react"

const categories=[
  {id:"all",label:"All Photos"},
  {id:"events",label:"Events"},
  {id:"workshops",label:"Workshops"},
  {id:"conferences",label:"Conferences"},
  {id:"clubs",label:"Clubs"},
  {id:"leadership",label:"Leadership"},
  {id:"activities",label:"Activities"},
]

const galleryImages=[
  "DSC00023.JPG",
  "DSC00045.JPG",
  "DSC00103.JPG",
  "DSC00106.JPG",
  "DSC00122.JPG",
  "DSC00146.JPG",
  "DSC00201.JPG",
  "DSC08742.JPG",
  "IMG-20241205-WA0053.jpg",
  "IMG-20241205-WA0086.jpg",
  "IMG-20250530-WA0036.jpg",
  "IMG-20250530-WA0037.jpg",
  "IMG-20250530-WA0113.jpg",
  "IMG-20250531-WA0020.jpg",
  "IMG-20250531-WA0022.jpg",
  "IMG-20250531-WA0023.jpg",
  "IMG-20250531-WA0025.jpg",
  "IMG-20251108-WA0009.jpg",
  "IMG_2184.JPG",
  "IMG_2207.JPG",
  "IMG_2218.JPG",
  "IMG_2234.JPG",
  "IMG_2238.JPG",
  "IMG_2244.JPG",
  "IMG_2254.JPG",
  "IMG_2336.JPG",
  "IMG_3950.jpg",
  "IMG_3956.jpg",
  "IMG_3977.jpg",
  "KAVI0329.JPG",
  "KAVI0335.JPG",
  "KAVI0343.JPG",
  "KAVI8794.JPG",
  "KAVI9259 - Copy - Copy - Copy.JPG",
  "KAVI9769.JPG",
  "SRP_0542.JPG",
  "WhatsApp Image 2023-06-20 at 12.36.00.jpeg",
  "WhatsApp Image 2023-07-27 at 14.04.41.jpeg",
  "WhatsApp Image 2023-07-27 at 14.04.42.jpeg",
  "WhatsApp Image 2023-07-27 at 14.04.46.jpeg",
  "WhatsApp Image 2023-07-28 at 09.21.38.jpeg",
  "WhatsApp Image 2024-12-06 at 10.49.23_7acb0dbb.jpg",
  "WhatsApp Image 2025-04-24 at 12.50.51_31b40bf9.jpg",
  "WhatsApp Image 2025-04-24 at 18.35.37_76c7391b.jpg",
  "WhatsApp Image 2025-04-25 at 16.53.20_4d4ad262.jpg",
  "WhatsApp Image 2025-10-10 at 15.46.52_6c6f2882.jpg",
  "_C3A0647.JPG",
  "_C3A0724.JPG",
  "_C3A1248.JPG",
  "xy-4.jpg",
]

const homeGalleryBase = "/homw%20page%20image%20"

function categorizeImage(filename:string):string{
  if(filename.includes("President")||filename.includes("Secretary")||filename.includes("Vice President")||filename.includes("Mr.")||filename.includes("Ms.")||filename.includes("elangovan"))return "leadership"
  if(filename.includes("aerospace-"))return "activities"
  if(filename.includes("IMG-2017")||filename.includes("IMG-2018"))return "events"
  if(filename.startsWith("20")||filename.startsWith("22")||filename.startsWith("25")||filename.startsWith("28")||filename.startsWith("29"))return "conferences"
  if(filename.startsWith("72")||filename.startsWith("74")||filename.startsWith("75")||filename.startsWith("77")||filename.startsWith("78")||filename.startsWith("79"))return "workshops"
  return "events"
}

const galleryItems=galleryImages.map((filename,index)=>({
  id:index+1,
  src:`${homeGalleryBase}/${encodeURIComponent(filename)}`,
  alt:`IAAA Event - ${filename.split(".")[0]}`,
  category:categorizeImage(filename),
  title:filename.includes("President")||filename.includes("Secretary")||filename.includes("Vice President")||filename.includes("Mr.")||filename.includes("Ms.")
    ?filename.replace(/\.(jpg|JPG|png).*$/,"")
    :"IAAA Event",
  date:filename.includes("2017")?"2017":filename.includes("2018")?"2018":filename.includes("aerospace")?"Recent":"Archive",
  location:"Various Locations",
}))

export default function GalleryPage(){
  const [activeCategory,setActiveCategory]=useState("all")
  const [lightboxOpen,setLightboxOpen]=useState(false)
  const [currentIndex,setCurrentIndex]=useState(0)

  const filteredItems=activeCategory==="all"?galleryItems:galleryItems.filter(item=>item.category===activeCategory)

  const openLightbox=(index:number)=>{setCurrentIndex(index);setLightboxOpen(true)}
  const closeLightbox=()=>setLightboxOpen(false)
  const goToPrev=()=>setCurrentIndex(prev=>prev===0?filteredItems.length-1:prev-1)
  const goToNext=()=>setCurrentIndex(prev=>prev===filteredItems.length-1?0:prev+1)

  useEffect(()=>{
    if(!lightboxOpen)return
    const handler=(e:KeyboardEvent)=>{if(e.key==="Escape")closeLightbox();if(e.key==="ArrowLeft")goToPrev();if(e.key==="ArrowRight")goToNext()}
    window.addEventListener("keydown",handler)
    return()=>window.removeEventListener("keydown",handler)
  },[lightboxOpen,filteredItems.length])

  return(
  <>
  <section className="relative min-h-80 flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"/>
      <div className="absolute inset-0 opacity-10" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)",backgroundSize:"60px 60px"}}/>
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet-400/10 rounded-full -translate-y-1/3 translate-x-1/3"/>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">Events &amp; <span className="text-violet-400">Moments</span></h1>
        <p className="text-lg text-white/70 max-w-xl">Capturing IAAA's journey through conferences, workshops, clubs, and collaborations across India.</p>
      </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat=>(
            <button key={cat.id} onClick={()=>setActiveCategory(cat.id)} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory===cat.id?"bg-violet-600 text-white shadow-lg shadow-violet-200":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`}>{cat.label}</button>
          ))}
        </div>
        <div className="text-sm text-slate-400 text-center mb-8">{filteredItems.length} photos</div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredItems.map((item,index)=>(
            <button key={item.id} onClick={()=>openLightbox(index)} className="group relative aspect-video rounded-xl overflow-hidden bg-slate-100 cursor-pointer border border-transparent hover:border-violet-300 hover:shadow-lg transition-all">
              <Image src={item.src||"/placeholder.svg"} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110"/>
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <p className="text-xs font-semibold text-white line-clamp-1">{item.title}</p>
                <p className="text-xs text-white/70">{item.date}</p>
              </div>
            </button>
          ))}
        </div>
        {filteredItems.length===0&&<div className="text-center py-16 text-slate-400">No images in this category.</div>}
      </div>
    </section>

    {lightboxOpen&&(
      <div className="fixed inset-0 z-50 bg-slate-950/97 flex items-center justify-center" onClick={closeLightbox}>
        <button onClick={e=>{e.stopPropagation();closeLightbox()}} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10" aria-label="Close"><X className="w-6 h-6"/></button>
        <button onClick={e=>{e.stopPropagation();goToPrev()}} className="absolute left-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10" aria-label="Previous"><ChevronLeft className="w-6 h-6"/></button>
        <button onClick={e=>{e.stopPropagation();goToNext()}} className="absolute right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10" aria-label="Next"><ChevronRight className="w-6 h-6"/></button>
        <div className="max-w-5xl w-full mx-16" onClick={e=>e.stopPropagation()}>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
            <Image src={filteredItems[currentIndex].src||"/placeholder.svg"} alt={filteredItems[currentIndex].alt} fill className="object-contain"/>
          </div>
          <div className="mt-5 text-center">
            <h3 className="text-white font-semibold">{filteredItems[currentIndex].title}</h3>
            <div className="flex items-center justify-center gap-6 mt-2 text-sm text-white/60">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4"/>{filteredItems[currentIndex].date}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/>{filteredItems[currentIndex].location}</span>
            </div>
            <p className="text-xs text-white/40 mt-2">{currentIndex+1} / {filteredItems.length}</p>
          </div>
        </div>
      </div>
    )}
  </>
)}
