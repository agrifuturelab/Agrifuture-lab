/* Agri Future Lab v1.2: bilingual learning additions. No external dependencies. */
(()=>{
'use strict';
const cropExtras=[
{en:['Scout twice weekly during flowering and boll formation. Inspect undersides of leaves, squares and bolls; distinguish pest damage from natural shedding.','Use clean seed, field sanitation, beneficial insects and locally validated economic thresholds before choosing any approved control.'],mr:['फुलोरा व बोंडधारणेत आठवड्यातून दोनदा निरीक्षण करा. पानांची खालची बाजू, पाते आणि बोंडे तपासा.','निरोगी बियाणे, स्वच्छता, मित्रकीटक आणि स्थानिक आर्थिक नुकसान पातळीचा विचार करूनच मान्यताप्राप्त नियंत्रण निवडा.']},
{en:['Check drainage after every heavy rain and inspect plants for yellowing, wilting or soft rhizomes.','Use disease-free seed rhizomes, raised beds where appropriate, rotation and clean tools. Avoid transferring infected soil.'],mr:['मुसळधार पावसानंतर निचरा तपासा. पाने पिवळी पडणे, मर व मऊ कंद यांचे निरीक्षण करा.','रोगमुक्त बियाणे-कंद, योग्य सरी-वरंबे, फेरपालट आणि स्वच्छ अवजारे वापरा. बाधित माती पसरू देऊ नका.']},
{en:['Monitor thrips by examining young folded leaves; distinguish nutrient stress from pest injury.','Use healthy cloves, good spacing and ventilation; avoid waterlogging and excessive late nitrogen.'],mr:['कोवळ्या दुमडलेल्या पानांत फुलकिड्यांचे निरीक्षण करा; अन्नद्रव्य कमतरता आणि कीड लक्षणे वेगळी ओळखा.','निरोगी पाकळ्या, योग्य अंतर व हवा खेळती राहील अशी लागवड करा; पाणी साचणे व उशिरा जादा नत्र टाळा.']},
{en:['Inspect foliage and pods regularly from flowering through seed filling. Record pest numbers and damage.','Use suitable crop rotation, clean seed, balanced nutrition and locally recommended threshold-based IPM.'],mr:['फुलोऱ्यापासून दाणे भरेपर्यंत पाने व शेंगा नियमित तपासा. किडींची संख्या आणि नुकसान नोंदवा.','फेरपालट, स्वच्छ बियाणे, संतुलित पोषण आणि स्थानिक शिफारशीनुसार IPM करा.']},
{en:['Watch for rust pustules, aphid colonies and weed competition, especially during active growth.','Choose locally recommended varieties, timely sowing and field sanitation; confirm disease before treatment.'],mr:['तांबेराचे ठिपके, माव्याचे समूह आणि तणस्पर्धा यांचे वाढीच्या काळात निरीक्षण करा.','स्थानिक शिफारशीनुसार वाण, वेळेवर पेरणी व स्वच्छता पाळा; उपचाराआधी रोगनिदान निश्चित करा.']},
{en:['Check leaves for thrips and purple blotch; inspect bulbs and roots where plants wilt.','Use clean seedlings, balanced irrigation, crop rotation and careful curing to reduce losses.'],mr:['पानांवर फुलकिडे व करपा तपासा; झाडे कोमेजल्यास मुळे व कांदे पाहा.','निरोगी रोपे, संतुलित सिंचन, फेरपालट व योग्य वाळवणी यांना प्राधान्य द्या.']},
{en:['Inspect shoots and internodes for borer symptoms; record affected clumps and patches.','Use healthy setts, field sanitation, balanced nutrients and locally validated monitoring thresholds.'],mr:['कोंब व पेरांवर खोडकिडीची लक्षणे तपासा; बाधित बेटे व पट्टे नोंदवा.','निरोगी बेणे, स्वच्छता, संतुलित खते आणि स्थानिक निरीक्षण निकष वापरा.']}
];
const science=[
{en:['Soil microbiome','How bacteria, fungi and organic matter influence nutrient cycling and soil structure.','Explore the science','Microbes decompose residues and help transform nutrients. Outcomes depend on soil moisture, temperature, pH and management.'],mr:['मातीतील सूक्ष्मजीव','जिवाणू, बुरशी आणि सेंद्रिय पदार्थ अन्नद्रव्यांचे चक्र व मातीची रचना प्रभावित करतात.','विज्ञान समजून घ्या','सूक्ष्मजीव अवशेषांचे विघटन करतात व अन्नद्रव्यांचे रूपांतर घडवतात. परिणाम ओलावा, तापमान, सामू आणि व्यवस्थापनावर अवलंबून असतो.']},
{en:['प्रकाशसंश्लेषण','पाने सूर्यप्रकाश, कार्बन डायऑक्साइड व पाणी वापरून रासायनिक ऊर्जा तयार करतात.','विज्ञान समजून घ्या','हरितद्रव्य प्रकाश शोषते. वनस्पती ही ऊर्जा वापरून साखर तयार करतात; पाणी व अन्नद्रव्यांचा ताण ही प्रक्रिया मर्यादित करतो.'],mr:['प्रकाशसंश्लेषण','पाने सूर्यप्रकाश, कार्बन डायऑक्साइड व पाणी वापरून रासायनिक ऊर्जा तयार करतात.','विज्ञान समजून घ्या','हरितद्रव्य प्रकाश शोषते. वनस्पती ही ऊर्जा वापरून साखर तयार करतात; पाणी व अन्नद्रव्यांचा ताण ही प्रक्रिया मर्यादित करतो.']},
{en:['Seed germination','Understand imbibition, radicle emergence and early seedling establishment.','Explore the science','Viable seeds require suitable moisture, oxygen and temperature; some species have additional light or dormancy requirements.'],mr:['बियाणे उगवण','पाणी शोषण, प्राथमिक मुळाचा उदय आणि रोपांची सुरुवातीची वाढ समजून घ्या.','विज्ञान समजून घ्या','जिवंत बियाण्यास योग्य ओलावा, प्राणवायू व तापमान आवश्यक असते. काही पिकांत प्रकाश किंवा सुप्तावस्थेचेही निकष असतात.']}
];
science[1].en=['Photosynthesis','How leaves turn sunlight, carbon dioxide and water into chemical energy.','Explore the science','Chlorophyll absorbs light. Plants use the captured energy to fix carbon into sugars; water and nutrient stress can limit the process.'];
function isMr(){return document.documentElement.lang==='mr'}
function localizeScience(){
 document.querySelectorAll('#science .feature').forEach((el,i)=>{
  const s=science[i];if(!s)return;const t=s[isMr()?'mr':'en'];
  const h=el.querySelector('h3'),p=el.querySelector(':scope > p'),summary=el.querySelector('summary'),detail=el.querySelector('details p');
  if(h)h.textContent=t[0];if(p)p.textContent=t[1];if(summary)summary.textContent=t[2];if(detail)detail.textContent=t[3];
 });
 const tabs={fert:['Fertilizer nutrients','खतातील अन्नद्रव्ये'],spray:['Spray dilution','फवारणी द्रावण'],land:['Land converter','क्षेत्रफळ रूपांतरण'],seed:['Seed requirement','बियाणे आवश्यकता']};
 document.querySelectorAll('#toolTabs button').forEach(b=>{const a=tabs[b.dataset.tool];if(a)b.textContent=a[isMr()?1:0]});
}
function appendCropExtra(){
 const detail=document.getElementById('cropDetail');if(!detail||detail.hidden)return;
 const title=detail.querySelector('h3')?.textContent||'';
 const index=window.CROPS?.findIndex(c=>title.includes('— '+c.name));
 if(index<0||!cropExtras[index])return;
 detail.querySelector('.v12-extra')?.remove();
 const a=cropExtras[index][isMr()?'mr':'en'];
 const box=document.createElement('section');box.className='v12-extra';
 const h=document.createElement('h4');h.textContent=isMr()?'निरीक्षण आणि एकात्मिक व्यवस्थापन (IPM)':'Scouting and integrated pest management (IPM)';
 const ul=document.createElement('ul');a.forEach(s=>{const li=document.createElement('li');li.textContent=s;ul.append(li)});
 const p=document.createElement('p');p.className='notice';p.textContent=isMr()?'ही माहिती शैक्षणिक आहे. कीटकनाशके, मात्रा किंवा उपचारासाठी स्थानिक कृषी तज्ज्ञ व अधिकृत लेबलचा आधार घ्या.':'Educational only. Confirm any pesticide, dose or treatment with approved labels and local agricultural experts.';
 box.append(h,ul,p);detail.append(box);
}
document.getElementById('cropGrid')?.addEventListener('click',e=>{if(e.target.closest('button.crop'))appendCropExtra()});
document.getElementById('lang')?.addEventListener('click',()=>{localizeScience();appendCropExtra()});
localizeScience();
})();