"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Sparkles, Star } from "lucide-react";
import InteractiveButton from "@/components/InteractiveButton";
import { Integrations } from "@/components/integrations";

// 1. Google SVG Logo
const GoogleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    overflow="hidden"
    viewBox="0 0 268.152 273.883"
    className={className}
  >
    <defs>
      <linearGradient id="google_stats_a"><stop offset="0" stopColor="#0fbc5c"/><stop offset="1" stopColor="#0cba65"/></linearGradient>
      <linearGradient id="google_stats_g"><stop offset=".231" stopColor="#0fbc5f"/><stop offset=".312" stopColor="#0fbc5f"/><stop offset=".366" stopColor="#0fbc5e"/><stop offset=".458" stopColor="#0fbc5d"/><stop offset=".54" stopColor="#12bc58"/><stop offset=".699" stopColor="#28bf3c"/><stop offset=".771" stopColor="#38c02b"/><stop offset=".861" stopColor="#52c218"/><stop offset=".915" stopColor="#67c30f"/><stop offset="1" stopColor="#86c504"/></linearGradient>
      <linearGradient id="google_stats_h"><stop offset=".142" stopColor="#1abd4d"/><stop offset=".248" stopColor="#6ec30d"/><stop offset=".312" stopColor="#8ac502"/><stop offset=".366" stopColor="#a2c600"/><stop offset=".446" stopColor="#c8c903"/><stop offset=".54" stopColor="#ebcb03"/><stop offset=".616" stopColor="#f7cd07"/><stop offset=".699" stopColor="#fdcd04"/><stop offset=".771" stopColor="#fdce05"/><stop offset=".861" stopColor="#ffce0a"/></linearGradient>
      <linearGradient id="google_stats_f"><stop offset=".316" stopColor="#ff4c3c"/><stop offset=".604" stopColor="#ff692c"/><stop offset=".727" stopColor="#ff7825"/><stop offset=".885" stopColor="#ff8d1b"/><stop offset="1" stopColor="#ff9f13"/></linearGradient>
      <linearGradient id="google_stats_b"><stop offset=".231" stopColor="#ff4541"/><stop offset=".312" stopColor="#ff4540"/><stop offset=".458" stopColor="#ff4640"/><stop offset=".54" stopColor="#ff473f"/><stop offset=".699" stopColor="#ff5138"/><stop offset=".771" stopColor="#ff5b33"/><stop offset=".861" stopColor="#ff6c29"/><stop offset="1" stopColor="#ff8c18"/></linearGradient>
      <linearGradient id="google_stats_d"><stop offset=".408" stopColor="#fb4e5a"/><stop offset="1" stopColor="#ff4540"/></linearGradient>
      <linearGradient id="google_stats_c"><stop offset=".132" stopColor="#0cba65"/><stop offset=".21" stopColor="#0bb86d"/><stop offset=".297" stopColor="#09b479"/><stop offset=".396" stopColor="#08ad93"/><stop offset=".477" stopColor="#0aa6a9"/><stop offset=".568" stopColor="#0d9cc6"/><stop offset=".667" stopColor="#1893dd"/><stop offset=".769" stopColor="#258bf1"/><stop offset=".859" stopColor="#3086ff"/></linearGradient>
      <linearGradient id="google_stats_e"><stop offset=".366" stopColor="#ff4e3a"/><stop offset=".458" stopColor="#ff8a1b"/><stop offset=".54" stopColor="#ffa312"/><stop offset=".616" stopColor="#ffb60c"/><stop offset=".771" stopColor="#ffcd0a"/><stop offset=".861" stopColor="#fecf0a"/><stop offset=".915" stopColor="#fecf08"/><stop offset="1" stopColor="#fdcd01"/></linearGradient>
      <linearGradient xlinkHref="#google_stats_a" id="google_stats_s" x1="219.7" x2="254.467" y1="329.535" y2="329.535" gradientUnits="userSpaceOnUse"/>
      <radialGradient xlinkHref="#google_stats_b" id="google_stats_m" cx="109.627" cy="135.862" r="71.46" fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 1.043 1.45573 2.55542 290.525 -400.634)" gradientUnits="userSpaceOnUse"/>
      <radialGradient xlinkHref="#google_stats_c" id="google_stats_n" cx="45.259" cy="279.274" r="71.46" fx="45.259" fy="279.274" gradientTransform="matrix(-3.5126 -4.45809 -1.69255 1.26062 870.8 191.554)" gradientUnits="userSpaceOnUse"/>
      <radialGradient xlinkHref="#google_stats_d" id="google_stats_l" cx="304.017" cy="118.009" r="47.854" fx="304.017" fy="118.009" gradientTransform="matrix(2.06435 0 0 2.59204 -297.679 -151.747)" gradientUnits="userSpaceOnUse"/>
      <radialGradient xlinkHref="#google_stats_e" id="google_stats_o" cx="181.001" cy="177.201" r="71.46" fx="181.001" fy="177.201" gradientTransform="matrix(-.24858 2.08314 2.96249 .33417 -255.146 -331.164)" gradientUnits="userSpaceOnUse"/>
      <radialGradient xlinkHref="#google_stats_f" id="google_stats_p" cx="207.673" cy="108.097" r="41.102" fx="207.673" fy="108.097" gradientTransform="matrix(-1.2492 1.34326 -3.89684 -3.4257 880.501 194.905)" gradientUnits="userSpaceOnUse"/>
      <radialGradient xlinkHref="#google_stats_g" id="google_stats_r" cx="109.627" cy="135.862" r="71.46" fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 -1.043 1.45573 -2.55542 290.525 838.683)" gradientUnits="userSpaceOnUse"/>
      <radialGradient xlinkHref="#google_stats_j" id="google_stats_j" cx="154.87" cy="145.969" r="71.46" fx="154.87" fy="145.969" gradientTransform="matrix(-.0814 -1.93722 2.92674 -.11625 -215.135 632.86)" gradientUnits="userSpaceOnUse"/>
      <filter id="google_stats_q" width="1.097" height="1.116" x="-.048" y="-.058" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation="1.701"/></filter>
      <filter id="google_stats_k" width="1.033" height="1.02" x="-.017" y="-.01" colorInterpolationFilters="sRGB"><feGaussianBlur stdDeviation=".242"/></filter>
      <clipPath id="google_stats_i" clipPathUnits="userSpaceOnUse"><path d="M371.378 193.24H237.083v53.438h77.167c-1.241 7.563-4.026 15.003-8.105 21.786-4.674 7.773-10.451 13.69-16.373 18.196-17.74 13.498-38.42 16.258-52.783 16.258-36.283 0-67.283-23.286-79.285-54.928-.484-1.149-.805-2.335-1.197-3.507a81.115 81.115 0 0 1-4.101-25.448c0-9.226 1.569-18.057 4.43-26.398 11.285-32.897 42.985-57.467 80.179-57.467 7.481 0 14.685.884 21.517 2.648a77.668 77.668 0 0 1 33.425 18.25l40.834-39.712c-24.839-22.616-57.219-36.32-95.844-36.32-30.878 0-59.386 9.553-82.748 25.7-18.945 13.093-34.483 30.625-44.97 50.985-9.753 18.879-15.094 39.8-15.094 62.294 0 22.495 5.35 43.633 15.103 62.337v.126c10.302 19.857 25.368 36.954 43.678 49.988 15.997 11.386 44.68 26.551 84.031 26.551 22.63 0 42.687-4.051 60.375-11.644 12.76-5.478 24.065-12.622 34.301-21.804 13.525-12.132 24.117-27.139 31.347-44.404 7.23-17.265 11.097-36.79 11.097-57.957 0-9.858-.998-19.87-2.689-28.968Z"/></clipPath>
    </defs>
    <g clipPath="url(#google_stats_i)" transform="matrix(.95792 0 0 .98525 -90.174 -78.856)">
      <path fill="url(#google_stats_j)" d="M92.076 219.958c.148 22.14 6.501 44.983 16.117 63.424v.127c6.949 13.392 16.445 23.97 27.26 34.452l65.327-23.67c-12.36-6.235-14.246-10.055-23.105-17.026-9.054-9.066-15.802-19.473-20.004-31.677h-.17l.17-.127c-2.765-8.058-3.037-16.613-3.14-25.503Z" filter="url(#google_stats_k)"/>
      <path fill="url(#google_stats_l)" d="M237.083 79.025c-6.456 22.526-3.988 44.421 0 57.161 7.457.006 14.64.888 21.45 2.647a77.662 77.662 0 0 1 33.424 18.25l41.88-40.726c-24.81-22.59-54.667-37.297-96.754-37.332Z" filter="url(#google_stats_k)"/>
      <path fill="url(#google_stats_m)" d="M236.943 78.847c-31.67 0-60.91 9.798-84.871 26.359a145.533 145.533 0 0 0-24.332 21.15c-1.904 17.744 14.257 39.551 46.262 39.37 15.528-17.936 38.495-29.542 64.056-29.542l.07.002-1.044-57.335c-.048 0-.093-.004-.14-.004Z" filter="url(#google_stats_k)"/>
      <path fill="url(#google_stats_n)" d="m341.475 226.379-28.268 19.285c-1.24 7.562-4.028 15.002-8.107 21.786-4.674 7.772-10.45 13.69-16.373 18.196-17.702 13.47-38.328 16.244-52.687 16.255-14.842 25.102-17.444 37.675 1.043 57.934 22.877-.016 43.157-4.117 61.046-11.796 12.931-5.551 24.388-12.792 34.761-22.097 13.706-12.295 24.442-27.503 31.769-45 7.327-17.497 11.245-37.282 11.245-58.734Z" filter="url(#google_stats_k)"/>
      <path fill="#3086ff" d="M234.996 191.21v57.498h136.006c1.196-7.874 5.152-18.064 5.152-26.5 0-9.858-.996-21.899-2.687-30.998Z" filter="url(#google_stats_k)"/>
      <path fill="url(#google_stats_o)" d="M128.39 124.327c-8.394 9.119-15.564 19.326-21.249 30.364-9.753 18.879-15.094 41.83-15.094 64.324 0 .317.026.627.029.944 4.32 8.224 59.666 6.649 62.456 0-.004-.31-.039-.613-.039-.924 0-9.226 1.57-16.026 4.43-24.367 3.53-10.289 9.056-19.763 16.123-27.926 1.602-2.031 5.875-6.397 7.121-9.016.475-.997-.862-1.557-.937-1.908-.083-.393-1.876-.077-2.277-.37-1.275-.929-3.8-1.414-5.334-1.845-3.277-.921-8.708-2.953-11.725-5.06-9.536-6.658-24.417-14.612-33.505-24.216Z" filter="url(#google_stats_k)"/>
      <path fill="url(#google_stats_p)" d="M162.099 155.857c22.112 13.301 28.471-6.714 43.173-12.977l-25.574-52.664a144.74 144.74 0 0 0-26.543 14.504c-12.316 8.512-23.192 18.9-32.176 30.72Z" filter="url(#google_stats_q)"/>
      <path fill="url(#google_stats_r)" d="M171.099 290.222c-29.683 10.641-34.33 11.023-37.062 29.29a144.806 144.806 0 0 0 16.792 13.984c15.996 11.386 46.766 26.551 86.118 26.551.046 0 .09-.004.137-.004v-59.157l-.094.002c-14.736 0-26.512-3.843-38.585-10.527-2.977-1.648-8.378 2.777-11.123.799-3.786-2.729-12.9 2.35-16.183-.938Z" filter="url(#google_stats_k)"/>
      <path fill="url(#google_stats_s)" d="M219.7 299.023v59.996c5.506.64 11.236 1.028 17.247 1.028 6.026 0 11.855-.307 17.52-.872v-59.748a105.119 105.119 0 0 1-17.477 1.461c-5.932 0-11.7-.686-17.29-1.865Z" filter="url(#google_stats_k)" opacity=".5"/>
    </g>
  </svg>
);

