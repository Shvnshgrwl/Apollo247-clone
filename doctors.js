var Top= [
    {
        name:"Covid Consultation",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/2ffe13c1-efa3-4361-9dde-afafb53d4553.jpg",
        specialist:"Treatment of Covid-19",
        consult:"Cough,Fever, Breathlessness"
    },
    {
        name:"Dermatology",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/ee249e8a-950a-489c-8a33-8846889831f5.jpg",
        specialist:"Specialists for skin and hair treatments",
        consult:"Rashes,Pimples,Acne, Hairfall,Dandruff"
    },
    {
        name:"General Physician/ Internal Medicine",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_general_medicine.png",
        specialist:"Managing acute medical Conditions",
        consult:"Typhoid,Abdominal Pain, Migraine,Infections"
    },
    {
        name:"Paediatrics",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_paediatrics.png",
        specialist:"Specialists to care and treat Children",
        consult:"Constipation,Puberty,Nutrition,Autism"
    },
];
Top.map(function(items){
  var box=document.createElement("div");

   var nam=document.createElement("div")
   nam.setAttribute("class","nam")
    var Name=document.createElement("p")
   Name.textContent=items.name;
  
  nam.append(Name)

//   var imag=document.createElement("div")
//   imag.setAttribute("class","Img")
  var Image=document.createElement("img")
  Image.setAttribute("src",items.image_url);
 
//    imag.append(Image)

   var spec=document.createElement("div")
   spec.setAttribute("class","spl")
  var Special=document.createElement("p")
  Special.textContent=items.specialist;
  
  spec.append(Special)

  var cou=document.createElement("div")
  cou.setAttribute("class","cous")
  var Cousult=document.createElement("p")
  Cousult.textContent=items.consult;
 
  cou.append(Cousult)
// console.log(Name,Image,Special,Cousult)

  box.append(nam,Image,spec,cou)
document.querySelector(".order").append(box)
 
});


//   var special=JSON.parse(localStorage.getItem("Specialties"))||[];

