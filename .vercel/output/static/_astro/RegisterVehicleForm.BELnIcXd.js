import{j as e}from"./jsx-runtime.CRkqtJS5.js";import{a as p}from"./_astro_actions.DCLOYqNE.js";import{r as m}from"./index.B52nOzfP.js";const r=({errorMessage:a})=>e.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",role:"alert",children:e.jsx("span",{className:"block sm:inline",children:a})}),b=({successMessage:a})=>e.jsx("div",{className:"text-sm p-2 rounded-md bg-green-100 text-green-500",role:"alert",children:e.jsx("div",{className:"space-y-2",children:a})}),C=()=>{const[a,i]=m.useState({}),[c,x]=m.useState(null),[s,d]=m.useState({make:"",model:"",year:0,batteryCapacity:0,energyConsumption:0,classification:"",color:"",autonomy:0,chargeTime:"",maintenanceCost:0,imageURL:""}),t=l=>{const{name:n,value:o}=l.target;d({...s,[n]:o})},g=async l=>{l.preventDefault(),i({});const n=new FormData(l.currentTarget),o=await p.newVehicle(n);if(console.log(o),o.error){console.error(o.error);const u={};o.error&&"fields"in o.error&&Object.entries(o.error.fields).forEach(([h,y])=>{u[h]=y[0]}),i(u);return}d({make:"",model:"",year:0,batteryCapacity:0,energyConsumption:0,classification:"",color:"",autonomy:0,chargeTime:"",maintenanceCost:0,imageURL:""}),x(o.data?.data??null)};return e.jsxs("form",{className:"space-y-6",onSubmit:g,children:[e.jsxs("div",{className:"grid grid-cols-1 gap-6 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"make",className:"block text-sm font-medium text-gray-700",children:"Make"}),e.jsxs("select",{id:"make",name:"make",className:"mt-1 block w-full pl-2 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md shadow-lg",value:s.make,onChange:t,children:[e.jsx("option",{value:"Tesla",children:"Tesla"}),e.jsx("option",{value:"Chevrolet",children:"Chevrolet"}),e.jsx("option",{value:"Ford",children:"Ford"}),e.jsx("option",{value:"Nissan",children:"Nissan"}),e.jsx("option",{value:"BMW",children:"BMW"})]}),a.make&&e.jsx(r,{errorMessage:a.make})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"model",className:"block text-sm font-medium text-gray-700",children:"Model"}),e.jsx("input",{type:"text",name:"model",id:"model",value:s.model,onChange:t,className:"mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"}),a.model&&e.jsx("div",{className:"bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3",role:"alert",children:e.jsx("span",{className:"block sm:inline",children:a.model})}),a.model&&e.jsx(r,{errorMessage:a.model})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"year",className:"block text-sm font-medium text-gray-700",children:"Year"}),e.jsx("input",{type:"number",name:"year",id:"year",min:"2000",max:"2024",value:s.year,onChange:t,className:"mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"}),a.year&&e.jsx(r,{errorMessage:a.year})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"batteryCapacity",className:"block text-sm font-medium text-gray-700",children:"Battery Capacity (kWh)"}),e.jsx("input",{type:"number",name:"batteryCapacity",id:"batteryCapacity",value:s.batteryCapacity,onChange:t,className:"mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"}),a.batteryCapacity&&e.jsx(r,{errorMessage:a.batteryCapacity})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"energyConsumption",className:"block text-sm font-medium text-gray-700",children:"Energy Consumption (kWh per kilometer)"}),e.jsx("input",{type:"number",name:"energyConsumption",id:"energyConsumption",value:s.energyConsumption,onChange:t,className:"mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"}),a.energyConsumption&&e.jsx(r,{errorMessage:a.energyConsumption})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"classification",className:"block text-sm font-medium text-gray-700",children:"Vehicle Classification"}),e.jsxs("select",{id:"classification",name:"classification",className:"mt-1 block w-full pl-2 pr-10 py-2 text-base border-gray-300 focus:outline-none sm:text-sm rounded-md shadow-lg",value:s.classification,onChange:t,children:[e.jsx("option",{value:"",children:"Please select a classification"}),e.jsx("option",{value:"SUV",children:"SUV"}),e.jsx("option",{value:"Sedan",children:"Sedan"})]}),a.classification&&e.jsx(r,{errorMessage:a.classification})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"color",className:"block text-sm font-medium text-gray-700",children:"Vehicle Color"}),e.jsx("input",{type:"text",name:"color",id:"color",className:"mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md",value:s.color,onChange:t}),a.color&&e.jsx(r,{errorMessage:a.color})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"autonomy",className:"block text-sm font-medium text-gray-700",children:"Pure Electric Autonomy (km)"}),e.jsx("input",{type:"number",name:"autonomy",id:"autonomy",value:s.autonomy,onChange:t,className:"mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"}),a.autonomy&&e.jsx(r,{errorMessage:a.autonomy})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"chargeTime",className:"block text-sm font-medium text-gray-700",children:"Charge Time (hours)"}),e.jsx("input",{type:"text",name:"chargeTime",id:"chargeTime",value:s.chargeTime,onChange:t,placeholder:"e.g. 8:30 (8 hours and 30 minutes)",className:"mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"}),a.chargeTime&&e.jsx(r,{errorMessage:a.chargeTime})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"maintenanceCost",className:"block text-sm font-medium text-gray-700",children:"Average Maintenance Cost ($)"}),e.jsx("input",{type:"number",name:"maintenanceCost",id:"maintenanceCost",value:s.maintenanceCost,onChange:t,className:"mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"}),a.maintenanceCost&&e.jsx(r,{errorMessage:a.maintenanceCost})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"imageURL",className:"block text-sm font-medium text-gray-700",children:"Vehicle Image URL"}),e.jsx("input",{type:"text",name:"imageURL",id:"imageURL",value:s.imageURL,onChange:t,className:"mt-1 p-2 block w-full shadow-lg sm:text-sm border-gray-300 rounded-md"}),a.imageURL&&e.jsx(r,{errorMessage:a.imageURL})]}),a.general&&e.jsx(r,{errorMessage:a.general}),c&&e.jsx(b,{successMessage:c}),e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-lg text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ",children:"Register Vehicle"})})]})};export{C as default};