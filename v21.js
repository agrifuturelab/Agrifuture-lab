/* Agri Future Lab: bilingual field planning calculators */
(()=>{
'use strict';
const root=document.getElementById('fieldPlanning');
if(!root)return;
const mr=()=>document.documentElement.lang==='mr';
const t=(en,mar)=>mr()?mar:en;
const area=4046.8564224;
const configs=[
{id:'population',name:['Plant population estimator','झाडांची संख्या मोजा'],description:['Estimate planting positions from row and plant spacing.','ओळीतील व दोन झाडांतील अंतरावरून अंदाजे लागवड जागा मोजा.'],fields:[['acres','Area (acres)','क्षेत्र (एकर)',1],['row','Row spacing (cm)','ओळीतील अंतर (सेमी)',90],['plant','Plant spacing (cm)','झाडांतील अंतर (सेमी)',45]]},
{id:'drip',name:['Drip irrigation runtime','ठिबक सिंचन कालावधी'],description:['Estimate run time using emitter count, flow rate and target water volume.','ड्रिपरची संख्या, प्रवाह आणि पाण्याचे प्रमाण यावरून वेळ मोजा.'],fields:[['litres','Target water (litres)','आवश्यक पाणी (लिटर)',1000],['emitters','Number of emitters','ड्रिपर संख्या',100],['flow','Flow per emitter (L/hour)','प्रति ड्रिपर प्रवाह (लि./तास)',4]]},
{id:'tank',name:['Spray tank count','फवारणी टाक्यांची संख्या'],description:['Estimate full and partial tanks for a planned spray volume.','एकूण फवारणीसाठी किती टाक्या लागतील ते मोजा.'],fields:[['total','Total spray volume (litres)','एकूण द्रावण (लिटर)',200],['capacity','Tank capacity (litres)','टाकी क्षमता (लिटर)',15]]}
];
function node(tag,cls,content){const e=document.createElement(tag);if(cls)e.className=cls;if(content!==undefined)e.textContent=content;return e}
function build(){root.replaceChildren();root.append(node('h2','',t('Field planning calculators','शेती नियोजन कॅल्क्युलेटर')),node('p','edu-intro',t('Transparent estimates for farm planning; enter your own measurements.','शेती नियोजनासाठी अंदाज; तुमच्या शेतातील खरी मोजमापे भरा.')));
for(const c of configs){const section=node('section','edu-section');section.append(node('h3','',t(...c.name)),node('p','',t(...c.description)));const grid=node('div','adv-form');const inputs={};for(const [id,en,mar,value] of c.fields){const label=node('label','adv-field',t(en,mar));const input=document.createElement('input');input.type='number';input.min='0';input.step='any';input.value=value;input.setAttribute('aria-label',t(en,mar));label.append(input);grid.append(label);inputs[id]=input}const result=node('div','adv-result');result.setAttribute('aria-live','polite');const calc=()=>{const v={};for(const [key,el] of Object.entries(inputs)){if(el.value.trim()===''||!Number.isFinite(Number(el.value))||Number(el.value)<=0){result.textContent=t('Enter positive values in all fields.','सर्व ठिकाणी शून्यापेक्षा मोठे योग्य आकडे भरा.');return}v[key]=Number(el.value)}
if(c.id==='population'){const count=v.acres*area/(v.row*v.plant/10000);result.textContent=t('Estimated planting positions: ','अंदाजे लागवड जागा: ')+Math.floor(count).toLocaleString()+t(' plants (before paths and gaps)',' झाडे (रस्ते व मोकळी जागा वगळण्यापूर्वी)')}
if(c.id==='drip'){const hrs=v.litres/(v.emitters*v.flow);result.textContent=t('Estimated runtime: ','अंदाजे वेळ: ')+hrs.toFixed(2)+t(' hours (',' तास (')+(hrs*60).toFixed(0)+t(' minutes)',' मिनिटे)')}
if(c.id==='tank'){const full=Math.floor(v.total/v.capacity),partial=v.total-full*v.capacity;result.textContent=t('Full tanks: ','पूर्ण टाक्या: ')+full+t(' · Remaining volume: ',' · उरलेले द्रावण: ')+partial.toFixed(2)+t(' L · Total fills: ',' लि. · एकूण भरणे: ')+Math.ceil(v.total/v.capacity)}};
Object.values(inputs).forEach(el=>el.addEventListener('input',calc));section.append(grid,result);if(c.id==='drip')section.append(node('p','adv-warning',t('Assumes constant emitter discharge and no pressure variation. Check actual flow and irrigation needs.','ड्रिपरचा प्रवाह स्थिर गृहीत धरला आहे. प्रत्यक्ष प्रवाह व पाण्याची गरज तपासा.')));if(c.id==='tank')section.append(node('p','adv-warning',t('Volume calculation only. Follow pesticide labels and safety guidance.','फक्त द्रावणाचे गणित. औषधाच्या लेबलवरील सूचना पाळा.')));root.append(section);calc()}}
document.getElementById('lang')?.addEventListener('click',build);build();
})();
