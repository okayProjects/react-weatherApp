(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,n){e.exports={Form:"Form_Form__3opF0",Input:"Form_Input__4oQ4m"}},,,,,,,,function(e,t,n){e.exports=n(18)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(3),i=n.n(u),s=(n(15),n(4)),c=n(5),l=n(7),o=n(6),p=n(8),m=(n(16),n(1)),h=n.n(m),f=function(e){return r.a.createElement("form",{className:h.a.Form},r.a.createElement("input",{className:h.a.Input,onChange:e.inputChange,type:"text",value:e.inputValue,placeholder:"Type in the city"}))},d=(n(17),function(e){var t=e.weather,n=t.date,a=t.city,u=t.sunrise,i=t.sunset,s=t.temp,c=t.pressure,l=t.wind,o=t.error,p=null;if(!o&&a){var m=new Date(1e3*u).toLocaleTimeString(),h=new Date(1e3*i).toLocaleTimeString();p=r.a.createElement("div",null,r.a.createElement("h2",null,"Weather forecast for ",r.a.createElement("span",null,a)," on ",n),r.a.createElement("h4",null,r.a.createElement("i",{className:"far fa-sun"})," Sunrise at: ",m),r.a.createElement("h4",null,r.a.createElement("i",{class:"fas fa-sun"})," Sunset at ",h),r.a.createElement("h4",null,r.a.createElement("i",{class:"fas fa-temperature-low"})," Current temperature ",s," \xb0C"),r.a.createElement("h4",null,r.a.createElement("i",{class:"fas fa-wind"})," Current pressure: ",c," hPa"),r.a.createElement("h4",null,r.a.createElement("i",{class:"fas fa-water"})," Wind: ",l," m/s"))}else o&&(p=r.a.createElement("div",null,"Sorry ".concat(a," is not in our database")));return r.a.createElement(r.a.Fragment,null,p)}),w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).APIkey="411d82b0e0c210380af9ccb07f19c0de",n.state={inputValue:"",date:"",city:"",sunrise:"",sunset:"",temp:"",pressure:"",wind:"",error:!1},n.inputChangeValueHandler=function(e){var t=e.target.value;n.setState({inputValue:t})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;if(!(this.state.inputValue.length<3)&&t.inputValue!==this.state.inputValue){var a="https://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.inputValue,"&units=metric&APPID=").concat(this.APIkey);fetch(a).then(function(e){if(e.ok)return e;throw Error("Uuuuuups, it happened again!")}).then(function(e){return e.json()}).then(function(e){var t=(new Date).toLocaleString();n.setState(function(n){return{date:t,city:n.inputValue,sunrise:e.sys.sunrise,sunset:e.sys.sunset,temp:e.main.temp,pressure:e.main.pressure,wind:e.wind.speed,error:!1}})}).catch(function(e){n.setState(function(e){return{error:!0,city:e.inputValue}})})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{inputChange:this.inputChangeValueHandler,inputValue:this.state.inputValue}),r.a.createElement(d,{weather:this.state}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.73869631.chunk.js.map