// 2. Amazon SVG Logo
const AmazonIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="603"
    height="182"
    style={{ fill: "#221f1f" }}
    viewBox="0 0 603 182"
    className={className}
  >
    <path d="M374.006 142.184c-35 25.797-85.729 39.561-129.406 39.561-61.242 0-116.376-22.651-158.087-60.325-3.278-2.962-.341-7 3.591-4.693 45.015 26.191 100.673 41.947 158.166 41.947 38.775 0 81.43-8.022 120.65-24.67 5.925-2.516 10.88 3.88 5.086 8.18" style={{ fill: "#f90" }}/>
    <path d="M388.557 125.536c-4.457-5.715-29.573-2.7-40.846-1.363-3.434.42-3.959-2.57-.865-4.719 20.003-14.078 52.827-10.015 56.654-5.296 3.828 4.745-.996 37.648-19.793 53.352-2.884 2.411-5.637 1.127-4.352-2.072 4.22-10.539 13.685-34.16 9.202-39.902" style={{ fill: "#f90" }}/>
    <path d="M348.497 20.066V6.381c0-2.071 1.573-3.46 3.461-3.46h61.269c1.966 0 3.54 1.415 3.54 3.46V18.1c-.027 1.966-1.679 4.535-4.615 8.599l-31.749 45.329c11.798-.289 24.25 1.468 34.947 7.498 2.412 1.363 3.068 3.356 3.251 5.322V99.45c0 1.992-2.202 4.325-4.509 3.12-18.85-9.884-43.887-10.96-64.73.104-2.123 1.154-4.351-1.153-4.351-3.146V85.661c0-2.229.026-6.03 2.254-9.412L384.047 23.5h-32.01c-1.967 0-3.54-1.39-3.54-3.434M124.999 105.454h-18.64c-1.783-.13-3.199-1.468-3.33-3.172V6.617c0-1.914 1.6-3.435 3.592-3.435h17.382c1.809.079 3.25 1.468 3.382 3.199v12.505h.34c4.536-12.086 13.056-17.722 24.54-17.722 11.666 0 18.954 5.636 24.198 17.722 4.509-12.086 14.76-17.722 25.744-17.722 7.813 0 16.36 3.224 21.577 10.46 5.899 8.049 4.693 19.741 4.693 29.992l-.026 60.378c0 1.913-1.6 3.46-3.592 3.46h-18.614c-1.862-.13-3.356-1.625-3.356-3.46V51.29c0-4.037.367-14.104-.524-17.932-1.39-6.423-5.558-8.232-10.959-8.232-4.51 0-9.228 3.015-11.142 7.839s-1.73 12.898-1.73 18.325v50.704c0 1.913-1.6 3.46-3.592 3.46h-18.614c-1.888-.13-3.356-1.625-3.356-3.46l-.026-50.704c0-10.67 1.757-26.374-11.483-26.374-13.397 0-12.872 15.31-12.872 26.374v50.704c0 1.913-1.6 3.46-3.592 3.46M469.514 1.164c27.66 0 42.629 23.752 42.629 53.954 0 29.18-16.543 52.329-42.629 52.329-27.16 0-41.947-23.753-41.947-53.352 0-29.782 14.97-52.931 41.947-52.931m.158 19.531c-13.738 0-14.603 18.719-14.603 30.386 0 11.692-.184 36.65 14.445 36.65 14.446 0 15.128-20.134 15.128-32.403 0-8.075-.341-17.723-2.78-25.378-2.097-6.66-6.265-9.255-12.19-9.255M548.008 105.454h-18.562c-1.861-.13-3.356-1.625-3.356-3.46l-.026-95.692c.157-1.756 1.704-3.12 3.592-3.12h17.277c1.625.079 2.962 1.18 3.33 2.674v14.63h.34c5.217-13.083 12.532-19.322 25.404-19.322 8.363 0 16.517 3.015 21.76 11.273 4.877 7.655 4.877 20.528 4.877 29.782v60.22c-.21 1.678-1.757 3.015-3.592 3.015h-18.693c-1.704-.13-3.12-1.39-3.303-3.015V50.478c0-10.461 1.206-25.772-11.667-25.772-4.535 0-8.704 3.042-10.775 7.656-2.621 5.846-2.962 11.666-2.962 18.116v51.516c-.026 1.913-1.652 3.46-3.644 3.46"/>
    <use xlinkHref="#amazon_stats_a" transform="translate(244.367)"/>
    <path id="amazon_stats_a" d="M55.288 59.758v-4.037c-13.475 0-27.71 2.884-27.71 18.771 0 8.049 4.168 13.502 11.325 13.502 5.243 0 9.936-3.225 12.898-8.468 3.67-6.45 3.487-12.506 3.487-19.768m18.798 45.434c-1.232 1.101-3.015 1.18-4.405.446-6.187-5.139-7.288-7.524-10.696-12.427-10.225 10.434-17.46 13.554-30.726 13.554-15.678 0-27.895-9.674-27.895-29.048 0-15.127 8.206-25.43 19.872-30.464 10.12-4.457 24.25-5.244 35.052-6.476v-2.412c0-4.43.341-9.674-2.254-13.501-2.281-3.435-6.633-4.85-10.46-4.85-7.106 0-13.45 3.644-14.997 11.194-.315 1.678-1.547 3.33-3.225 3.408l-18.09-1.94c-1.52-.34-3.198-1.573-2.778-3.906C7.652 6.853 27.446.246 45.169.246c9.07 0 20.92 2.412 28.078 9.28 9.07 8.469 8.206 19.768 8.206 32.064v29.048c0 8.73 3.618 12.558 7.026 17.277 1.206 1.678 1.468 3.697-.053 4.955-3.801 3.172-10.565 9.071-14.288 12.375z"/>
  </svg>
);

