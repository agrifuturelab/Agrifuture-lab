// Customize your brand and videos here. Use actual public URLs only.
window.AGRI_CONFIG = {facebookUrl:'https://www.facebook.com/agrifuturelabrbt',contactEmail:'',videos:[
 {title:'Inside the world of soil microbes',category:'Plant science',url:''},
 {title:'How a seed becomes a plant',category:'Science lab',url:''},
 {title:'The future of smart irrigation',category:'Future farming',url:''}
]};
window.CROPS = [
 {name:'Cotton',mr:'कापूस',emoji:'☁',type:'Fiber crop',season:'Warm season',stages:'Germination → vegetative growth → squaring → flowering → boll development → maturity',water:'Avoid prolonged waterlogging; critical demand often increases during flowering and boll development.',nutrients:'Use soil-test-guided nitrogen, phosphorus and potassium; monitor potassium and boron status where deficiency is suspected.',pests:'Scout for sucking pests and bollworms; use local threshold-based integrated pest management.',harvest:'Pick open, dry bolls carefully and keep lint clean.'},
 {name:'Ginger',mr:'आले',emoji:'🌿',type:'Rhizome crop',season:'Warm, humid',stages:'Sprouting → vegetative growth → rhizome initiation → rhizome bulking → maturity',water:'Maintain evenly moist, well-drained soil; standing water increases rhizome rot risk.',nutrients:'Base fertilizer and organic amendments on soil testing and local recommendations.',pests:'Use healthy seed rhizomes, drainage, crop rotation and monitoring for rhizome rot.',harvest:'Harvest timing depends on whether fresh or mature ginger is required.'},
 {name:'Garlic',mr:'लसूण',emoji:'🧄',type:'Bulb crop',season:'Cool season',stages:'Sprouting → leaf growth → bulb initiation → bulbing → curing',water:'Provide consistent moisture early; reduce irrigation near harvest as locally advised.',nutrients:'Soil-test-based nutrition; avoid excessive late nitrogen.',pests:'Monitor thrips and fungal diseases; maintain good sanitation.',harvest:'Harvest when foliage shows appropriate maturity, then cure under ventilation.'},
 {name:'Soybean',mr:'सोयाबीन',emoji:'🫘',type:'Legume',season:'Rainy / warm',stages:'Emergence → vegetative growth → flowering → pod setting → seed filling → maturity',water:'Flowering and pod filling are sensitive to moisture stress.',nutrients:'Check soil phosphorus, potassium and sulfur; appropriate rhizobial inoculation can aid nodulation.',pests:'Scout for defoliators, pod pests and foliar diseases; rotate crops.',harvest:'Harvest near physiological maturity at suitable grain moisture.'},
 {name:'Wheat',mr:'गहू',emoji:'🌾',type:'Cereal',season:'Cool season',stages:'Emergence → tillering → jointing → booting → heading → grain filling',water:'Crown root initiation, flowering and grain filling are important irrigation considerations.',nutrients:'Balance nitrogen with phosphorus and potassium based on soil test and yield target.',pests:'Monitor rusts, aphids and weeds using locally validated recommendations.',harvest:'Harvest mature, dry grain and store at safe moisture.'},
 {name:'Onion',mr:'कांदा',emoji:'🧅',type:'Bulb crop',season:'Season varies by region',stages:'Establishment → leaf growth → bulb initiation → bulb expansion → maturity',water:'Bulb formation needs uniform moisture; reduce water before harvest based on local conditions.',nutrients:'Balanced nitrogen, phosphorus, potassium and sulfur support growth; avoid excess late nitrogen.',pests:'Monitor thrips, purple blotch and basal rot; use integrated crop management.',harvest:'Harvest at suitable neck fall and cure bulbs before storage.'},
 {name:'Sugarcane',mr:'ऊस',emoji:'🎋',type:'Industrial grass',season:'Long-duration crop',stages:'Germination → tillering → grand growth → maturation',water:'Water needs vary widely by climate and stage; avoid prolonged drought or waterlogging.',nutrients:'Use soil testing, organic matter management and split nutrient applications as locally recommended.',pests:'Monitor borers, sucking pests and diseases; use healthy planting material.',harvest:'Harvest at suitable maturity for sugar recovery.'}
];

