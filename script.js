const menu=document.querySelector(".menu-btn"),nav=document.querySelector(".nav nav");
if(menu&&nav)menu.addEventListener("click",()=>nav.classList.toggle("open"));
const params=new URLSearchParams(location.search),service=document.querySelector("#service");
if(service&&params.get("service"))service.value=params.get("service");
const orderForm=document.querySelector("#orderForm");
if(orderForm)orderForm.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(orderForm),body=["COLLECTIVE BRANDING QUOTE REQUEST","",`Name: ${d.get("name")}`,`Business: ${d.get("business")}`,`Email: ${d.get("email")}`,`Phone: ${d.get("phone")}`,`Service: ${d.get("service")}`,`Quantity: ${d.get("quantity")||"Not specified"}`,`Needed by: ${d.get("neededBy")||"Not specified"}`,`Details: ${d.get("details")||"None"}`].join("\n");document.querySelector("#orderStatus").textContent="Opening your email app…";location.href=`mailto:?subject=${encodeURIComponent(`Quote Request — ${d.get("business")}`)}&body=${encodeURIComponent(body)}`});
const contactForm=document.querySelector("#contactForm");
if(contactForm)contactForm.addEventListener("submit",e=>{e.preventDefault();const d=new FormData(contactForm),body=`Name: ${d.get("name")}\nEmail: ${d.get("email")}\n\n${d.get("message")}`;document.querySelector("#contactStatus").textContent="Opening your email app…";location.href=`mailto:?subject=${encodeURIComponent("Website Contact — Collective Branding")}&body=${encodeURIComponent(body)}`});