// 3. Netflix SVG Logo
const NetflixIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    id="Netflix_Symbol_RGB"
    version="1.1"
    viewBox="0 0 551.111 1000"
    className={className}
  >
    <defs>
      <linearGradient id="netflix_stats_linearGradient35887"><stop id="netflix_stats_stop35883" offset="0" style={{ stopColor: "#b1060f", stopOpacity: 1 }}/><stop id="netflix_stats_stop36053" offset=".625" style={{ stopColor: "#7b010c", stopOpacity: 1 }}/><stop id="netflix_stats_stop35885" offset="1" style={{ stopColor: "#b1060f", stopOpacity: 0 }}/></linearGradient>
      <linearGradient id="netflix_stats_linearGradient19332"><stop id="netflix_stats_stop19328" offset="0" style={{ stopColor: "#b1060f", stopOpacity: 1 }}/><stop id="netflix_stats_stop19560" offset=".546" style={{ stopColor: "#7b010c", stopOpacity: 1 }}/><stop id="netflix_stats_stop19330" offset="1" style={{ stopColor: "#e50914", stopOpacity: 0 }}/></linearGradient>
      <linearGradient xlinkHref="#netflix_stats_linearGradient19332" id="netflix_stats_linearGradient13368" x1="78.234" x2="221.663" y1="423.767" y2="365.092" gradientUnits="userSpaceOnUse"/>
      <linearGradient xlinkHref="#netflix_stats_linearGradient35887" id="netflix_stats_linearGradient35889" x1="456.365" x2="309.676" y1="521.56" y2="583.495" gradientUnits="userSpaceOnUse"/>
    </defs>
    <path id="path6055" d="M-1.152-1.152 2.305 1002.67c73.273-14.111 130.892-12.569 195.924-18.44V0Z" style={{ fill: "url(#netflix_stats_linearGradient13368)", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: 1, fillOpacity: 1 }}/>
    <path id="path678" d="M353.816 0h199.381l2.305 1000.365-202.839-33.422z" style={{ fill: "url(#netflix_stats_linearGradient35889)", stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: 1, fillOpacity: 1 }}/>
    <path id="path362" d="M1.152 0c4.61 11.525 345.749 981.925 345.749 981.925 56.056-.4 131.219 8.754 205.144 17.288L197.077 0Z" style={{ fill: "#e50914", fillOpacity: 1, stroke: "none", strokeWidth: "1px", strokeLinecap: "butt", strokeLinejoin: "miter", strokeOpacity: 1 }}/>
  </svg>
);

