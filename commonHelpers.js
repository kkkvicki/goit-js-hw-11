import{i as d,S as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const g="44181266-af3c2b6af304225fcb13b5858",m="https://pixabay.com/api/";function a(r){d.error({message:r,position:"topRight",backgroundColor:"#ef4040",messageColor:"white"})}async function h(r){const s=new URLSearchParams({key:g,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const t=await fetch(`${m}?${s}`);if(!t.ok)throw new Error("Failed to fetch images");return(await t.json()).hits}catch(t){throw console.error("Error fetching images:",t),t}}let c;function p(r,s){const t=r.map(i=>y(i)).join("");s.innerHTML=t,c?c.refresh():c=new f(".gallery a",{captionDelay:250,captionsData:"alt"})}function y({largeImageURL:r,webformatURL:s,tags:t,likes:i,views:e,comments:o,downloads:n}){return`
    <div class="photo-card">
      <a href="${r}" class="gallery-link">
        <img src="${s}" alt="${t}" class="gallery-image" />
        <div class="info">
          <ul class="info-list">
            <li><strong>Likes:</strong> ${i}</li>
            <li><strong>Views:</strong> ${e}</li>
            <li><strong>Comments:</strong> ${o}</li>
            <li><strong>Downloads:</strong> ${n}</li>
          </ul>
        </div>
      </a>
    </div>
  `}function L(r){r.classList.remove("hidden")}function w(r){r.classList.add("hidden")}function b(r){r.innerHTML=""}const v=document.querySelector("#search-form"),S=document.querySelector("#search-input"),l=document.querySelector("#image-gallery"),u=document.querySelector("#loading-indicator");v.addEventListener("submit",async r=>{r.preventDefault();const s=S.value.trim();if(!s){a("Please enter a request");return}b(l),L(u);try{const t=await h(s);t.length===0?a("Sorry, there are no images matching your search query. Please try again!"):p(t,l)}catch(t){a("Error"),console.error(t)}finally{w(u)}});
//# sourceMappingURL=commonHelpers.js.map
