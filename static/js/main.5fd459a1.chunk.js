(this.webpackJsonpWordsStickers=this.webpackJsonpWordsStickers||[]).push([[0],{103:function(e,t,n){e.exports={app_wrapper:"App_app_wrapper__5i7wO"}},107:function(e,t,n){e.exports={header:"Header_header__1m9KH"}},108:function(e,t,n){e.exports=n.p+"static/media/sign-out.6065ce4a.svg"},109:function(e,t,n){e.exports=n.p+"static/media/google-plus.2159790d.svg"},110:function(e,t,n){e.exports=n.p+"static/media/github.486fae37.svg"},111:function(e,t,n){e.exports=n.p+"static/media/youtube.496292e1.svg"},112:function(e,t,n){e.exports=n.p+"static/media/print.c84ce011.svg"},113:function(e,t,n){e.exports=n.p+"static/media/translate.e9b8835b.svg"},114:function(e,t,n){e.exports=n.p+"static/media/spinner.513103c8.svg"},115:function(e,t,n){e.exports={preloader:"Preloader_preloader__1EXfa"}},116:function(e,t,n){e.exports={content:"Content_content__3jYHC"}},117:function(e,t,n){e.exports={footer:"Footer_footer__2RgBb"}},118:function(e,t,n){e.exports=n.p+"static/media/exit.b8196adb.svg"},124:function(e,t,n){e.exports=n(236)},231:function(e,t,n){e.exports=n.p+"static/media/google.7c9224eb.svg"},232:function(e,t,n){},233:function(e,t,n){e.exports={errorBar:"ErrorBar_errorBar__22dBJ"}},234:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(50),c=n.n(i),o=n(6),s=n(7),u=n(9),p=n(8),l=n(12),d=n(102),f=function(e){return e.stickersPage.isFetchingStickers},g=function(e){return e.stickersPage.stickersAreFetched},m=function(e){return e.stickersPage.pdf},h=Object(d.a)((function(e){return e.stickersPage.stickers}),(function(e){return e.filter((function(e){return!0}))})),v=function(e){return e.stickersPage.isGeneratingPdf},S=function(e){return e.stickersPage.isShowIframe},_=function(e){return e.stickersPage.pdfOutput},k=n(103),b=n.n(k),E=n(36),O=n.n(E),I=n(28),w=n.n(I),P=n(13),j=n.n(P),y=n(18),F=n(104),N=n.n(F),x=n(105),D=n.n(x),T=function(){var e=Object(y.a)(j.a.mark((function e(t,n,r,a){var i,c,o,s,u,p,l,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.current,c=i.scrollHeight<=t?1:Math.floor(i.scrollHeight/t)+1,e.next=4,N()(i,{windowHeight:i.scrollHeight});case 4:for(o=e.sent,s=[],u=0;u<c;u++)p=C(o,t,t*u),s.push(p);for(l=new D.a({orientation:n,compress:!0}),u=0;u<s.length;u++)p=s[u],u>0&&l.addPage(),d=p.toDataURL("image/png"),l.addImage(d,"PNG",0,0);return e.abrupt("return",l.output("datauristring"));case 10:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}();function C(e,t,n){var r=e.getContext("2d").getImageData(0,n,e.width,t),a=document.createElement("canvas"),i=a.getContext("2d");return a.width=e.width,a.height=t,i.putImageData(r,0,0),a}var R,A,M=n(122),G=n(40),U=n.n(G),L=a.a.createRef(),H=function(e){var t=e.input,n=e.meta,r=e.label,i=Object(M.a)(e,["input","meta","label"]),c=n.touched&&n.error;return a.a.createElement("div",null,r?a.a.createElement("label",{className:"w3-text-white"},a.a.createElement("b",null,r)):"",c?a.a.createElement("span",{className:"".concat(U.a.formControl," ").concat(U.a.error)},n.error):"",a.a.createElement("input",Object.assign({className:"w3-input w3-border ".concat(U.a.formControl," ").concat(c?U.a.error:""),ref:L},t,{value:void 0},i)))},K=n(238),B=n(237),W=function(e){if(!e)return"Field is required"},V=(R=44,function(e){return e&&e.length>R?"Length more than ".concat(R," symbols"):e&&e.length<R?"Length less than ".concat(R," symbols"):void 0}),J=Object(B.a)({form:"ReadPhrasebookById"})((A=function(e){var t=e.handleSubmit,n=e.onChangeSpreadsheetId;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",{className:O.a.form},a.a.createElement(K.a,{name:"spreadsheetId",label:"Phrasebook ID: ",validate:[W,V],component:H,onChange:n}),a.a.createElement("div",{className:O.a.floatRight},a.a.createElement("button",{className:w.a.button},"Read specified phrasebook"))))},function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(){this.props.setInitialValue()}},{key:"render",value:function(){return a.a.createElement(A,this.props)}}]),n}(a.a.Component))),q=function(e){var t=e.updateSpreadsheetId,n=e.getLatestSpreadsheetId,r=e.getStickers,i=e.spreadseetId,c=e.pdf;return a.a.createElement("div",{className:O.a.bar},a.a.createElement(J,{onSubmit:function(e){r(e.spreadsheetId)},setInitialValue:function(){i&&(L.current.value=i)},onChangeSpreadsheetId:function(e){t(e.target.value)}}),a.a.createElement("button",{id:"read_spreadsheet",className:w.a.button,onClick:function(){n()}},"Get newest phrasebook ID"),a.a.createElement("button",{id:"pdf",className:w.a.button,onClick:function(){T(750,"landscape",c,"Stickers to print.pdf")}},"Dowdload stickers in pdf"))},Q=n(10),X=n(39),z=function(e){for(var t=e.length,n=0;n<t-1;n++)for(var r=0;r<t-n-1;r++)if(Date.parse(e[r].createdTime)>Date.parse(e[r+1].createdTime)){var a=e[r];e[r]=e[r+1],e[r+1]=a}return e},Y=function(e){var t=z(e);return t[t.length-1]},$=function(){var e=Object(y.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.client.drive.files.list((n={pageSize:100,q:"mimeType='application/vnd.google-apps.spreadsheet'"},Object(X.a)(n,"q","name='".concat("Saved translations","' or name='").concat("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b","'")),Object(X.a)(n,"fields","nextPageToken, files(id, name, createdTime, modifiedTime)"),n));case 2:r=e.sent,t(r.result.files);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z={spreadseetId:localStorage.getItem("UPDATE_SPREADSHEET_ID")},ee=function(e){return{type:"UPDATE_SPREADSHEET_ID",newSpreadseetId:e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SPREADSHEET_ID":return localStorage.setItem("UPDATE_SPREADSHEET_ID",t.newSpreadseetId),Object(Q.a)({},e,{spreadseetId:t.newSpreadseetId});default:return e}},ne=function(){var e=Object(y.a)(j.a.mark((function e(t,n,r){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:t,range:"C:D"});case 2:(a=e.sent).result.error?r(a.result.error.message):n(a.result.values);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),re={error:""},ae=function(e){return{type:"UPDATE_ERROR",newError:e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ERROR":return Object(Q.a)({},e,{error:t.newError});default:return e}},ce="Hello friend this stickers with words to study foreign languages You can accumulate unknown words in google translate phrasebook after that import them to spreedshed in your google drive Now just signin under your google account and you will see all accumulated words as stickers This stickers you can print on paper and put on wall in room near with work desk for memorising",oe="\u041f\u0440\u0438\u0432\u0435\u0442 \u0434\u0440\u0443\u0433 \u044d\u0442\u043e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441\u043e \u0441\u043b\u043e\u0432\u0430\u043c\u0438 \u0434\u043b\u044f \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432 \u0422\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u043d\u0430\u043a\u043e\u043f\u0438\u0442\u044c \u043d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u044b\u0435 \u0441\u043b\u043e\u0432\u0430 \u0432 \u0433\u0443\u0433\u043b \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0447\u0438\u043a\u0435 \u0441\u043b\u043e\u0432\u0430\u0440\u0435 \u043f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0432 \u0441\u0432\u043e\u0435\u043c \u0433\u0443\u0433\u043b \u0434\u0440\u0430\u0439\u0432\u0435 \u0422\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u043b\u043e\u0433\u0438\u043d\u044c\u0441\u044f \u043f\u043e\u0434 \u0441\u0432\u043e\u0438\u043c \u0433\u0443\u0433\u043b \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u043c \u0438 \u0442\u044b \u0431\u0443\u0434\u0435\u0448\u044c \u0432\u0438\u0434\u0435\u0442\u044c \u0432\u0441\u0435 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0435 \u0441\u043b\u043e\u0432\u0430 \u043a\u0430\u043a \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u042d\u0442\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0442\u044b \u043c\u043e\u0436\u0435\u0448\u044c \u0440\u0430\u0441\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c \u043d\u0430 \u0431\u0443\u043c\u0430\u0433\u0443 \u0438 \u043d\u0430\u043a\u043b\u0435\u0438\u0442\u044c \u043d\u0430 \u0441\u0442\u0435\u043d\u0443 \u0432 \u043a\u043e\u043c\u043d\u0430\u0442\u0435 \u0440\u044f\u0434\u043e\u043c \u0441 \u0440\u0430\u0431\u043e\u0447\u0438\u043c \u0441\u0442\u043e\u043b\u043e\u043c \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f",se=function(){for(var e=ce.split(" "),t=oe.split(" "),n=[],r=0;r<e.length;r++){var a={content:{Foreign:e[r],Spelling:"",Native:t[r]},id:r,isMouseOver:!1,isStudied:!1};n.push(a)}return n},ue={pdf:a.a.createRef(),stickers:se(),isFetchingStickers:!1,stickersAreFetched:!1,isGeneratingPdf:!1,isShowIframe:!1,pdfOutput:""},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(t){t(Se(!0)),t(_e(!1)),null===e?$((function(e){var n=Y(e);t(ee(n.id)),ne(n.id,(function(e){le(e,t)}),(function(e){de(e,t)}))})):ne(e,(function(e){le(e,t)}),(function(e){de(e,t)}))}},le=function(e,t){t(ae(e.length>0?"":"No data found."));var n=e.map((function(e,t){return{content:{Foreign:e[0],Spelling:"---",Native:e[1]},id:t,isMouseOver:!1,isStudied:!1}}));t(Se(!1)),t(_e(!0)),t(ge(n.reverse()))},de=function(e,t){t(ae("Error"+e)),t(Se(!1)),t(_e(!1))},fe=function(e){return{type:"UPDATE_PDF",newPdf:e}},ge=function(e){return{type:"UPDATE_STICKERS",newStickers:e}},me=function(e){return{type:"MOUSE_OVER",stickerId:e}},he=function(e){return{type:"MOUSE_LEAVE",stickerId:e}},ve=function(e){return{type:"STUDIED",stickerId:e.stickerId,isStudied:e.isStudied}},Se=function(e){return{type:"IS_FETCHING_STICKERS",isFetchingStickers:e}},_e=function(e){return{type:"STICKERS_ARE_FETCHED",stickersAreFetched:e}},ke=function(e){return{type:"IS_SHOW_IFRAME",isShowIframe:e}},be=function(e){return{type:"PDF_OUTPUT",pdfOutput:e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PDF":return Object(Q.a)({},e,{pdf:t.newPdf});case"UPDATE_STICKERS":return Object(Q.a)({},e,{stickers:t.newStickers});case"RESET_STICKERS":return Object(Q.a)({},e,{stickersAreFetched:!1,stickers:se().reverse()});case"MOUSE_OVER":var n=Object(Q.a)({},e,{stickers:e.stickers.map((function(e){return t.stickerId===e.id?Object(Q.a)({},e,{isMouseOver:!0}):e}))});return n;case"MOUSE_LEAVE":return Object(Q.a)({},e,{stickers:e.stickers.map((function(e){return t.stickerId===e.id?Object(Q.a)({},e,{isMouseOver:!1}):e}))});case"STUDIED":return Object(Q.a)({},e,{stickers:e.stickers.map((function(e){return t.stickerId===e.id?Object(Q.a)({},e,{isStudied:t.isStudied}):e}))});case"IS_FETCHING_STICKERS":return Object(Q.a)({},e,{isFetchingStickers:t.isFetchingStickers});case"STICKERS_ARE_FETCHED":return Object(Q.a)({},e,{stickersAreFetched:t.stickersAreFetched});case"IS_GENERATING_PDF":return Object(Q.a)({},e,{isGeneratingPdf:t.isGeneratingPdf});case"IS_SHOW_IFRAME":return Object(Q.a)({},e,{isShowIframe:t.isShowIframe});case"PDF_OUTPUT":return Object(Q.a)({},e,{pdfOutput:t.pdfOutput});default:return e}},Oe=function(e){return e.spreadsheetPage.spreadseetId},Ie=Object(l.b)((function(e){return{pdf:m(e),spreadseetId:Oe(e)}}),{getStickers:pe,getLatestSpreadsheetId:function(){return function(e){$((function(t){var n=Y(t);e(ee(n.id))}))}},updateSpreadsheetId:ee})(q),we=n(107),Pe=n.n(we),je=(r.Component,n(55)),ye=n.n(je),Fe=["https://sheets.googleapis.com/$discovery/rest?version=v4","https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],Ne=function(){return window.gapi.auth2.getAuthInstance()},xe=function(){var e=Object(y.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.client.init({apiKey:"AIzaSyANRAmPJFTjvI2lxfJpq82rd4SHtpBdKY0",clientId:"722524747087-sgjsjequa1sv10c8m3g9fl6gtqoa39eg.apps.googleusercontent.com",discoveryDocs:Fe,scope:"https://www.googleapis.com/auth/drive.metadata"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=function(){return Ne().currentUser.get().getBasicProfile()},Te=function(e){Ne().isSignedIn.listen(e)},Ce=function(){return window.gapi.auth2.getAuthInstance().isSignedIn.get()},Re=function(){Ne().signIn()},Ae=function(e){window.gapi.load("client:auth2",e)},Me=(n(231),n(108)),Ge=n.n(Me),Ue=(n(232),function(e){var t=e.url,n=e.icon;return a.a.createElement("a",{href:t,target:"_blank"},a.a.createElement("img",{src:n}))}),Le=n(109),He=n.n(Le),Ke=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).initClient=Object(y.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,xe();case 3:Te(e.updateSigninStatus),e.updateSigninStatus(Ce()),e.showError(""),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.showError(JSON.stringify(t.t0,null,2));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.updateSigninStatus=function(t){var n;t&&(n=De()),e.props.updateProfile(n),e.props.updateIsSignedIn(t)},e.showError=function(t){e.props.updateError(t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(y.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=Ae,e.next=3,this.initClient;case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getButton",value:function(){var e=a.a.createElement("input",{type:"image",className:ye.a.avatar,onClick:Re,src:He.a});w.a.button,this.props.signOut;return this.props.isSignedIn?"":e}},{key:"getUserInfo",value:function(){var e="https://docs.google.com/spreadsheets/d/"+this.props.spreadsheetId;return this.props.profile?a.a.createElement("div",null,a.a.createElement("p",{align:"center"},a.a.createElement(Ue,{url:e,icon:this.props.profile.getImageUrl()})),a.a.createElement("p",{align:"center"},a.a.createElement("input",{type:"image",className:ye.a.avatar,onClick:this.props.signOut,src:Ge.a}))):""}},{key:"render",value:function(){return a.a.createElement("div",{className:ye.a.main,align:"center"},this.getUserInfo(),a.a.createElement("p",null,this.getButton()))}}]),n}(r.Component),Be={isSignedIn:!1,profile:""},We=function(e){return{type:"UPDATE_IS_SIGNED_IN",isSignedIn:e}},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_IS_SIGNED_IN":return Object(Q.a)({},e,{isSignedIn:t.isSignedIn});case"UPDATE_PROFILE":return Object(Q.a)({},e,{profile:t.profile});default:return e}},Je=function(e){return e.signInPage.profile},qe=function(e){return e.signInPage.isSignedIn},Qe=Object(l.b)((function(e){return{profile:Je(e),isSignedIn:qe(e),spreadsheetId:Oe(e)}}),{signOut:function(){return function(e){Ne().signOut(),e(We(!1)),e({type:"RESET_STICKERS"}),e(be(""))}},updateError:ae,updateProfile:function(e){return{type:"UPDATE_PROFILE",profile:e}},updateIsSignedIn:We})(Ke),Xe=(n(233),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return console.log(this.props.error),a.a.createElement("div",null)}}]),n}(r.Component)),ze=function(e){return e.errorPage.error},Ye=Object(l.b)((function(e){return{error:ze(e)}}),{})(Xe),$e=n(110),Ze=n.n($e),et=n(111),tt=n.n(et),nt=n(112),rt=n.n(nt),at=n(113),it=n.n(at),ct=n(74),ot=n.n(ct),st=n(114),ut=n.n(st),pt=function(e){var t=e.pdf,n=e.updateIsGeneratingPdf,r=e.updateIsShowIframe,i=e.updatePdfOutput,c=e.pdfOutput,o=e.isGeneratingPdf,s=function(){var e=Object(y.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=c){e.next=7;break}return n(!0),e.next=4,T(784,"landscape",t,"Stickers to print.pdf");case 4:a=e.sent,i(a),n(!1);case 7:r(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:ot.a.navbar},a.a.createElement("div",{className:ot.a.main},a.a.createElement("p",{align:"center"},0==o?a.a.createElement("input",{type:"image",onClick:s,src:rt.a}):a.a.createElement("img",{src:ut.a}))),a.a.createElement("div",null,a.a.createElement("p",{align:"center"},a.a.createElement("p",null,a.a.createElement(Ue,{url:"https://translate.google.com/#en/ru/",icon:it.a})),a.a.createElement("p",null,a.a.createElement(Ue,{url:"https://www.youtube.com/watch?v=C-FKXagcLRQ&list=PLQPXxMwGR_nkJyvzRnj8NGgHwgvpdipy4",icon:tt.a})),a.a.createElement("p",null,a.a.createElement(Ue,{url:"https://github.com/fargutvest/WordsStickers",icon:Ze.a}))),a.a.createElement("p",null,a.a.createElement(Ye,null)),a.a.createElement(Qe,null)))},lt=Object(l.b)((function(e){return{pdf:m(e),pdfOutput:_(e),isGeneratingPdf:v(e)}}),{updateIsGeneratingPdf:function(e){return{type:"IS_GENERATING_PDF",isGeneratingPdf:e}},updateIsShowIframe:ke,updatePdfOutput:be})(pt),dt=n(75),ft=n.n(dt),gt=n(24),mt=n.n(gt),ht=function(e){var t=e.onMouseOver,n=e.onMouseLeave,r=e.onStudied,i=e.sticker,c=i.isMouseOver?mt.a.MouseOver:"",o=i.isStudied?mt.a.Studied:"";return a.a.createElement("div",{className:"".concat(mt.a.Sticker," ").concat(c," ").concat(o),onMouseOver:function(){t(i.id)},onMouseLeave:function(){n(i.id)},onClick:function(){r({stickerId:i.id,isStudied:!i.isStudied})}},a.a.createElement("div",{className:"".concat(mt.a.Foreign," ").concat(mt.a.Part)},i.content.Foreign),a.a.createElement("div",{className:"".concat(mt.a.Native," ").concat(mt.a.Part)},i.content.Native))},vt=a.a.createRef(),St=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"buildStickersPage",value:function(){var e=this,t=this.props.stickers.reverse(),n=[],r=0,i=[];return t.forEach((function(c){r++,i.push(a.a.createElement(ht,{sticker:c,onMouseOver:e.props.mouseOverSticker,onMouseLeave:e.props.mouseLeaveSticker,onStudied:e.props.studiedSticker})),4!=i.length&&t.length-r!=0||(n.push(a.a.createElement("div",{className:ft.a.StickersRow},i)),i=[])})),n}},{key:"componentDidMount",value:function(){this.props.updatePdf(vt)}},{key:"render",value:function(){return a.a.createElement("div",{className:ft.a.main},a.a.createElement("div",{ref:vt},this.buildStickersPage()))}}]),n}(r.Component),_t=n(53),kt=n.n(_t),bt=n(115),Et=n.n(bt),Ot=(r.Component,function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return this.props.isSignedIn&&0==this.props.stickersAreFetched&&!1===this.props.isFetchingStickers&&this.props.getStickers(),a.a.createElement(St,this.props)}}]),n}(r.Component)),It=Object(l.b)((function(e){return{stickers:h(e),isSignedIn:qe(e),isFetchingStickers:f(e),stickersAreFetched:g(e)}}),{updatePdf:fe,mouseOverSticker:me,mouseLeaveSticker:he,studiedSticker:ve,getStickers:pe})(Ot),wt=n(25),Pt=n.n(wt),jt=function(e){var t=e.mouseOverSticker,n=e.mouseLeaveSticker,r=e.studiedSticker,i=e.sticker,c=i.isMouseOver?Pt.a.MouseOver:"",o=i.isStudied?Pt.a.Studied:"";return a.a.createElement("div",{className:"".concat(Pt.a.Sticker," ").concat(c," ").concat(o),onMouseOver:function(){t(i.id)},onMouseLeave:function(){n(i.id)},onClick:function(){r({stickerId:i.id,isStudied:!i.isStudied})}},a.a.createElement("div",{className:"".concat(Pt.a.Foreign," ").concat(Pt.a.Part)},i.content.Foreign),a.a.createElement("div",{className:"".concat(Pt.a.Native," ").concat(Pt.a.Part)},i.content.Native))},yt=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){this.props.isSignedIn&&0==this.props.stickersAreFetched&&!1===this.props.isFetchingStickers&&this.props.getStickers();var e=this.props.stickers[Math.floor(Math.random()*this.props.stickers.length)];return a.a.createElement(jt,Object.assign({},this.props,{sticker:e}))}}]),n}(r.Component),Ft=Object(l.b)((function(e){return{stickers:h(e),isSignedIn:qe(e),isFetchingStickers:f(e),stickersAreFetched:g(e)}}),{updatePdf:fe,mouseOverSticker:me,mouseLeaveSticker:he,studiedSticker:ve,getStickers:pe})(yt),Nt=n(116),xt=n.n(Nt),Dt=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:xt.a.content},window.innerWidth>980?a.a.createElement(It,null):a.a.createElement(Ft,null))}}]),n}(r.Component),Tt=n(117),Ct=n.n(Tt),Rt=(r.Component,n(76)),At=n.n(Rt),Mt=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:At.a.splashScreen},a.a.createElement("img",{className:At.a.preloader,src:kt.a}))}}]),n}(r.Component),Gt=n(77),Ut=n.n(Gt),Lt=n(118),Ht=n.n(Lt),Kt=function(e){var t=e.content,n=e.updateIsShowIframe;return a.a.createElement("div",{className:Ut.a.iframe},a.a.createElement("input",{className:Ut.a.exitButton,type:"image",src:Ht.a,onClick:function(){n(!1)}}),a.a.createElement("iframe",{src:t}))},Bt=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:b.a.app_wrapper},this.props.isShowIframe?a.a.createElement(Kt,{content:this.props.pdfOutput,updateIsShowIframe:this.props.updateIsShowIframe}):"",this.props.isFetchingStickers||this.props.isGeneratingPdf?a.a.createElement(Mt,null):"",a.a.createElement(lt,null),a.a.createElement(Dt,null))}}]),n}(r.Component),Wt=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(Bt,this.props)}}]),n}(r.Component),Vt=Object(l.b)((function(e){return{isFetchingStickers:f(e),isGeneratingPdf:v(e),isShowIframe:S(e),pdfOutput:_(e)}}),{updateIsShowIframe:ke})(Wt),Jt=(n(234),n(11)),qt={phrasebookFilesTree:{latestPhrasebookFile:"",allPhrasebookFiles:[]}},Qt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FILES_LIST":return Object(Q.a)({},e,{phrasebookFilesTree:Object(Q.a)({},e.phrasebookFilesTree,{allPhrasebookFiles:t.allPhrasebookFiles,latestPhrasebookFile:t.latestPhrasebookFile})});default:return e}},Xt=n(119),zt=n(239),Yt=Object(Jt.c)({errorPage:ie,spreadsheetPage:te,stickersPage:Ee,filesListPage:Qt,signInPage:Ve,form:zt.a}),$t=Object(Jt.d)(Yt,Object(Jt.a)(Xt.a)),Zt=n(121),en=function(){c.a.render(a.a.createElement(Zt.a,null,a.a.createElement(l.a,{store:$t},a.a.createElement(Vt,null))),document.getElementById("root"))};$t.subscribe((function(){en()})),window.store=$t,en()},24:function(e,t,n){e.exports={Sticker:"Sticker_Sticker__1fdgD",MouseOver:"Sticker_MouseOver__3vk8l",Studied:"Sticker_Studied__2SVM7",Part:"Sticker_Part__2MF4-",Foreign:"Sticker_Foreign__2YGTc",Spelling:"Sticker_Spelling__1iJng",Native:"Sticker_Native__2KAao"}},25:function(e,t,n){e.exports={Sticker:"PlaySticker_Sticker__e8QeO",Part:"PlaySticker_Part__o30Ph",Foreign:"PlaySticker_Foreign__1WlRK",Native:"PlaySticker_Native__104yg"}},28:function(e,t,n){e.exports={button:"Common_button__-rPdQ",remove:"Common_remove__2dV9p"}},36:function(e,t,n){e.exports={bar:"ReadSpreadsheet_bar__PTix_",floatRight:"ReadSpreadsheet_floatRight__ve8D0",form:"ReadSpreadsheet_form__1-6q1"}},40:function(e,t,n){e.exports={formControl:"FormControls_formControl__1V9rg",error:"FormControls_error__2eEhE"}},53:function(e,t,n){e.exports=n.p+"static/media/preloader.cc338b03.svg"},55:function(e,t,n){e.exports={google_button:"SignInWithGoogle_google_button__1K8xa",google_button_icon:"SignInWithGoogle_google_button_icon__2zPcA",google_button_icon_plus:"SignInWithGoogle_google_button_icon_plus__3i0pb",google_button_text:"SignInWithGoogle_google_button_text__7avQu",avatar:"SignInWithGoogle_avatar__3Es-X",main:"SignInWithGoogle_main__1Ji5D"}},74:function(e,t,n){e.exports={navbar:"Navbar_navbar__1tePV",youtubelink:"Navbar_youtubelink__rggms",main:"Navbar_main__1mGDk"}},75:function(e,t,n){e.exports={main:"Stickers_main__1jSFN"}},76:function(e,t,n){e.exports={splashScreen:"SplashScreen_splashScreen__jWh46",preloader:"SplashScreen_preloader__3khFs"}},77:function(e,t,n){e.exports={iframe:"IFrame_iframe__3P0D8",exitButton:"IFrame_exitButton__24o5X"}}},[[124,1,2]]]);
//# sourceMappingURL=main.5fd459a1.chunk.js.map