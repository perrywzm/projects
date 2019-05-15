(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){},29:function(e,t,a){e.exports=a(48)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),s=a.n(i),o=a(15),c=a(13),l=Object(o.b)({viewedItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/App/VIEW_ITEM":return t.viewedItem;default:return e}},searchTerm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/App/ENTER_SEARCH_TERM":return t.searchTerm;default:return e}}}),m=a(2),u=a(3),p=a(5),d=a(4),h=a(6),f=a(9),b=a(14),g=function(e){var t=e.id,a=e.to,n=e.title,i=e.active,s=e.onClickFunction;return r.a.createElement(f.b,{to:a,className:"item "+(i?"active":""),onClick:function(){return s(t)}},n)},v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:""},a.onInputChange=function(e){a.setState({searchTerm:e.target.value}),a.props.enterSearchTerm(e.target.value)},a.handleKeydown=function(e){27===e.keyCode&&(a.setState({searchTerm:""}),a.props.enterSearchTerm(""))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"item"},r.a.createElement("div",{className:"ui icon input"},r.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.searchTerm,onChange:this.onInputChange,onKeyDown:this.handleKeydown}),r.a.createElement("i",{className:"search link icon"})))}}]),t}(r.a.Component),w=Object(c.b)(null,{enterSearchTerm:function(e){return{type:"app/App/ENTER_SEARCH_TERM",searchTerm:e}}})(v),E=[{path:"/",title:"Home"},{path:"/projects",title:"Projects"}],j=(a(43),function(e){function t(e){var a;Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).getCurrentRouteId=function(){if("/"===a.props.location.pathname)return 0;console.log(a.props.location.pathname.split("/")[1]);var e=E.findIndex(function(e){return"/"+a.props.location.pathname.split("/")[1].toLowerCase()===e.path.toLowerCase()});return e>=0?e:0},a.onSelectRoute=function(e){console.log(e),a.setState({selectedRouteId:e})},a.renderNavbarItems=function(){return console.log(E),E.map(function(e,t){var n=t===a.state.selectedRouteId;return r.a.createElement(g,{key:t,id:t,to:e.path,title:e.title,active:n,onClickFunction:a.onSelectRoute})})};var n=a.getCurrentRouteId();return a.state={selectedRouteId:n},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement("div",{className:"item navbar-title-text"},"PERRY"),r.a.createElement("div",{className:"right menu"},this.renderNavbarItems(),r.a.createElement(w,null)))}}]),t}(r.a.Component)),y=Object(b.e)(j),N=(a(44),function(e){var t=e.children;return r.a.createElement("div",{style:{overflowY:"auto",flex:"1",width:"100%"}},t)}),k=function(){return r.a.createElement("div",{className:"home-bg-container",style:{backgroundImage:"url(".concat("/projects","/bg.png)")}},r.a.createElement(N,null,r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"home-header"},"Hi, I'm Perry,",r.a.createElement("br",null),"Full stack developer & AI enthusiast."),r.a.createElement("p",{className:"home-subtitle"}),r.a.createElement("div",{className:"centered-flexbox"},r.a.createElement(f.b,{to:"/projects",className:"ui home-button"},r.a.createElement("p",null,"View My Projects"))))))},O=function(){return r.a.createElement(k,null)},I=(a(45),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onViewItem=function(){a.props.active&&a.props.viewItem(a.props.id)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.description,i=e.imgsrc;return r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"ui segment segment-expanded project-item"},r.a.createElement("div",{className:"ui item"},r.a.createElement("h3",{className:"ui center aligned header"},a),r.a.createElement("p",null,n)),r.a.createElement("img",{className:"ui fluid image project-image",src:i,alt:a}),r.a.createElement(f.b,{to:"/projects/".concat(t),className:"ui teal basic button",onClick:this.onViewItem},"View")))}}]),t}(r.a.Component)),S=Object(c.b)(function(e){return{active:null==e.viewedItem}},{viewItem:function(e){return{type:"app/App/VIEW_ITEM",viewedItem:e}}})(I),P=(a(46),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderProjectCategories",value:function(){var e=this;return this.props.projects.map(function(t){var a=e.filterProjectsBySearch(t.projects);return 0===a.length?r.a.createElement("div",{className:"ui vertical segment"},r.a.createElement("h2",{className:"ui header container"},t.name),r.a.createElement("p",{className:"ui center aligned projects-nomatch-text"},r.a.createElement("em",null,"No projects match the search term..."))):r.a.createElement("div",{className:"ui vertical segment"},r.a.createElement("h2",{className:"ui header container"},t.name),r.a.createElement("div",{className:"ui four column doubling stackable grid"},e.renderProjectList(a)))})}},{key:"filterProjectsBySearch",value:function(e){var t=this.props.searchTerm.toLowerCase();return e.filter(function(e){return e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.whatWasUsed.some(function(e){return e.toLowerCase().includes(t)})})}},{key:"renderProjectList",value:function(e){return e.map(function(e){return r.a.createElement(S,{key:e.id,id:e.id,name:e.name,description:e.description,imgsrc:e.imgsrc})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui container"},this.renderProjectCategories())}}]),t}(r.a.Component)),C=Object(c.b)(function(e){return{searchTerm:e.searchTerm}})(P),T=[{name:"Software & Web Development Projects",projects:[{name:"Stuff Sharing",id:"stuff",imgsrc:"https://user-images.githubusercontent.com/47155673/57749020-f4b10480-770e-11e9-8f69-f2aba069ead8.jpg",description:"Peer sharing marketplace website built on EJS, with Node/Express backend.",longDescription:"Peer sharing marketplace website built on EJS, with Node/Express backend. It features multiple routes manged by Express routing and interactions with a realtime database. User authentication is implemented using Passport.\nRefer to the Github repository for an overview of the features and routes designed for the web app.",whatWasUsed:["Node","Express","EJS","PostgreSQL","Passport"],btns:[{text:"View Website",link:"https://cs2102postreg.herokuapp.com"},{text:"View on Github",link:"https://github.com/perrythewang/CS2102_main"}]},{name:"This Website",id:"projects-app",imgsrc:"https://user-images.githubusercontent.com/47155673/57749594-3b9ff980-7711-11e9-948f-2706b5a79a39.png",description:"Project portfolio website developed in React.",longDescription:"Project portfolio web app designed with some of the core features and components for React websites in general, such as a landing page, a navigation bar, cards displayed in a responsive grid, and handling routing with URL parameters.\nThe web app is developed with React and uses Redux for state management and React Router for routing.",whatWasUsed:["React","Redux","Semantic UI"],btns:[{text:"View on Github",link:"https://github.com/perrywzm/projects"}]},{name:"HYSYS Optimizer",id:"hysysopt",imgsrc:"https://user-images.githubusercontent.com/47155673/57748672-8a4b9480-770d-11e9-9778-ea7c2fe31609.PNG",description:"Optimizes plant design in the HYSYS process simulation software.",longDescription:"HYSYS is a chemical process simulator used to mathematically model chemical processes such as when designing simple separation sections up to entire refineries. When designing plants, there may be many variables which affect how the plant performs.\nThis Python package provides a way to optimize these variables automatically with the particle swarm optimization algorithm, testing thousands of plant configurations without user intervention.\nIt accesses the HYSYS app by the exposed HYSYS application interface, which allows us to programmatically control the app externally.",whatWasUsed:["Python","HYSYS Application Interface","Particle Swarm Optimization"],btns:[{text:"View on Github",link:"https://github.com/perrywzm/hysysopt/blob/master/Example.ipynb"}]}]},{name:"Machine Learning & AI Projects",projects:[{name:"DCGAN Cat Generator",id:"dcgan1",imgsrc:"https://user-images.githubusercontent.com/47155673/57729004-ba704480-76c7-11e9-97f0-996ddb54ce45.jpg",description:"Generates pictures of cats using generative adversarial networks.",longDescription:"Uses the Deep Convolutional Generative Adversarial Network architecture to generate pictures of cat faces from random noise.\nThe dataset used is from https://www.kaggle.com/crawford/cat-dataset, which has almost 10000 annotated images of cats.",whatWasUsed:["Python","GANs","ConvNets","Tensorflow 2.0","Keras API","Computer Vision"],btns:[{text:"View on Github",link:"https://github.com/perrywzm/mlnotebooks/blob/master/DCGAN%20Cat%20Gen.ipynb"}]},{name:"Stock Price Predictor (RNN)",id:"stocks-rnn",imgsrc:"https://user-images.githubusercontent.com/47155673/57748670-87e93a80-770d-11e9-9d6b-53fc953409a2.png",description:"Stock price prediction using time series analysis and RNN models.",longDescription:"Applies various time series analysis techniques to the classic stock price prediction problem. First, time series decomposition is applied to split the time series data into its trend, seasonality, and residual components.\nA recurrent neural network using gated recurrent units (GRU) receives the trend and residual components and learns to predict the price excluding seasonality. Finally, the seasonality is added back to the prediction to get the final model price prediction.\nData is obtained from the free IEX API. Only the daily closing price data is used in the model.",whatWasUsed:["Python","RNNs","Tensorflow 2.0","Keras API","Time Series Analysis"],btns:[{text:"View on Github",link:"https://github.com/perrywzm/mlnotebooks/blob/master/DCGAN%20Cat%20Gen.ipynb"}]},{name:"Stock Price Predictor (Neural ODEs)",id:"stocks-neural-ode",imgsrc:"https://user-images.githubusercontent.com/47155673/57748670-87e93a80-770d-11e9-9d6b-53fc953409a2.png",description:"Stock price prediction using a neural ordinary differential equation model.",longDescription:"Applies various time series analysis techniques to the classic stock price prediction problem. First, time series decomposition is applied to split the time series data into its trend, seasonality, and residual components.\nInstead of an RNN model, a neural ODE model is used, which implements the ODE block. The ODE block formulates itself as an ODE, which takes on continuous dynamics instead of discrete dynamics in the typical networks with discrete layers.\nFinally, the seasonality is added back to the prediction to get the final model price prediction.\nData is obtained from the free IEX API. Only the daily closing price data is used in the model.",whatWasUsed:["Python","Neural ODEs","Tensorflow 2.0","Keras API","Time Series Analysis"],btns:[{text:"Under Construction",link:"none"}]},{name:"Neural Machine Translation",id:"nmt",imgsrc:"https://user-images.githubusercontent.com/47155673/57749238-d0a1f300-770f-11e9-90d5-572605106c5c.png",description:"Simple language translation model using a transformer.",longDescription:"Uses the transformer sequence-to-sequence model architecture to perform translation of sentences from English to French. It uses the attention mechanism for both the encoder and the decoder. The encoder first determines a latent representation of the input English sentence, which is then interpreted by the decoder to French.\nDataset is available at: http://www.statmt.org/europarl/v7/fr-en.tgz",whatWasUsed:["Python","Keras","Transformer","Seq2seq","Natural Language Processing"],btns:[{text:"Under Construction",link:"none"}]}]}],x=function(){return r.a.createElement(N,null,r.a.createElement(C,{projects:T}))},R=(a(26),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).renderButtons=function(){return a.props.project.btns.map(function(e){return"none"===e.link?r.a.createElement("a",{className:"fluid ui teal basic button item-btn"},e.text):r.a.createElement("a",{className:"fluid ui teal basic button item-btn",href:e.link,target:"_blank",rel:"noopener noreferrer"},e.text)})},a.parseNewlineToPara=function(e){return e.split("\n").map(function(e){return r.a.createElement("p",null,e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderTechnologiesList",value:function(e){return e.map(function(e){return r.a.createElement("div",{className:"item"},e)})}},{key:"render",value:function(){var e=this.props.project;return r.a.createElement("div",{className:"item-window-content"},r.a.createElement("div",{className:"ui item"},r.a.createElement("h3",{className:"ui center aligned header"},r.a.createElement("span",null,e.name),r.a.createElement("span",{style:{float:"right",width:"0"}},r.a.createElement(f.b,{to:"/projects"},r.a.createElement("i",{className:"teal right ui close icon",style:{transform:"translate(-100%,0%)"}})))),r.a.createElement("div",{className:"item-window-text"},this.parseNewlineToPara(e.longDescription)),r.a.createElement("div",{className:"ui divider"}),r.a.createElement("div",{className:"ui horizontal bulleted list"},this.renderTechnologiesList(e.whatWasUsed))),r.a.createElement("div",{className:"item"},this.renderButtons()))}}]),t}(r.a.Component)),A=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui relaxed divided items container segment"},r.a.createElement("div",{className:"item"},r.a.createElement("img",{className:"ui medium image item-window-image",src:this.props.project.imgsrc,alt:this.props.projectId}),r.a.createElement("div",{className:"content"},r.a.createElement(R,{projectId:this.props.projectId,project:this.props.project}))))}}]),t}(r.a.Component),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).getProjectInfo=function(){var e=a.props.match.params.projectId;console.log(e);for(var t=0;t<T.length;t++){var n=T[t].projects.filter(function(t){return t.id===e});if(n.length>0)return n[0]}return null},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(A,{projectId:this.props.match.params.projectId,project:this.getProjectInfo()})}}]),t}(r.a.Component),G=Object(b.e)(D),U=(a(47),function(){return r.a.createElement("div",{className:"ui header container"},"404 Not Found!")}),W=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{basename:"/projects"},r.a.createElement("div",{className:"ui item app-container"},r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:null}),r.a.createElement(b.a,{component:y})),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:O}),r.a.createElement(b.a,{path:"/projects",exact:!0,component:x}),r.a.createElement(b.a,{path:"/projects/:projectId",component:G}),r.a.createElement(b.a,{component:U}))))}}]),t}(r.a.Component);s.a.render(r.a.createElement(c.a,{store:Object(o.c)(l)},r.a.createElement(W,null)),document.querySelector("#root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6dac421f.chunk.js.map