// 4. addy.io SVG Logo
const AddyioIcon = ({ className }: { className?: string }) => (
  <svg fill="#19216C" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>addy.io</title>
    <path d="M18 6.81V6c0-.305-.033-.605-.075-.9C17.489 2.217 15 0 12 0S6.51 2.217 6.075 5.1A5.733 5.733 0 0 0 6 6v.81A5.987 5.987 0 0 0 3 12v6a6 6 0 0 0 6 6h6c0-1.655-1.345-3-3-3H9c-1.655 0-3-1.345-3-3v-6c0-1.655 1.345-3 3-3h6c1.655 0 3 1.345 3 3v1.5a3 3 0 0 1-1.5 2.597V12c0-.83-.67-1.5-1.5-1.5H9c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5h6c1.055 0 2.04-.272 2.902-.75A5.996 5.996 0 0 0 21 13.5V12a5.987 5.987 0 0 0-3-5.19Zm-4.5 9.69h-3v-3h3zM9 6c0-.548.15-1.06.408-1.5A2.998 2.998 0 0 1 12 3c1.106 0 2.077.605 2.592 1.5.258.44.408.952.408 1.5Z"/>
  </svg>
);

// 5. ADP SVG Logo
const AdpIcon = ({ className }: { className?: string }) => (
  <svg fill="#D0271D" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>ADP</title>
    <path d="M15.08584 11.9999a3.13031 3.13031 0 0 1-3.12003 3.12002h-1.2v-1.37144h1.2a1.74859 1.74859 0 1 0 0-3.49717h-1.2V8.87987h1.2a3.13031 3.13031 0 0 1 3.12003 3.12002M8.43436 8.87987v2.53716H6.27434l-.78858 1.37144H9.8058v-3.9086Zm15.56584 1.9543a4.28575 4.28575 0 0 1-4.28575 4.28575v2.33145h-3.70289V15.6342a5.36233 5.36233 0 0 1-4.08003 1.81716H8.43436v-2.33145H5.69148l-1.37144 2.33145H0L6.34291 6.54842h5.6229a5.59548 5.59548 0 0 1 4.08004 1.81716V6.54842h3.70289a4.2789 4.2789 0 0 1 4.25146 4.28575m-12.03439 5.24576a4.09032 4.09032 0 0 0 3.7029-2.33145h1.74858v2.33145h.96v-2.33145h1.37145a2.91088 2.91088 0 0 0 2.9143-2.91431 2.94174 2.94174 0 0 0-2.94859-2.91431H17.383v3.49717h-1.37144a4.11432 4.11432 0 0 0-4.04575-3.49717H7.16577l-4.76575 8.16007h1.13144l1.37144-2.33145h4.9029v2.33145zm7.74864-7.20006h-1.37144v1.37144h1.37144a.57943.57943 0 0 1 .58286.58286.6.6 0 0 1-.58286.58286h-1.37144v1.37144h1.37144a1.9543 1.9543 0 0 0 1.9543-1.9543 1.97487 1.97487 0 0 0-1.9543-1.9543 M21.63447 16.76565a.54858.54858 0 1 1-.54858-.54858.54172.54172 0 0 1 .54858.54858m.13714 0a.68572.68572 0 1 0-.68572.68572.68572.68572 0 0 0 .68572-.68572 M21.12018 16.45707a.13714.13714 0 1 1 0 .2743h-.13715v-.2743zm.17143-.03428a.26057.26057 0 0 0-.17143-.06857h-.2743v.82286h.10287v-.30857h.13714l.17143.30857h.13714l-.20571-.34286c.03428 0 .06857-.03429.10286-.06857a.20572.20572 0 0 0 .03428-.13715.192.192 0 0 0-.03428-.13715"/></svg>
);