var special=[
    {
        name:"Allergist and Clinical Immunologist",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/bdf0cf0d-754e-4254-aaf7-fdc7aedd7c35.jpg",
        specialist:"Manage allergies and treat immunity",
        consult:"Recurring infections,Immunity deficiency",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Apollo Family Health Plan",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/7236eab5-ea3c-4691-8362-c1fec2198596.jpg",
        specialist:"Book Packages with your favorite doctors",
        consult:"Cold,Cough,fever,Headache,Skin rashes,St",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Bariatrics",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_bariatrics.png",
        specialist:"For obesity-related disorders",
        consult:"Overweight,BMI over 30",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Cardiology",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/191336fb-173d-456b-b55b-c00669e35feb.jpg",
        specialist:"For heart and blood pressure problems",
        consult:"Chest Pain,Heart Failure,Cholesterol",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Cold,Cough and Fever",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/e5a03790-7cef-4f9c-909c-e45b658a5a6d.jpg",
        specialist:"For common health concerns",
        consult:"Fever,Eye Infection,Stomach Ache,Headache",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Colerectal Surgery",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/62b70a73-837b-4b65-9b35-9b5ce04da79a.jpg",
        specialist:"For disorders of rectum,anus,and colon",
        consult:"Inflammatory bowel disease,Fistula,Intestinal blockage",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Counseling",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/34ae6abd-5a9d-40d1-98be-454ac94925c7.jpg",
        specialist:"Emotional or mental health difficulties",
        consult:"Depression,Anxiety,Mental Stress,Trauma",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Covid Recover Clinic",
        image_url:
        "https://newassets.apollo247.com/specialties/83163700-97e1-47cd-a715-5941fd708a03.png",
        specialist:"Treatment of Post-covid Mid/long term illness",
        consult:"Post-covid breathlessness,Chest pain",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Critical Care",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_Critical_Care.png",
        specialist:"For life-threatening conditions",
        consult:"ICU releated,High-risk patients,Hypertension",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"De-addiction Management",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/dc6baffd-4104-4a38-a8b2-0f262d7270aa.jpg",
        specialist:"Specialists to help quit smoking,alcohol",
        consult:"Quit-smoking,Drugs,Tobacco,Alcohol",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Dentist",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_Dentist.png",
        specialist:"Specialists for dental issues and treatments",
        consult:"Toothache,Mouth,Ulcer,Crooked Teeth",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Diabetology",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_diabetology.png",
        specialist:"Managing all kinds of diabetes",
        consult:"Type 1 & Type 2 diabetes,Obesity,Anemia",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Dietetics",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_dietician.png",
        specialist:"Managing nutrition and diet regulation",
        consult:"Loss of appetite,Pregnancy Diet,Weight loss",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"ENT",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_ent.png",
        specialist:"ENT specialists for Ear,Nose and Throat",
        consult:"Earache,Bad breath,Swollen neck,Vertigo",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Endocrine Surgery",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/9958ce34-1490-42da-a76d-f5304b873104.jpg",
        specialist:"For Surgeries of endocrine glands",
        consult:"Thyroid cancer,Adrenal gland tumours,Conn syndrome",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Endocrinology",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_diabetology.png",
        specialist:"For diabets and hormonal problems",
        consult:"Thyroid PCOS/PCOD,Growth issues",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Family Physician",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_familyPhysician.png",
        specialist:"For maintaining a healthy lifestyle",
        consult:"Routine check-ups,Health-risk assessments",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Gastroenterology/GI medicine",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_gastroenterology.png",
        specialist:"Managing digestive health.",
        consult:"Vomiting,Acidity,Stomach ulcers,Swallowing",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"General & Laparoscopic Surgeon",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/4466dab4-c2b4-4961-b34e-c87673b1e9cd.jpg",
        specialist:"For general and minimally invasive surgeries",
        consult:"Cysts,Tumors,Appendicitis,Keyhole Surgery",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"General Physician Kavach",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_General_Physician_Kavach.png",
        specialist:"",
        consult:"",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"General Surgery",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_general_surgeon.png",
        specialist:"For all kinds of surgeries",
        consult:"Hemia,Abdominal Surgery",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Haematology",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_haematology.png",
        specialist:"For diseases related to blood",
        consult:"Blood diseases",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Hepatology",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/daf875ee-2364-4edd-9eb9-7189e09fc25a.jpg",
        specialist:"For liver,gallbladder,billary tree and pancreas disorders",
        consult:"Liver disease,Liver cancer",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Infectious Disease",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_infectiousDiseases.png",
        specialist:"For disease caused by microorganisms",
        consult:"Severe headache,Fever,Animal bite",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Infertility",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/e23814fe-e2e5-4ef3-9d18-65d2bb245440.jpg",
        specialist:"Specialists to help get pregant",
        consult:"IVF,Miscarriage,Egg-freezing",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Lab Report Analysis",
        image_url:
       "https://prodaphstorage.blob.core.windows.net/specialties/6b9f6dcb-8c1b-4da6-b9bb-6fd1294c8aaf.jpg" ,
        specialist:"Understand your reports and treatments",
        consult:"Blood Reports,Ultrasound Reports,MRI Scans",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Medical Oncology",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_oncology.png",
        specialist:"Cancer treatment using various techniques",
        consult:"Immunotherrapy,Hormonal therapy,Chemotherapy",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Nephrology",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_nephrology.png",
        specialist:"Managing all kidney related issues",
        consult:"Kidney Failure,Acute Renal Faliyre,Dialysis",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Neurology",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_neurology.png",
        specialist:"Managing issues of the nervous system,brain",
        consult:"Stroke,Dementia,Epilepsy,Movement issues",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Neurosurgery",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/362e133a-17cb-478f-a447-69bdf0bdddc0.jpg",
        specialist:"For surgical treatment of nervous system disorders",
        consult:"Tumor,Sezures,Spine Surgery",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Nuclear Medicine Physician",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/c188f977-89d2-427c-8142-f67a47138462.jpg",
        specialist:"Using radioactive materials to treat issues",
        consult:"Scans-Breast,Brain,Bone,Thyroid,Kidney",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Obstetrics & Gynaecology",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_obstetrics_and_gynaecology.png",
        specialist:"For women health issues and surgeries",
        consult:"Irregular periods,Pregnancy,PCOD/PCOS",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Ophthalmology",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_opthalmology.png",
        specialist:"Ophthalmologist for eye care and surgeries",
        consult:"Cataract,Blurred vision,Glaucoma,Eye pain",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Oral & Maxillofacial Surgery",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_OMSurgery.png",
        specialist:"For reconstructive surgery of oral cavity,face,jaws",
        consult:"Teeth Removal,Cleft Lip,Cancer of neck,Jaw",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Orthopaedics",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_orthopaedics.png",
        specialist:"Managing issuses of bones,joints,knees",
        consult:"Knee Pain,Shoulder Pain,Bone deformity",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Pain Management",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_Pain_Management.png",
        specialist:"For management of all types of pain",
        consult:"Acute pain,Chronic pain,Cancer pain",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Physiotherapy and Rehabilitation",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/244b0282-e14c-42f0-af6e-613bd8af6934.jpg",
        specialist:"For facilitating recovery from illness/injuries",
        consult:"Post-Covid,Recovery from surgeries",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Plastic Surgery",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_plastic_surgery.png",
        specialist:"For restoration,reconstruction,alteration of human body",
        consult:"Cosmetic surgery,Burns,Rhinoplasty",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Podiatry",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_podiatry.png",
        specialist:"For treating foot,ankle and leg disorders",
        consult:"Foot injury,Ankle injury,Diabetic foot",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Psychiatry",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_psychiatrist.png",
        specialist:"Specialists to help treat mental health",
        consult:"Anxiety,Depression,Stress,OCD,Biopolar",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Psychology",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/a7140a26-4955-4c50-bb6a-3299b8de886c.jpg",
        specialist:"Therapists for helping in mental health issuse",
        consult:"Phobias,Family and Personal Counselling",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
    name:" Pulmonology/Respiratory Medicine",
    image_url:
    "https://newassets.apollo247.com/specialties/ic_pulmonology.png",
    specialist:"Managing lung and respiratory disorders",
    consult:"Chest pain,Breathing difficulty,Asthma,TB",
    logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
    name:"Radiation Oncology",
    image_url:
    "https://prodaphstorage.blob.core.windows.net/specialties/9807866d-b385-47b0-8d65-47b7bae3c3cb.jpg",
    specialist:"Treating radiation therapy to treat cancer",
    consult:"Cancer-eye,Prostate,Breast,Cervix",
    logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
    name:"Radiology",
    image_url:
    "https://newassets.apollo247.com/specialties/ic_radiology.png",
    specialist:"For medical imaging",
    consult:"Knee injury,Cancer,Yumor",
    logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
    name:"Rheumatology",
    image_url:
    "https://newassets.apollo247.com/specialties/ic_rheumatology.png",
    specialist:"For treatment of rheumatic diseases",
    consult:"Rheumatoid arthritis,Osteoporosis,Gout",
    logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
    name:"Sexual Health",
    image_url:
    "https://prodaphstorage.blob.core.windows.net/specialties/33100aa2-2b45-4671-b7d7-68c2e22cd049.jpg",
    specialist:"For treatment of Sexual Disorders",
    consult:"Painful intercourse,Loss of sexual desire",
    logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
    name:"Sleep Medicine",
    image_url:
    "https://prodaphstorage.blob.core.windows.net/specialties/bb67daa7-5449-4987-b185-c907b19128c8.jpg",
    specialist:"Diagnosis & treatment of sleep disorders",
    consult:"Insomnia,Constant Fatigue,Snoring",
    logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
    name:"Speech Therapy",
    image_url:
    "https://prodaphstorage.blob.core.windows.net/specialties/f752370c-67cc-4c2b-9387-3529f3e34ac5.jpg",
    specialist:"Treatment of speech disorders",
    consult:"Stuttering,repeating sound,Elongating words",
    logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Spine Surgery",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/bfac9eaf-e1c1-4a64-b10a-e5b33ed1567c.jpg",
        specialist:"For surgeries of the spine",
        consult:"Back pain,Neck pain",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Surgical Gastroebterology",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/b4be465c-eb0e-4295-9460-ebb6b526fa05.jpg",
        specialist:"For surgical treatment of the digetive system",
        consult:"Surgery Stomach,Livers,Rectal bleeding",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Surgical Oncology",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/e835ec4b-cb17-47a8-91bb-c5cf207a1db2.jpg",
        specialist:"For diagnosis & surgical treatment of cancer",
        consult:"Prevent cancer,Removal of cancerous tumor",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Transplant Surgery",
        image_url:
        "https://prodaphstorage.blob.core.windows.net/specialties/86b4284f-3358-44e4-a85c-2ce3de5b8c4f.jpg",
        specialist:"Managing organ replacement/transplant",
        consult:"Kidney failure,Lung disease,Heart disease",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Urology",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_urology.png",
        specialist:"For disorders of urinary tract and male reproductive organs",
        consult:"Urinary infection,Kidney stones,Traumatic injury",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },
    {
        name:"Vascular & Endovascular Surgery",
        image_url:
        "https://newassets.apollo247.com/specialties/ic_vascularsurgery.png",
        specialist:"For minimally invasive surgical treatment of blood vessel",
        consult:"Blood clots,Ulcers,Leg swelling",
        logo:"https://newassets.apollo247.com/images/ic_arrow_right.svg"
    },

];

