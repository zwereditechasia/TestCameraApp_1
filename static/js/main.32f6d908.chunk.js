(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,a,t){e.exports=t(165)},121:function(e,a,t){},122:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},123:function(e,a,t){},124:function(e,a,t){},125:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},165:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(10),r=t.n(i),o=(t(121),t(55)),s=t(41),c=(t(122),t(123),t(192)),m=t(203),d=t(204),u=t(205),g=t(23),h=t(18),f=t(14),C=t(24),E=t(25),p=t(13),I=t(27),v=(t(124),t(190)),S=t(187),b=t(36),y=t(191),O=t(206),k=t(193),j=t(194),x=t(189),W=t(195),w=t(196),F=t(197),D=t(198),L=t(7),A=t.n(L),H=(t(125),t(59)),N=t.n(H),R=(t(126),function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(C.a)(this,Object(E.a)(a).call(this,e))).state={currentActionName:t.props.actionFor},t}return Object(I.a)(a,e),Object(f.a)(a,[{key:"onTakePhoto",value:function(e){void 0!==e&&null!==e&&this.props.handelChange(e,this.state.currentActionName),this.props.closeCamera()}},{key:"render",value:function(){var e=this;return l.a.createElement(S.a,{item:!0,container:!0,xs:12},l.a.createElement(N.a,{idealFacingMode:H.FACING_MODES.ENVIRONMENT,idealResolution:{width:768,height:1024},imageType:H.IMAGE_TYPES.PNG,imageCompression:.97,isMaxResolution:!0,isImageMirror:!1,isSilentMode:!0,isDisplayStartCameraError:!0,isFullscreen:!0,sizeFactor:1,onTakePhoto:function(a){e.onTakePhoto(a)}}))}}]),a}(l.a.Component));N.a.propTypes={};var T=R,z=t(104),V=t(207),P=t(99),M=t.n(P),Q=t(5),G=Object(Q.a)({root:{position:"relative"},content:{padding:"1.5px 15px 10px 10px"},inputLabel:{position:"absolute",left:0,top:0,transform:"translate(0, 24px) scale(1)"}})((function(e){var a=e.classes,t=e.id,n=e.label,i=e.children,o=l.a.useState(0),s=Object(z.a)(o,2),c=s[0],m=s[1],d=l.a.useRef(null);return l.a.useEffect((function(){var e=r.a.findDOMNode(d.current);m(null!=e?e.offsetWidth:0)}),[n]),l.a.createElement("div",{style:{position:"relative",marginTop:"8px",width:"100%"}},l.a.createElement(V.a,{ref:d,htmlFor:t,variant:"outlined",className:a.inputLabel,shrink:!0},n),l.a.createElement("div",{className:a.root},l.a.createElement("div",{id:t,className:a.content},i,l.a.createElement(M.a,{notched:!0,labelWidth:c}))))})),B=t(9),_=t.n(B),J=(t(150),t(106)),q=t(171),U=t(169),Y=(l.a.forwardRef((function(e,a){return l.a.createElement(J.a,Object.assign({in:this.state.open,ref:a},e))})),function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(C.a)(this,Object(E.a)(a).call(this,e))).handleOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.props.closeModal()},t.state={open:t.props.modalState,contents:t.props.contents},t.handleOpen=t.handleOpen.bind(Object(p.a)(t)),t.handleClose=t.handleClose.bind(Object(p.a)(t)),t}return Object(I.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return l.a.createElement(q.a,{className:"modal",open:this.state.open,onClose:this.handleClose,closeAfterTransition:!0,BackdropComponent:U.a,BackdropProps:{timeout:500}},l.a.createElement(J.a,{in:this.state.open},l.a.createElement("div",{className:"paper"},l.a.createElement(x.a,{"aria-label":"close",className:"",color:"primary",onClick:this.handleClose,style:{right:0,position:"absolute"}},l.a.createElement(A.a,{fontSize:"large"})),l.a.createElement("img",{src:this.state.contents.img,width:"100%",height:"100%",alt:this.state.contents.propertyName}))))}}],[{key:"getDerivedStateFromProps",value:function(e,a){return{open:e.modalState,contents:e.contents}}}]),a}(l.a.Component)),$=(Object(n.forwardRef)((function(e,a){return l.a.createElement(v.a,{direction:"up"})})),{ShippingType:{valid:!0,message:"",value:""},Factory:{valid:!0,message:"",value:""},StuffingDate:{valid:!0,message:"",value:""},SI:{valid:!0,message:"",value:""},Container:{valid:!0,message:"",value:""}}),K=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(C.a)(this,Object(E.a)(a).call(this,e))).handleDateChange=function(e,a){if(void 0!==e&&null!==e){var n=new Date(e);t.handelChange(n,a)}},t.save=function(){},t.state={data:{ShippingType:"",Factory:"",StuffingDate:Date.now(),SI:"",SequenceNumber:"",Container:"",SealNo:"",TruckID:"",Driver:"",Supervisor:"",Truck:"",OuterRightWall:"",OuterLeftWall:"",InsideFrontWall:"",InsideContainerLeftWall:"",InsideInnerHalfLeftWall:"",InsideOuterHalfLeftWall:"",InsideContainerRightWall:"",InsideInnerHalfRightWall:"",InsideOuterHalfRightWall:"",InsideContainerCeiling:"",InsideInnerHalfCeiling:"",InsideOuterHalfCeiling:"",InsideContainerFloor:"",NetContainerWeight:"",InsideFloorInnerSection:"",InsideFloorMiddleSection:"",InsideFloorOuterSection:"",OutsideCeilingInnerHalf:"",OutsideCeilingOuterHalf:"",InsideCleaningProcess:"",StuffingFirstpallet:"",AfterStuffing8thPallet:"",AfterStuffingLastPallet:"",AfterClosedContainerDoor:"",SealingContainer:"",DiverAndContainer:""},formControls:Object(g.a)({},$),openCamera:!1,currentActionName:"",imageContent:"",modalState:!1,factorySelectedValue:""},t.closeCamera=t.closeCamera.bind(Object(p.a)(t)),t.handelChange=t.handelChange.bind(Object(p.a)(t)),t.openCamera=t.openCamera.bind(Object(p.a)(t)),t.handelChange=t.handelChange.bind(Object(p.a)(t)),t.closeModal=t.closeModal.bind(Object(p.a)(t)),t}return Object(I.a)(a,e),Object(f.a)(a,[{key:"openCamera",value:function(e){if(console.log(this.state[e]),""===this.state.data[e]||void 0===this.state.data[e])this.setState({openCamera:!0,currentActionName:e});else{console.log(e);var a={img:this.state.data[e],propertyName:e};this.setState({modalState:!0,imageContent:a})}}},{key:"closeCamera",value:function(){this.setState({openCamera:!1})}},{key:"closeModal",value:function(){this.setState({modalState:!1})}},{key:"handelChange",value:function(e,a){var t=this,n=Object(g.a)({},this.state.formControls),l=Object(g.a)({},this.state.data);!this.state.formControls.hasOwnProperty(a)||""!==e&&void 0!==e?(this.state.formControls.hasOwnProperty(a)&&(n[a].valid=!0,n[a].message=""),l[a]=e):(n[a].valid=!1,n[a].message="".concat(a," cannot be Empty")),"Factory"===a&&this.setState({factorySelectedValue:e}),this.setState({data:l,formControls:n},(function(){return console.log(t.state)}))}},{key:"removeImage",value:function(e){var a=Object(g.a)({},this.state.data);a[e]="",this.setState({data:a})}},{key:"cancel",value:function(){}},{key:"render",value:function(){var e=this;return l.a.createElement(S.a,{container:!0},l.a.createElement(b.a,{variant:"h4"},"Stuffing Container"),l.a.createElement(S.a,{item:!0,container:!0,xs:12},l.a.createElement(S.a,{container:!0,direction:"row",justify:"flex-start",wrap:"wrap"},l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:6,lg:6},l.a.createElement(y.a,{style:{width:"100%",margin:4}},l.a.createElement(O.a,{id:"Shipping_Type",label:"Shipping Type",error:!this.state.formControls.ShippingType.valid,helperText:this.state.formControls.ShippingType.message,defaultValue:"",className:"",onChange:function(a){return e.handelChange(a.target.value,"ShippingType")},margin:"dense"}))))),l.a.createElement(S.a,{item:!0,container:!0,xs:12},l.a.createElement(G,{label:"Group: 1. Before Stuffing",style:{width:"100%",padding:"10px"}},l.a.createElement(S.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",wrap:"wrap"},l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("Truck")}},l.a.createElement(A.a,null)),title:"Truck"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("Truck")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.Truck||void 0===this.state.data.Truck?_.a:this.state.data.Truck,title:"Truck (From Front)"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("OuterRightWall")}},l.a.createElement(A.a,null)),title:"Outer Right wall"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("OuterRightWall")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.OuterRightWall||void 0===this.state.data.OuterRightWall?_.a:this.state.data.OuterRightWall,title:"Outer Right wall"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("OuterLeftWall")}},l.a.createElement(A.a,null)),title:"Outer Left wall"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("OuterLeftWall")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.OuterLeftWall||void 0===this.state.data.OuterLeftWall?_.a:this.state.data.OuterLeftWall,title:"Outer Left wall"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideFrontWall")}},l.a.createElement(A.a,null)),title:"Inside Front wall"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideFrontWall")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideFrontWall||void 0===this.state.data.InsideFrontWall?_.a:this.state.data.InsideFrontWall,title:"Inside Front wall"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideContainerLeftWall")}},l.a.createElement(A.a,null)),title:"Inside Container Left wall"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideContainerLeftWall")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideContainerLeftWall||void 0===this.state.data.InsideContainerLeftWall?_.a:this.state.data.InsideContainerLeftWall,title:"Inside Container Left wall"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideContainerLeftWall")}},l.a.createElement(A.a,null)),title:"Inside inner half left wall"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideContainerLeftWall")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideInnerHalfLeftWall||void 0===this.state.data.InsideInnerHalfLeftWall?_.a:this.state.data.InsideInnerHalfLeftWall,title:"Inside inner half left wall"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideContainerLeftWall")}},l.a.createElement(A.a,null)),title:"Inside outer half left wall"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideContainerLeftWall")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideOuterHalfLeftWall||void 0===this.state.data.InsideOuterHalfLeftWall?_.a:this.state.data.InsideOuterHalfLeftWall,title:"Inside outer half left wall"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideContainerLeftWall")}},l.a.createElement(A.a,null)),title:"Inside outer half left wall"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideContainerLeftWall")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideContainerRightWall||void 0===this.state.data.InsideContainerRightWall?_.a:this.state.data.InsideContainerRightWall,title:"Inside container Right wall"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideContainerLeftWall")}},l.a.createElement(A.a,null)),title:"Inside inner half right wall"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideContainerLeftWall")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideInnerHalfRightWall||void 0===this.state.data.InsideInnerHalfRightWall?_.a:this.state.data.InsideInnerHalfRightWall,title:"Inside inner half right wall"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideContainerLeftWall")}},l.a.createElement(A.a,null)),title:"Inside outer half right wall"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideContainerLeftWall")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideOuterHalfRightWall||void 0===this.state.data.InsideOuterHalfRightWall?_.a:this.state.data.InsideOuterHalfRightWall,title:"Inside outer half right wall"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideContainerLeftWall")}},l.a.createElement(A.a,null)),title:"Inside container Ceiling"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideContainerLeftWall")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideContainerCeiling||void 0===this.state.data.InsideContainerCeiling?_.a:this.state.data.InsideContainerCeiling,title:"Inside container Ceiling"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideInnerHalfCeiling")}},l.a.createElement(A.a,null)),title:"Inside inner half ceiling"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideInnerHalfCeiling")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideInnerHalfCeiling||void 0===this.state.data.InsideInnerHalfCeiling?_.a:this.state.data.InsideInnerHalfCeiling,title:"Inside inner half ceiling"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideOuterHalfCeiling")}},l.a.createElement(A.a,null)),title:"Inside outer half ceiling"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideOuterHalfCeiling")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideOuterHalfCeiling||void 0===this.state.data.InsideOuterHalfCeiling?_.a:this.state.data.InsideOuterHalfCeiling,title:"Inside outer half ceiling"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideContainerFloor")}},l.a.createElement(A.a,null)),title:"Inside container floor"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideContainerFloor")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideContainerFloor||void 0===this.state.data.InsideContainerFloor?_.a:this.state.data.InsideContainerFloor,title:"Inside container floor"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("NetContainerWeight")}},l.a.createElement(A.a,null)),title:"Net Container Weight"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("NetContainerWeight")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.NetContainerWeight||void 0===this.state.data.NetContainerWeight?_.a:this.state.data.NetContainerWeight,title:"Net Container Weight"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideFloorInnerSection")}},l.a.createElement(A.a,null)),title:"Inside floor inner section"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideFloorInnerSection")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideFloorInnerSection||void 0===this.state.data.InsideFloorInnerSection?_.a:this.state.data.InsideFloorInnerSection,title:"Inside floor inner section"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideFloorMiddleSection")}},l.a.createElement(A.a,null)),title:"Inside floor middle section"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideFloorMiddleSection")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideFloorMiddleSection||void 0===this.state.data.InsideFloorMiddleSection?_.a:this.state.data.InsideFloorMiddleSection,title:"Inside floor middle section"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideFloorOuterSection")}},l.a.createElement(A.a,null)),title:"Inside floor outer section"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideFloorOuterSection")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideFloorOuterSection||void 0===this.state.data.InsideFloorOuterSection?_.a:this.state.data.InsideFloorOuterSection,title:"Inside floor outer section"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("OutsideCeilingInnerHalf")}},l.a.createElement(A.a,null)),title:"Outside ceiling inner half"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("OutsideCeilingInnerHalf")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.OutsideCeilingInnerHalf||void 0===this.state.data.OutsideCeilingInnerHalf?_.a:this.state.data.OutsideCeilingInnerHalf,title:"Outside ceiling inner half"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("OutsideCeilingOuterHalf")}},l.a.createElement(A.a,null)),title:"Outside ceiling Outer half"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("OutsideCeilingOuterHalf")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.OutsideCeilingOuterHalf||void 0===this.state.data.OutsideCeilingOuterHalf?_.a:this.state.data.OutsideCeilingOuterHalf,title:"Outside ceiling Outer half"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideCleaningProcess")}},l.a.createElement(A.a,null)),title:"Outside ceiling Outer half"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideCleaningProcess")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.InsideCleaningProcess||void 0===this.state.data.InsideCleaningProcess?_.a:this.state.data.InsideCleaningProcess,title:"Inside cleaning process"}))))))),l.a.createElement(S.a,{item:!0,container:!0,xs:12},l.a.createElement(G,{label:"Group: 2. Stuffing",style:{width:"100%",padding:"10px"}},l.a.createElement(S.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",wrap:"wrap"},l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("StuffingFirstpallet")}},l.a.createElement(A.a,null)),title:"Stuffing first pallet"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("StuffingFirstpallet")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.StuffingFirstpallet||void 0===this.state.data.StuffingFirstpallet?_.a:this.state.data.StuffingFirstpallet,title:"Stuffing first pallet"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("AfterStuffing8thPallet")}},l.a.createElement(A.a,null)),title:"After stuffing 8th pallet"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("AfterStuffing8thPallet")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.AfterStuffing8thPallet||void 0===this.state.data.AfterStuffing8thPallet?_.a:this.state.data.AfterStuffing8thPallet,title:"After stuffing 8th pallet"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("AfterStuffingLastPallet")}},l.a.createElement(A.a,null)),title:"After stuffing last pallet"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("AfterStuffingLastPallet")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.AfterStuffingLastPallet||void 0===this.state.data.AfterStuffingLastPallet?_.a:this.state.data.AfterStuffingLastPallet,title:"After stuffing last pallet"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("AfterClosedContainerDoor")}},l.a.createElement(A.a,null)),title:"After closed container door"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("AfterClosedContainerDoor")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.AfterClosedContainerDoor||void 0===this.state.data.AfterClosedContainerDoor?_.a:this.state.data.AfterClosedContainerDoor,title:"After closed container door"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("SealingContainer")}},l.a.createElement(A.a,null)),title:"Sealing container (Seal close up)"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("SealingContainer")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.SealingContainer||void 0===this.state.data.SealingContainer?_.a:this.state.data.SealingContainer,title:"Sealing container (Seal close up)"})))),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(a){e.removeImage("InsideContainerLeftWall")}},l.a.createElement(A.a,null)),title:"\tDiver and container"}),l.a.createElement(W.a,{onClick:function(a){e.openCamera("InsideContainerLeftWall")}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:""===this.state.data.DiverAndContainer||void 0===this.state.data.DiverAndContainer?_.a:this.state.data.DiverAndContainer,title:"Diver and container"}))))))),l.a.createElement("div",{class:"form-btn-container"},l.a.createElement(S.a,{item:!0,style:{padding:10},xs:3,sm:2,md:1},l.a.createElement(F.a,{variant:"contained",color:"primary",onClick:this.save},"Save")),l.a.createElement(S.a,{item:!0,style:{padding:10},xs:3,sm:2,md:1},l.a.createElement(F.a,{variant:"contained"},"Cancel"))),l.a.createElement(D.a,{fullScreen:!0,open:this.state.openCamera,onClose:this.closeCamera,TransitionComponent:this.Transition},this.state.openCamera?l.a.createElement(T,{closeCamera:this.closeCamera,handelChange:this.handelChange,actionFor:this.state.currentActionName}):""),l.a.createElement(Y,{modalState:this.state.modalState,contents:this.state.imageContent,closeModal:this.closeModal}))}}]),a}(l.a.Component),X=t(30),Z=(t(151),t(199)),ee=t(200),ae=t(201),te=t(202),ne=t(100),le=t.n(ne),ie=(Object(n.forwardRef)((function(e,a){return l.a.createElement(v.a,{direction:"up"})})),{ShippingType:{valid:!0,message:"",value:""},Factory:{valid:!0,message:"",value:""},StuffingDate:{valid:!0,message:"",value:""},SI:{valid:!0,message:"",value:""},Container:{valid:!0,message:"",value:""}}),re=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(C.a)(this,Object(E.a)(a).call(this,e))).openImageForm=function(){t.setState({openImageForm:!0})},t.closeImageForm=function(){t.setState({openImageForm:!1})},t.onImgSave=function(){var e=Object(X.a)(t.state.data),a=Object(g.a)({},t.state.currentImgData);e.push(a),t.setState({data:e,openImageForm:!1,currentImgData:""})},t.onImgCancel=function(){var e=Object(g.a)({},t.state.formState);e.valid=!0,e.errors=[],t.setState({currentImgData:"",openImageForm:!1,formState:e})},t.handleDateChange=function(e,a){if(void 0!==e&&null!==e){var n=new Date(e);t.handelChange(n,a)}},t.save=function(){},t.state={data:[],formControls:Object(g.a)({},ie),currentImgData:"",openCamera:!1,openImageForm:!1,currentActionName:"ImageData",imageContent:"",modalState:!1,factorySelectedValue:"",formState:{valid:!0,errors:[]}},t.closeCamera=t.closeCamera.bind(Object(p.a)(t)),t.handelChange=t.handelChange.bind(Object(p.a)(t)),t.openCamera=t.openCamera.bind(Object(p.a)(t)),t.handelChange=t.handelChange.bind(Object(p.a)(t)),t.closeModal=t.closeModal.bind(Object(p.a)(t)),t.imgFormOnChange=t.imgFormOnChange.bind(Object(p.a)(t)),t.onImgSave=t.onImgSave.bind(Object(p.a)(t)),t.onImgCancel=t.onImgCancel.bind(Object(p.a)(t)),t}return Object(I.a)(a,e),Object(f.a)(a,[{key:"shouldComponentUpdate",value:function(e,a){return!0}},{key:"openCamera",value:function(e){if(void 0===e||null===e)this.setState({openCamera:!0});else{var a={img:this.state.data[e].ImageData,propertyName:this.state.data[e].Description};this.setState({modalState:!0,imageContent:a})}}},{key:"closeCamera",value:function(){this.setState({openCamera:!1})}},{key:"closeModal",value:function(){this.setState({modalState:!1})}},{key:"imgFormOnChange",value:function(e,a){var t=Object(g.a)({},this.state.currentImgData),n=Object(g.a)({},this.state.formState);void 0!==e&&null!==e&&""!==e?(t[a]=e,n.valid=!0,this.setState({currentImgData:t,formState:n})):(n.valid=!1,this.setState({formState:n}))}},{key:"renderImageData",value:function(){var e=this;return this.state.data.map((function(a,t){return l.a.createElement(S.a,{key:t,item:!0,style:{padding:10},xs:12,sm:6,md:3,lg:3},l.a.createElement(k.a,null,l.a.createElement(j.a,{action:l.a.createElement(x.a,{"aria-label":"close",onClick:function(t){e.removeImage(a)}},l.a.createElement(A.a,null)),title:a.Description}),l.a.createElement(W.a,{onClick:function(a){e.openCamera(t)}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:a.ImageData,title:a.Description}))))}))}},{key:"handelChange",value:function(e,a){var t=Object(g.a)({},this.state.formControls),n=Object(g.a)({},this.state.data);!this.state.formControls.hasOwnProperty(a)||""!==e&&void 0!==e?(this.state.formControls.hasOwnProperty(a)&&(t[a].valid=!0,t[a].message=""),n[a]=e):(t[a].valid=!1,t[a].message="".concat(a," cannot be Empty")),"Factory"===a&&this.setState({factorySelectedValue:e}),this.setState({data:n,formControls:t})}},{key:"removeImage",value:function(e){var a=Object(X.a)(this.state.data),t=a.indexOf(e);a.splice(t,1),this.setState({data:a})}},{key:"render",value:function(){var e=this;return l.a.createElement(S.a,{container:!0},l.a.createElement(b.a,{variant:"h4"},"Stuffing Container"),l.a.createElement(S.a,{item:!0,container:!0,xs:12},l.a.createElement(S.a,{container:!0,direction:"row",justify:"flex-start",wrap:"wrap"},l.a.createElement(S.a,{item:!0,style:{padding:10},xs:12,sm:6,md:6,lg:6},l.a.createElement(y.a,{style:{width:"100%",margin:4}},l.a.createElement(O.a,{id:"Shipping_Type",label:"Shipping Type",error:!this.state.formControls.ShippingType.valid,helperText:this.state.formControls.ShippingType.message,defaultValue:"",className:"",onChange:function(a){return e.handelChange(a.target.value,"ShippingType")},margin:"dense"}))))),l.a.createElement(S.a,{item:!0,container:!0,xs:12},l.a.createElement(G,{label:"Group: 1. Before Stuffing",style:{width:"100%",padding:"10px"}},l.a.createElement(S.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",wrap:"wrap"},0===this.state.data.length?l.a.createElement("h5",null,"No Data"):"",this.renderImageData()))),l.a.createElement("div",{className:"floating-btn-container"},l.a.createElement(Z.a,{color:"primary","aria-label":"add",onClick:this.openImageForm},l.a.createElement(le.a,null))),l.a.createElement(D.a,{open:this.state.openImageForm,onClose:this.closeImageForm,"aria-labelledby":"Add Image",style:{minWidth:"50%"}},l.a.createElement(ee.a,{id:"dialog-title"},"Add Image"),l.a.createElement(ae.a,null,l.a.createElement(S.a,{container:!0,direction:"column",justify:"flex-start",wrap:"wrap"},l.a.createElement(S.a,{item:!0,style:{padding:4}},l.a.createElement(y.a,{style:{width:"100%",margin:4}},l.a.createElement(O.a,{id:"Description",label:"Description",error:!this.state.formState,helperText:"Image Description cannot be empty.",defaultValue:"",className:"",onChange:function(a){return e.imgFormOnChange(a.target.value,"Description")},margin:"dense"}))),l.a.createElement(S.a,{item:!0,style:{padding:10}},l.a.createElement(k.a,null,l.a.createElement(W.a,{onClick:function(a){e.openCamera(null)}},l.a.createElement(w.a,{style:{height:250,backgroundSize:"cover"},image:void 0===this.state.currentImgData.ImageData?_.a:this.state.currentImgData.ImageData})))))),l.a.createElement(te.a,null,l.a.createElement(F.a,{onClick:this.onImgCancel,color:"primary"},"Cancel"),l.a.createElement(F.a,{onClick:this.onImgSave,color:"primary"},"Save"))),l.a.createElement(D.a,{fullScreen:!0,open:this.state.openCamera,onClose:this.closeCamera,TransitionComponent:this.Transition},this.state.openCamera?l.a.createElement(T,{closeCamera:this.closeCamera,handelChange:this.imgFormOnChange,actionFor:this.state.currentActionName}):""),l.a.createElement(Y,{modalState:this.state.modalState,contents:this.state.imageContent,closeModal:this.closeModal}))}}]),a}(l.a.Component),oe=t(152),se=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(C.a)(this,Object(E.a)(a).call(this,e))).generateQr=function(){var e="".concat(t.state.Value1,":").concat(t.state.Value2);console.log(e),t.setState({QRValue:e})},t.state={QRValue:"",Value1:"",Value2:""},t}return Object(I.a)(a,e),Object(f.a)(a,[{key:"handelchange",value:function(e,a){"Value1"===a&&this.setState({Value1:e}),"Value2"===a&&this.setState({Value2:e})}},{key:"render",value:function(){var e=this;return l.a.createElement(S.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",wrap:"wrap"},l.a.createElement(S.a,{item:!0,xs:12,md:6},l.a.createElement(O.a,{id:"Value1",label:"Value1",defaultValue:this.state.Value1,className:"",onChange:function(a){return e.handelchange(a.target.value,"Value1")},margin:"dense"})),l.a.createElement(S.a,{item:!0,xs:12,md:6},l.a.createElement(O.a,{id:"Value2",label:"Value2",defaultValue:this.state.Value1,className:"",onChange:function(a){return e.handelchange(a.target.value,"Value2")},margin:"dense"})),l.a.createElement(S.a,{item:!0,xs:12,md:6},""!==this.state.QRValue&&void 0!==this.state.QRValue?l.a.createElement(oe,{value:this.state.QRValue,renderAs:"svg"}):""),l.a.createElement(S.a,{item:!0,xs:12,md:6},l.a.createElement(F.a,{onClick:this.generateQr,color:"primary"},"Save")))}}]),a}(l.a.Component),ce=t(12),me=t(101),de=t.n(me),ue=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(C.a)(this,Object(E.a)(a).call(this,e))).handleScan=function(e){e&&t.setState({result:e})},t.handleError=function(e){console.error(e)},t.state={result:""},t}return Object(I.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return l.a.createElement(S.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",wrap:"wrap"},l.a.createElement(S.a,{item:!0,xs:12,md:6},l.a.createElement(de.a,Object(ce.a)({delay:300,onError:this.handleError,onScan:this.handleScan,style:{width:"100%"}},"delay",5)),l.a.createElement("h5",null,this.state.result)))}}]),a}(l.a.Component);var ge=function(){return l.a.createElement("div",{className:"App",style:{padding:15}},l.a.createElement(o.a,null,l.a.createElement(c.a,{component:"div"},l.a.createElement(m.a,{button:!0,component:o.b,to:"/StuffingContainer"},l.a.createElement(d.a,{primary:"StuffingContainer"})),l.a.createElement(u.a,null),l.a.createElement(m.a,{button:!0,component:o.b,to:"/StuffingContainerDynamic"},l.a.createElement(d.a,{primary:"StuffingContainerDynamic"})),l.a.createElement(u.a,null),l.a.createElement(m.a,{button:!0,component:o.b,to:"/QRCodeGeneration"},l.a.createElement(d.a,{primary:"QRCodeGeneration"})),l.a.createElement(u.a,null),l.a.createElement(m.a,{button:!0,component:o.b,to:"/QrReader"},l.a.createElement(d.a,{primary:"QrReader"}))),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/StuffingContainer",render:function(){return l.a.createElement(K,null)}}),l.a.createElement(s.a,{exact:!0,path:"/StuffingContainerDynamic",render:function(){return l.a.createElement(re,null)}}),l.a.createElement(s.a,{exact:!0,path:"/QRCodeGeneration",render:function(){return l.a.createElement(se,null)}}),l.a.createElement(s.a,{exact:!0,path:"/QrReader",render:function(){return l.a.createElement(ue,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t.p+"static/media/openCamera_3.4b1287b9.png"}},[[116,1,2]]]);
//# sourceMappingURL=main.32f6d908.chunk.js.map