// 6. Adobe SVG Logo
const AdobeIcon = ({ className }: { className?: string }) => (
  <svg width="91" height="80" viewBox="0 0 91 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g clipPath="url(#adobe_stats_clip)">
      <path d="M56.9686 0H90.4318V80L56.9686 0Z" fill="#EB1000"/>
      <path d="M33.4632 0H0V80L33.4632 0Z" fill="#EB1000"/>
      <path d="M45.1821 29.4668L66.5199 80.0002H52.5657L46.1982 63.9461H30.6182L45.1821 29.4668Z" fill="#EB1000"/>
    </g>
    <defs>
      <clipPath id="adobe_stats_clip">
        <rect width="90.4318" height="80" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

// 7. Alibaba SVG Logo
const AlibabaIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
    clipRule="evenodd"
    viewBox="0 0 1024 1024"
    className={className}
  >
    <path fill="#891b26" d="M1024 100c0-55.192-44.808-100-100-100H100C44.808 0 0 44.808 0 100v824c0 55.192 44.808 100 100 100h824c55.192 0 100-44.808 100-100V100Z"/>
    <path fill="url(#alibaba_stats_rad)" d="m4145.14 949-257.8-446.348L3754 733.508V909c0 22.077 17.92 40 40 40h351.14Zm187.99 0h-148.64s-192.55-333.487-257.06-445.057c-12.63-21.85-12.64-48.87-.01-70.724 23.33-40.368 53.92-93.31 53.92-93.31L4333.13 949Zm187.99 0h-148.64l-369.29-646.928 72.14-124.89L4521.12 949ZM4628 808.578V909c0 22.077-17.92 40-40 40h-27.53L4095 143.121 4134.35 75h69.95L4628 808.578ZM4588 75h-344.36L4628 740.456V115c0-22.077-17.92-40-40-40Z" transform="translate(-3678.99)"/>
    <defs>
      <radialGradient id="alibaba_stats_rad" cx="0" cy="0" r="1" gradientTransform="translate(4421.95 -89.26) scale(1038.26)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#ffae71"/><stop offset="1" stopColor="#ff9350"/>
      </radialGradient>
    </defs>
  </svg>
);

// 8. AiMass (紫东太初) SVG Logo
const AiMassIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <title>AiMass (紫东太初)</title>
    <path d="M8.858 17.115c.156-.414.065-.273.495.098 2.073 1.792 10.334-1.855 9.035-3.987-1.605-2.223-7.924-.72-11.499-.048.57-.259 2.835-.998 3.686-1.213 1.169-.296 1.65-.392 2.738-.651-2.45.25-6.216 1.493-9.687 2.797 1.692-1.346 5.077-2.538 5.854-2.901-1.606.363-4.596 1.708-6.845 2.845C1.358 14.7.932 14.94 0 15.458c.696-.595 1.53-1.383 2.951-2.216 1.714-1.003 1.815-1.048 2.333-1.359-1.244.518-2.383 1.037-3.16 1.296.773-.534 2.227-1.347 2.797-1.606-.173.015-.518.155-.725.207 1.036-.57 1.799-.83 2.234-.97 7.42-2.442 15.999-2.182 17.32.528 1.322 2.71-2.766 6.486-8.347 7.709-.966.212-1.821.328-2.626.358-.836.031-1.448-.005-2.037-.12-1.563-.305-2.237-1.232-1.882-2.17z" fill="#003E97" />
    <path d="M11.5 6.185c.673.104.984.156 1.347.156-.57-.363-.702-.405-2.02-1.14 1.294-.103 1.906-.024 3.366-.052-.621-.362-.932-.362-1.605-.673a33.982 33.982 0 012.797-.104 1.3 1.3 0 00-.415-.362c1.45-.052 3.51.096 4.685.62 2.292 1.027 1.995 2.619-.57 3.063-.471.081-1.315.148-1.874.15a12.536 12.536 0 01-2.138-.212c-1.871-.358-3.314-.98-3.573-1.446z" fill="#D70D19" />
  </svg>
);

