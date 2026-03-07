(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/app/gallery/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GalleryPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const categories = [
    {
        id: "all",
        label: "All Photos"
    },
    {
        id: "events",
        label: "Events"
    },
    {
        id: "workshops",
        label: "Workshops"
    },
    {
        id: "conferences",
        label: "Conferences"
    },
    {
        id: "clubs",
        label: "Clubs"
    },
    {
        id: "leadership",
        label: "Leadership"
    },
    {
        id: "activities",
        label: "Activities"
    }
];
const galleryImages = [
    "Honorable President of IAAA  Mr.C.U.Hari.jpg",
    "Honorary Secretary Mr.C.S.Karunakaran ad.jpg",
    "Honorary Vice President Mr.T.K.Sundaramu.jpg",
    "Mr.Muthuraman.jpg",
    "Mr.Siva.jpg",
    "Ms.Udayadeepika.jpg",
    "TIDCOelangovan.JPG.jpg",
    "aerospace-1.jpg",
    "aerospace-2.jpg",
    "aerospace-3.jpg",
    "aerospace-4.jpg",
    "aerospace-5.jpg",
    "aerospace-6.jpg",
    "20294127_1418971221483984_49900300001677.jpg",
    "20294269_1418971284817311_22160365510986.jpg",
    "20294348_1418971201483986_92233051866271.jpg",
    "20429622_1418971314817308_22644557670701.jpg",
    "22281616_1617331334994383_41659480614794.jpg",
    "22308676_1617331101661073_92112684162016.jpg",
    "22310434_1617138638346986_68121151117936.jpg",
    "22365170_10154981700893568_1738155617989.jpg",
    "22406202_1617331128327737_43032711682084.jpg",
    "22448413_244295272765994_268446604614667.jpg",
    "22448438_1617331054994411_73250593718111.jpg",
    "22449925_244295446099310_856342224306218.jpg",
    "22450002_10154981094403568_6000260381535.jpg",
    "22450093_10154981355848568_5244802607631.jpg",
    "22549917_244295369432651_272126576976317.jpg",
    "25348396_266920430503478_479046906293637.jpg",
    "28280064_1628904457157325_18519662450601.jpg",
    "29389220_1669188946462209_60782445377072.jpg",
    "29389224_1669188879795549_39909099868373.jpg",
    "29425557_1669189143128856_20272300440902.jpg",
    "29433040_1669188819795555_76778642361936.jpg",
    "29511786_1669189056462198_82438969797011.jpg",
    "72852160_1461746457324119_26085253747908.jpg",
    "72852160_1461749807323784_53514555277023.jpg",
    "74677027_1461749723990459_49773525418020.jpg",
    "75412332_1461768110655287_81705946654860.jpg",
    "75446637_1461768230655275_91062106805491.jpg",
    "75464194_1461749063990525_59884317722059.jpg",
    "77110890_1461766410655457_43469160292517.jpg",
    "77221323_1461766977322067_15183600511174.jpg",
    "77288031_1461767293988702_91271571716262.jpg",
    "77318891_1461752747323490_29708672756508.jpg",
    "77335599_1461746343990797_31453552913279.jpg",
    "77381283_1461767237322041_81347998282206.jpg",
    "77400750_1461749443990487_36593762213990.jpg",
    "77424200_1461767627322002_29563440649.jpg",
    "78107341_1461750137323751_56983845132189.jpg",
    "78157588_1461749303990501_72076359909685.jpg",
    "78192813_1461768497321915_69643288123644.jpg",
    "78195125_1461749967323768_23673114086279.jpg",
    "78230154_1461767867321978_87359502472697.jpg",
    "78253002_1461767957321969_32989489052904.jpg",
    "78257296_1461749897323775_75045424115115.jpg",
    "78280651_1461768187321946_48215817788525.jpg",
    "78286356_1461768420655256_54400399368519.jpg",
    "78302521_1461746273990804_78006209384535.jpg",
    "78310541_1461749863990445_74008519237770.jpg",
    "78344311_1461749657323799_31047742799468.jpg",
    "78357034_1461746250657473_50352396901107.jpg",
    "78371272_1461746080657490_60067429185958.jpg",
    "78373244_1461749103990521_77061434175620.jpg",
    "78374799_1461768057321959_48184714537310.jpg",
    "78379802_1461746017324163_87558211282130.jpg",
    "78412156_1461746510657447_68729902167815.jpg",
    "78418459_1461752560656842_74508105925221.jpg",
    "78455810_1461749600657138_24388644342029.jpg",
    "78462450_1468432893322142_27732938107576.jpg",
    "78464497_1461766393988792_13765271785979.jpg",
    "78561562_1461749237323841_50702679186635.jpg",
    "78599043_1461766400655458_30026113016261.jpg",
    "78611389_1461768277321937_35803973863478.jpg",
    "78611690_1461746190657479_23050823619156.jpg",
    "78627557_1461767053988726_70771390661515.jpg",
    "78629006_1461767803988651_75681927788662.jpg",
    "78677320_1461767463988685_13094702493424.jpg",
    "78765101_1461749197323845_76322908622018.jpg",
    "78815168_1461750057323759_12436222202368.jpg",
    "78836062_1461766827322082_21241778841415.jpg",
    "78843596_1468433156655449_85531352649632.jpg",
    "78909254_1461766873988744_16808460727437.jpg",
    "78919685_1461767710655327_66916151823905.jpg",
    "78936036_1461752490656849_18881952697196.jpg",
    "78965384_1461745953990836_37252888425178.jpg",
    "78982073_1461766890655409_57707553649915.jpg",
    "79017946_1468439956654769_59745162113109.jpg",
    "79021507_1461767683988663_33433339.jpg",
    "79025246_1461749523990479_56298776030043.jpg",
    "79106685_1468433183322113_32409392258597.jpg",
    "79151768_1468439969988101_19856255634773.jpg",
    "79333144_1461767423988689_16136260506951.jpg",
    "79475760_1461745997324165_39874990870196.jpg",
    "79657256_1468436413321790_41735856404048.jpg",
    "IMG-1469.JPG.jpg",
    "IMG-1470.JPG.jpg",
    "IMG-1472.JPG.jpg",
    "IMG-1490.JPG.jpg",
    "IMG-1508.JPG.jpg",
    "IMG-1516.JPG.jpg",
    "IMG-1517.JPG.jpg",
    "IMG-1591.JPG.jpg",
    "IMG-20171014-WA0022.jpg",
    "IMG-20171014-WA0023.jpg",
    "IMG-20171015-WA0000.jpg",
    "IMG-20171015-WA0002.jpg",
    "IMG-20171231-WA0026.jpg",
    "IMG-20171231-WA0027.jpg",
    "IMG-20171231-WA0029.jpg",
    "IMG-20171231-WA0030.jpg",
    "IMG-20171231-WA0031.jpg",
    "IMG-20180325-WA0003.jpg",
    "IMG-20180325-WA0006.jpg",
    "IMG-20181220-WA0015.jpg",
    "IMG-20181228-WA0019.jpg",
    "IMG-20181228-WA0020.jpg",
    "IMG-20181228-WA0021.jpg",
    "IMG-20181228-WA0024.jpg",
    "IMG-20181228-WA0027.jpg",
    "IMG-20181228-WA0028.jpg",
    "IMG-20181228-WA0029.jpg"
];
function categorizeImage(filename) {
    if (filename.includes("President") || filename.includes("Secretary") || filename.includes("Vice President") || filename.includes("Mr.") || filename.includes("Ms.") || filename.includes("elangovan")) return "leadership";
    if (filename.includes("aerospace-")) return "activities";
    if (filename.includes("IMG-2017") || filename.includes("IMG-2018")) return "events";
    if (filename.startsWith("20") || filename.startsWith("22") || filename.startsWith("25") || filename.startsWith("28") || filename.startsWith("29")) return "conferences";
    if (filename.startsWith("72") || filename.startsWith("74") || filename.startsWith("75") || filename.startsWith("77") || filename.startsWith("78") || filename.startsWith("79")) return "workshops";
    return "events";
}
const galleryItems = galleryImages.map((filename, index)=>({
        id: index + 1,
        src: `/gallery/${filename}`,
        alt: `IAAA Event - ${filename.split(".")[0]}`,
        category: categorizeImage(filename),
        title: filename.includes("President") || filename.includes("Secretary") || filename.includes("Vice President") || filename.includes("Mr.") || filename.includes("Ms.") ? filename.replace(/\.(jpg|JPG|png).*$/, "") : "IAAA Event",
        date: filename.includes("2017") ? "2017" : filename.includes("2018") ? "2018" : filename.includes("aerospace") ? "Recent" : "Archive",
        location: "Various Locations"
    }));
function GalleryPage() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [lightboxOpen, setLightboxOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const filteredItems = activeCategory === "all" ? galleryItems : galleryItems.filter((item)=>item.category === activeCategory);
    const openLightbox = (index)=>{
        setCurrentIndex(index);
        setLightboxOpen(true);
    };
    const closeLightbox = ()=>setLightboxOpen(false);
    const goToPrev = ()=>setCurrentIndex((prev)=>prev === 0 ? filteredItems.length - 1 : prev - 1);
    const goToNext = ()=>setCurrentIndex((prev)=>prev === filteredItems.length - 1 ? 0 : prev + 1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GalleryPage.useEffect": ()=>{
            if (!lightboxOpen) return;
            const handler = {
                "GalleryPage.useEffect.handler": (e)=>{
                    if (e.key === "Escape") closeLightbox();
                    if (e.key === "ArrowLeft") goToPrev();
                    if (e.key === "ArrowRight") goToNext();
                }
            }["GalleryPage.useEffect.handler"];
            window.addEventListener("keydown", handler);
            return ({
                "GalleryPage.useEffect": ()=>window.removeEventListener("keydown", handler)
            })["GalleryPage.useEffect"];
        }
    }["GalleryPage.useEffect"], [
        lightboxOpen,
        filteredItems.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-[320px] flex items-center overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-slate-900"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/gallery/page.tsx",
                        lineNumber: 117,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-10",
                        style: {
                            backgroundImage: "linear-gradient(rgba(255,255,255,0.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.12) 1px,transparent 1px)",
                            backgroundSize: "60px 60px"
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/gallery/page.tsx",
                        lineNumber: 118,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-80 h-80 bg-violet-400/10 rounded-full -translate-y-1/3 translate-x-1/3"
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/gallery/page.tsx",
                        lineNumber: 119,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4",
                                children: [
                                    "Events & ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-violet-400",
                                        children: "Moments"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/gallery/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 112
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/gallery/page.tsx",
                                lineNumber: 121,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-white/70 max-w-xl",
                                children: "Capturing IAAA's journey through conferences, workshops, clubs, and collaborations across India."
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/gallery/page.tsx",
                                lineNumber: 122,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/gallery/page.tsx",
                        lineNumber: 120,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/gallery/page.tsx",
                lineNumber: 116,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-2 mb-10",
                            children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveCategory(cat.id),
                                    className: `px-5 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat.id ? "bg-violet-600 text-white shadow-lg shadow-violet-200" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
                                    children: cat.label
                                }, cat.id, false, {
                                    fileName: "[project]/frontend/app/gallery/page.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/gallery/page.tsx",
                            lineNumber: 128,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-400 text-center mb-8",
                            children: [
                                filteredItems.length,
                                " photos"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/app/gallery/page.tsx",
                            lineNumber: 133,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3",
                            children: filteredItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>openLightbox(index),
                                    className: "group relative aspect-video rounded-xl overflow-hidden bg-slate-100 cursor-pointer border border-transparent hover:border-violet-300 hover:shadow-lg transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: item.src || "/placeholder.svg",
                                            alt: item.alt,
                                            fill: true,
                                            className: "object-cover transition-transform duration-500 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/gallery/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/app/gallery/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 right-0 p-3 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold text-white line-clamp-1",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/gallery/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-white/70",
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/app/gallery/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/app/gallery/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/frontend/app/gallery/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/gallery/page.tsx",
                            lineNumber: 135,
                            columnNumber: 9
                        }, this),
                        filteredItems.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-16 text-slate-400",
                            children: "No images in this category."
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/gallery/page.tsx",
                            lineNumber: 147,
                            columnNumber: 36
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/app/gallery/page.tsx",
                    lineNumber: 127,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/gallery/page.tsx",
                lineNumber: 126,
                columnNumber: 5
            }, this),
            lightboxOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-slate-950/97 flex items-center justify-center",
                onClick: closeLightbox,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            closeLightbox();
                        },
                        className: "absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10",
                        "aria-label": "Close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/gallery/page.tsx",
                            lineNumber: 153,
                            columnNumber: 203
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/gallery/page.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            goToPrev();
                        },
                        className: "absolute left-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10",
                        "aria-label": "Previous",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/gallery/page.tsx",
                            lineNumber: 154,
                            columnNumber: 194
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/gallery/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            goToNext();
                        },
                        className: "absolute right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10",
                        "aria-label": "Next",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/frontend/app/gallery/page.tsx",
                            lineNumber: 155,
                            columnNumber: 191
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/gallery/page.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl w-full mx-16",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: filteredItems[currentIndex].src || "/placeholder.svg",
                                    alt: filteredItems[currentIndex].alt,
                                    fill: true,
                                    className: "object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/gallery/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/gallery/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white font-semibold",
                                        children: filteredItems[currentIndex].title
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/gallery/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-6 mt-2 text-sm text-white/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/gallery/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 59
                                                    }, this),
                                                    filteredItems[currentIndex].date
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/app/gallery/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/app/gallery/page.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 59
                                                    }, this),
                                                    filteredItems[currentIndex].location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/app/gallery/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/gallery/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-white/40 mt-2",
                                        children: [
                                            currentIndex + 1,
                                            " / ",
                                            filteredItems.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/app/gallery/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/gallery/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/gallery/page.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/gallery/page.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(GalleryPage, "lTJrKuVaJpHtZqOdro9ENk/IAy8=");
_c = GalleryPage;
var _c;
__turbopack_context__.k.register(_c, "GalleryPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronLeft", [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Calendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Calendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Calendar", [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
]);
;
 //# sourceMappingURL=calendar.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Calendar",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_acf2a3f9._.js.map