special.map(function(elem){
var div=document.createElement("div")  

div.setAttribute("class","cont1")

var image=document.createElement("div");
image.setAttribute("class","im")

var img=document.createElement("img")
img.setAttribute("src",elem.image_url)
img.setAttribute("class","img")

image.append(img)

var box=document.createElement("div")
box.setAttribute("class","box")
var box1=document.createElement("div")
box1.setAttribute("class","box1")
   var nam=document.createElement("div")
   nam.setAttribute("class","nam1")

   var n=document.createElement("div")
   n.setAttribute("class","n")
      var name=document.createElement("p")
     name.textContent=elem.name
    //  name.setAttribute("class","nam")
     n.append(name)
    
   var sp=document.createElement("div")
   sp.setAttribute("class","spl1")
     var special=document.createElement("p")
     special.textContent=elem.specialist
     special.setAttribute("class","spl1")
  
     sp.append(special)
 
   nam.append(n,sp)
   var lo=document.createElement("div")
//    lo=document.setAttribute("class","l")
        var logo=document.createElement("img")
       logo.setAttribute("src",elem.logo)
       logo.setAttribute("class","lo")
       lo.append(logo)  
box1.append(nam,lo)
var box2=document.createElement("hr")
box2.setAttribute("class","box2")
var box3=document.createElement("div")
box3.setAttribute("class","box3")
  var con=document.createElement("div")
  var cons=document.createElement("p")
  cons.textContent=elem.consult
  con.append(cons)
box3.append(con)
box.append(box1,box2,box3)
div.append(image,box)
document.querySelector(".container1").append(div)
})
function change1(){
    var d1=document.getElementById("b1");
    d1.style.display="block";
    var d2=document.getElementById("b2");
    d2.style.display="none";
}
function change2(){
    var d1=document.getElementById("b1");
    d1.style.display="none";
    var d2=document.getElementById("b2");
    d2.style.display="block"
} 