// 9. Airtel SVG Logo
const AirtelIcon = ({ className }: { className?: string }) => (
  <svg fill="#E40000" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>Airtel</title>
    <path d="M7.137 23.862c.79 0 1.708-.19 2.751-.554 1.55-.538 2.784-1.281 3.986-2.009l.316-.205a29.733 29.733 0 0 0 3.764-2.72 16.574 16.574 0 0 0 5.457-7.529c.395-1.138.949-3.384.268-5.487a7.117 7.117 0 0 0-2.862-3.749c-.158-.126-1.898-1.47-5.203-1.47-3.005 0-6.31 1.107-9.806 3.32l-.11.08-.317.205a20.133 20.133 0 0 0-2.309 1.693C1.585 6.813-.091 9.106.004 11.067c.031.79.427 1.534 1.075 2.008a3.472 3.472 0 0 0 2.214.68c1.803 0 3.765-.948 5.109-1.74l.253-.157.696-.443.237-.158c1.898-1.234 3.875-2.515 6.105-3.258a5.255 5.255 0 0 1 1.55-.285 3.163 3.163 0 0 1 .664.08 2.112 2.112 0 0 1 1.47 1.106c.523 1.012.396 2.61-.316 4.08a17.871 17.871 0 0 1-4.887 5.836 19.488 19.488 0 0 1-3.194 2.215l-.095.031a9.634 9.634 0 0 1-1.471.696l-.08.032-.41.158c-2.23.57-.87-1.329-.87-1.329.474-.537.98-1.028 1.518-1.502.316-.269.633-.554.933-.854l.064-.063c.395-.38.933-.902.901-1.645-.047-.98-1.075-1.582-2.056-1.613h-.063c-.95 0-1.819.522-2.404.98a7.27 7.27 0 0 0-1.598 1.74c-.6.901-1.85 3.226-.632 5.077.49.743 1.313 1.123 2.42 1.123z"/>
  </svg>
);