// Marathi crop details; educational summaries, not field-specific prescriptions.
window.CROP_DETAILS_MR = [
  {
    "season": "उष्ण हवामान; पाण्याचा निचरा होणारी जमीन",
    "stages": "उगवण → शाकीय वाढ → पाते → फुले → बोंडधारणा → पक्वता",
    "water": "फुलोरा व बोंड वाढीच्या काळात पाण्याचा ताण टाळा; पाणी साचू देऊ नका.",
    "nutrients": "माती परीक्षणानुसार N, P, K द्या; आवश्यकतेनुसार सूक्ष्मअन्नद्रव्यांची तपासणी करा.",
    "pests": "मावा, तुडतुडे, पांढरी माशी आणि बोंडअळ्यांचे नियमित निरीक्षण; आर्थिक नुकसान पातळीनुसार IPM करा.",
    "harvest": "पूर्ण उघडलेली, कोरडी बोंडे वेचून स्वच्छ कापूस साठवा."
  },
  {
    "season": "उबदार व दमट हवामान; उत्तम निचरा",
    "stages": "कोंब → शाकीय वाढ → कंद निर्मिती → कंद वाढ → पक्वता",
    "water": "जमीन ओलसर ठेवा, पण पाणी साचल्यास कंदकूज वाढू शकते.",
    "nutrients": "माती परीक्षणानुसार खत व सेंद्रिय पदार्थांचे नियोजन करा.",
    "pests": "निरोगी बियाणे-कंद, निचरा, फेरपालट व कंदकूज निरीक्षण यांना प्राधान्य द्या.",
    "harvest": "कोवळे किंवा परिपक्व आले या उपयोगानुसार काढणी ठरवा."
  },
  {
    "season": "थंड हंगाम",
    "stages": "उगवण → पानांची वाढ → गड्डा निर्मिती → गड्डा वाढ → वाळवणी",
    "water": "सुरुवातीला नियमित ओलावा; काढणीपूर्वी स्थानिक सल्ल्यानुसार पाणी कमी करा.",
    "nutrients": "माती परीक्षणावर आधारित पोषण; उशिरा जादा नत्र टाळा.",
    "pests": "फुलकिडे आणि बुरशीजन्य रोगांचे निरीक्षण; स्वच्छता व योग्य निचरा ठेवा.",
    "harvest": "पाने पक्व झाल्यावर काढणी करून हवेशीर ठिकाणी वाळवा."
  },
  {
    "season": "उबदार पावसाळी हंगाम",
    "stages": "उगवण → शाकीय वाढ → फुलोरा → शेंगा → दाणे भरणे → पक्वता",
    "water": "फुलोरा व दाणे भरण्याच्या काळात पाण्याचा ताण टाळा.",
    "nutrients": "मातीतील स्फुरद, पालाश, गंधक तपासा; योग्य रायझोबियम प्रक्रिया उपयुक्त ठरू शकते.",
    "pests": "पाने खाणाऱ्या अळ्या, शेंगावरील किडी व पानांवरील रोगांचे निरीक्षण करा.",
    "harvest": "दाणे योग्य पक्वतेला आल्यावर आणि आर्द्रता योग्य असताना काढणी करा."
  },
  {
    "season": "थंड हंगाम",
    "stages": "उगवण → फुटवे → खोड वाढ → ओंबी → दाणे भरणे",
    "water": "मुळांची वाढ, फुलोरा व दाणे भरण्याच्या अवस्थेत ओलावा महत्त्वाचा.",
    "nutrients": "माती परीक्षण व अपेक्षित उत्पादनानुसार संतुलित NPK द्या.",
    "pests": "तांबेरा, मावा व तणांचे नियमित निरीक्षण करा.",
    "harvest": "दाणे पक्व व कोरडे झाल्यावर काढणी व सुरक्षित साठवण करा."
  },
  {
    "season": "हंगाम प्रदेशानुसार बदलतो",
    "stages": "रोप स्थापन → पाने → कांदा निर्मिती → वाढ → पक्वता",
    "water": "कांदा वाढीच्या काळात समान ओलावा; काढणीपूर्वी पाणी कमी करा.",
    "nutrients": "NPK व गंधक यांचे संतुलन राखा; उशिरा जादा नत्र टाळा.",
    "pests": "फुलकिडे, करपा व मुळकूज यांचे निरीक्षण व एकात्मिक व्यवस्थापन करा.",
    "harvest": "योग्य मान पडल्यावर काढणी व वाळवणी करा."
  },
  {
    "season": "दीर्घकालीन पीक",
    "stages": "उगवण → फुटवे → जोमदार वाढ → पक्वता",
    "water": "हवामान व अवस्थेनुसार पाणी द्या; दुष्काळ आणि पाणी साचणे टाळा.",
    "nutrients": "माती परीक्षण, सेंद्रिय पदार्थ व विभागून खत देण्याचे नियोजन करा.",
    "pests": "खोडकिडे, रसशोषक किडी व रोगांसाठी निरोगी लागवड साहित्य व निरीक्षण वापरा.",
    "harvest": "साखर उताऱ्यासाठी योग्य पक्वतेला तोडणी करा."
  }
];