// 10. Alipay SVG Logo
const AlipayIcon = ({ className }: { className?: string }) => (
  <svg fill="#1677FF" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>Alipay</title>
    <path d="M19.695 15.07c3.426 1.158 4.203 1.22 4.203 1.22V3.846c0-2.124-1.705-3.845-3.81-3.845H3.914C1.808.001.102 1.722.102 3.846v16.31c0 2.123 1.706 3.845 3.813 3.845h16.173c2.105 0 3.81-1.722 3.81-3.845v-.157s-6.19-2.602-9.315-4.119c-2.096 2.602-4.8 4.181-7.607 4.181-4.75 0-6.361-4.19-4.112-6.949.49-.602 1.324-1.175 2.617-1.497 2.025-.502 5.247.313 8.266 1.317a16.796 16.796 0 0 0 1.341-3.302H5.781v-.952h4.799V6.975H4.77v-.953h5.81V3.591s0-.409.411-.409h2.347v2.84h5.744v.951h-5.744v1.704h4.69a19.453 19.453 0 0 1-1.986 5.06c1.424.52 2.702 1.011 3.654 1.333m-13.81-2.032c-.596.06-1.71.325-2.321.869-1.83 1.608-.735 4.55 2.968 4.55 2.151 0 4.301-1.388 5.99-3.61-2.403-1.182-4.438-2.028-6.637-1.809"/>
  </svg>
);

// 11. Apache Solr SVG Logo
const ApacheSolrIcon = ({ className }: { className?: string }) => (
  <svg fill="#D9411E" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
    <title>Apache Solr</title>
    <path d="M20.741 3.8L8.926 16.573l14.849-6.851A11.979 11.979 0 0 0 20.741 3.8M11.975 0c-1.637 0-3.197.328-4.619.921l-1.585 13.36L13.693.124A12.168 12.168 0 0 0 11.975 0m11.918 10.459l-14.07 7.874 13.201-1.566a11.976 11.976 0 0 0 .869-6.308m-5.188 11.527a12.084 12.084 0 0 0 3.8-4.16l-12.374 2.457 8.574 1.703zM14.417.249L7.53 15.177 20.306 3.36A11.978 11.978 0 0 0 14.417.249M12.98 24a11.938 11.938 0 0 0 3.774-.945l-6.931-.822L12.98 24zM1.016 7.08a11.944 11.944 0 0 0-1.013 3.864l1.867 3.337-.854-7.201zm5.298-5.665a12.076 12.076 0 0 0-4.236 3.784l1.743 8.773L6.314 1.415z"/>
  </svg>
);

const LOGOS = [
  { name: "Google", icon: GoogleIcon },
  { name: "Amazon", icon: AmazonIcon },
  { name: "Netflix", icon: NetflixIcon },
  { name: "addy.io", icon: AddyioIcon },
  { name: "ADP", icon: AdpIcon },
  { name: "Adobe", icon: AdobeIcon },
  { name: "Alibaba", icon: AlibabaIcon },
  { name: "AiMass", icon: AiMassIcon },
  { name: "Airtel", icon: AirtelIcon },
  { name: "Alipay", icon: AlipayIcon },
  { name: "Apache Solr", icon: ApacheSolrIcon },
];

const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS];

interface TeamMember {
  initials: string;
  color: string;
  name: string;
  role: string;
  row: number;
  col: number;
}

const TEAM_MEMBERS: TeamMember[] = [
  { initials: "S", color: "bg-accent-orange", name: "Sam", role: "Founder & CEO", row: 1, col: 1 },
  { initials: "X", color: "bg-accent-yellow", name: "XDP's Copilot", role: "AI Partner", row: 1, col: 3 },
  { initials: "J", color: "bg-blue-500", name: "James", role: "Ops Lead", row: 2, col: 2 },
  { initials: "T", color: "bg-emerald-500", name: "Tricia", role: "Product Lead", row: 2, col: 4 },
  { initials: "N", color: "bg-indigo-500", name: "Nikola", role: "Dev Lead", row: 3, col: 1 },
  { initials: "F", color: "bg-rose-500", name: "Ford", role: "Cloud & DevOps", row: 3, col: 3 },
  { initials: "K", color: "bg-amber-600", name: "Kate", role: "Security & QA", row: 4, col: 2 },
];

export default function StatsTeam() {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isCounterInView = useInView(counterRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isCounterInView) return;
    let start = 0;
    const end = 100;
    const duration = 1500; // ms
    const stepTime = Math.max(15, Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 2; // Count by 2s for speed
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isCounterInView]);

  return (
    <section className="bg-bg-light py-24 md:py-32 border-b border-border-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-light-primary mb-16 text-left font-heading">
          Scaling Successful Companies
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Left Card: Team bento */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-border-light rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              {/* 4x4 Sparse Grid */}
              <div className="grid grid-cols-4 gap-4 h-48 w-full max-w-[280px] mx-auto mb-6">
                {Array.from({ length: 16 }).map((_, idx) => {
                  const r = Math.floor(idx / 4) + 1;
                  const c = (idx % 4) + 1;
                  const member = TEAM_MEMBERS.find((m) => m.row === r && m.col === c);

                  if (member) {
                    return (
                      <motion.div
                        key={member.initials}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.04, type: "spring" }}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className={`w-11 h-11 rounded-xl ${member.color} text-white font-extrabold flex flex-col items-center justify-center relative group/team cursor-pointer shadow-md`}
                      >
                        {member.initials}
                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 bg-neutral-900 text-[10px] text-white px-2 py-0.5 rounded opacity-0 pointer-events-none group-hover/team:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg">
                          {member.name} ({member.role})
                        </div>
                      </motion.div>
                    );
                  }
                  return (
                    <div
                      key={idx}
                      className="w-11 h-11 rounded-xl border border-neutral-200/50 bg-[#fafafa]/30"
                    />
                  );
                })}
              </div>

              <h3 className="text-lg font-bold text-text-light-primary font-heading mb-2">
                Get to know our dream team
              </h3>
              <p className="text-sm text-text-light-secondary mb-6 leading-relaxed">
                A core collective of veteran engineers, system architects, and UX specialists scaling your products.
              </p>
            </div>

            <InteractiveButton label="Contact XDP's" avatarChar="X" />
          </motion.div>

          {/* Middle Card: Stat Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-border-light rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Background grid-of-squares */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="grid grid-cols-6 gap-2 p-2">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="aspect-square border border-black rounded" />
                ))}
              </div>
            </div>

            <div className="relative z-10 my-auto py-8">
              <div ref={counterRef} className="text-7xl md:text-8xl font-black text-text-light-primary tracking-tighter leading-none mb-4 font-heading">
                {count}+
              </div>
              <h4 className="text-xs uppercase font-extrabold tracking-widest text-accent-orange mb-2">
                Companies served
              </h4>
              <p className="text-sm text-text-light-secondary leading-relaxed">
                From fast-growing early stage startups to established enterprise corporations, we build scalable software infrastructures.
              </p>
            </div>
          </motion.div>

          {/* Right Card Stack: Logo Row + Testimonial */}
          <div className="flex flex-col gap-6">
            {/* Top Right Card: Brand Logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-border-light rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden animate-shimmer-light"
            >
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] py-1 select-none pointer-events-none">
                <motion.div
                  className="flex gap-10 whitespace-nowrap items-center w-max pointer-events-auto"
                  animate={{ x: ["0%", "-33.3333%"] }}
                  transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity,
                  }}
                >
                  {duplicatedLogos.map((logo, idx) => {
                    const Icon = logo.icon;
                    return (
                      <div
                        key={`${logo.name}-${idx}`}
                        className="flex items-center gap-2.5 shrink-0 px-1"
                      >
                        <div className="h-5 flex items-center justify-center text-text-light-primary">
                          <Icon className="h-5 w-auto transition-all duration-300 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-105" />
                        </div>
                        <span className="text-[10px] font-bold tracking-tight text-text-light-secondary/80 select-none">
                          {logo.name}
                        </span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom Right Card: Testimonial Spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-border-light rounded-2xl p-6 flex-grow flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Soft warm blur blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent-orange/5 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[9px] font-black uppercase tracking-widest text-neutral-400">SPOTLIGHT TESTIMONIAL</span>
                  <div className="flex text-accent-yellow">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm italic text-text-light-primary leading-relaxed mb-4 text-left">
                  "XDP technologies was crucial for our early MVP. Their engineering standards were clean, and we migrated our production cloud without a single minute of downtime."
                </p>

                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded bg-black flex items-center justify-center text-[9px] font-bold text-white">C</div>
                  <span className="text-xs font-bold text-text-light-primary">James Finley, CTO, Primer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Full-width bottom strip card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white border border-border-light rounded-2xl p-6 md:p-10 mt-6 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <Integrations />
        </motion.div>
      </div>
    </section>
  );
}
