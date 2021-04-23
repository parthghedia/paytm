(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Period = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF4036").s().p("A14V4QpEpDAAs1QAAs0JEpEQJEpEM0AAQM1AAJDJEQJFJEAAM0QAAM1pFJDQpDJFs1AAQs0AApEpFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.1,-198.1,396.2,396.2);


(lib.Fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF4036").s().p("EhR6BRnMAAAijNMCj1AAAMAAACjNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-524.2,-522.3,1048.5,1044.6);


(lib.DotGrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_149 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(661));

	// PeriodDot
	this.instance = new lib.Period("synched",0);
	this.instance.setTransform(0.05,0.05,0.2101,0.2101,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:1,regY:1,scaleX:0.3182,scaleY:0.3182,x:0.3,y:0.3},149,cjs.Ease.cubicOut).wait(56).to({startPosition:0},0).to({_off:true},1).wait(604));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63,-63,126.3,126.3);


// stage content:
(lib.PeriodAnim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [220];
	// timeline functions:
	this.frame_220 = function() {
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(220).call(this.frame_220).wait(1));

	// Layer_21_copy_copy_copy_copy_copy_copy
	this.instance = new lib.DotGrow("synched",0);
	this.instance.setTransform(485.75,108.4,2.5262,2.696,0,0,0,0,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).wait(102));

	// Layer_21_copy_copy_copy_copy_copy
	this.instance_1 = new lib.DotGrow("synched",0);
	this.instance_1.setTransform(88.15,-6.55,2.5262,2.696,0,0,0,0,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(119).to({_off:false},0).wait(102));

	// Layer_21_copy_copy_copy_copy
	this.instance_2 = new lib.DotGrow("synched",0);
	this.instance_2.setTransform(1041.5,803.05,2.5262,2.696,0,0,0,0,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(119).to({_off:false},0).wait(102));

	// Layer_21_copy_copy_copy
	this.instance_3 = new lib.DotGrow("synched",0);
	this.instance_3.setTransform(490.55,276.1,2.5262,2.696,0,0,0,0,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(119).to({_off:false},0).wait(102));

	// Layer_21_copy_copy
	this.instance_4 = new lib.DotGrow("synched",0);
	this.instance_4.setTransform(490.55,276.1,2.5262,2.696,0,0,0,0,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(118).to({_off:false},0).wait(103));

	// Layer_21_copy
	this.instance_5 = new lib.DotGrow("synched",0);
	this.instance_5.setTransform(801.95,89.25,2.5262,2.696,0,0,0,0,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(118).to({_off:false},0).wait(103));

	// Layer_21
	this.instance_6 = new lib.DotGrow("synched",0);
	this.instance_6.setTransform(30.65,357.35,1.72,1.8356);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(118).to({_off:false},0).wait(103));

	// Layer_17
	this.instance_7 = new lib.DotGrow("synched",0);
	this.instance_7.setTransform(985.1,38.4,1.5932,1.5932);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(118).to({_off:false},0).wait(103));

	// Layer_19
	this.instance_8 = new lib.DotGrow("synched",0);
	this.instance_8.setTransform(232.75,500.55,1,1,0,0,0,0.1,-3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(117).to({_off:false},0).wait(104));

	// Layer_18_copy_copy
	this.instance_9 = new lib.DotGrow("synched",0);
	this.instance_9.setTransform(382.6,360.3,1.4369,1.4369,0,0,0,0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(117).to({_off:false},0).wait(104));

	// Layer_18_copy
	this.instance_10 = new lib.DotGrow("synched",0);
	this.instance_10.setTransform(456.2,626.95,1.4369,1.4369,0,0,0,0.1,0.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(117).to({_off:false},0).wait(104));

	// Layer_18
	this.instance_11 = new lib.DotGrow("synched",0);
	this.instance_11.setTransform(669.4,984.25,2.6529,2.6529,0,0,0,0.1,0.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(117).to({_off:false},0).wait(104));

	// Layer_15_copy
	this.instance_12 = new lib.DotGrow("synched",0);
	this.instance_12.setTransform(295.25,500.25,1.7303,1.7303,0,0,0,0.2,0.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(116).to({_off:false},0).wait(105));

	// Layer_15
	this.instance_13 = new lib.DotGrow("synched",0);
	this.instance_13.setTransform(10.1,807.1,3.0565,3.0565,0,0,0,0.1,0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(116).to({_off:false},0).wait(105));

	// Layer_14_copy
	this.instance_14 = new lib.DotGrow("synched",0);
	this.instance_14.setTransform(372.3,672.3,1.9,1.9,0,0,0,0.3,0.3);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(115).to({_off:false},0).wait(106));

	// Layer_14
	this.instance_15 = new lib.DotGrow("synched",0);
	this.instance_15.setTransform(334.25,70.2,2.3789,2.3789,0,0,0,0.3,0.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(115).to({_off:false},0).wait(106));

	// Layer_13_copy
	this.instance_16 = new lib.DotGrow("synched",0);
	this.instance_16.setTransform(68.85,550.25,3.254,3.254,0,0,0,0.4,0.2);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(114).to({_off:false},0).wait(107));

	// Layer_13
	this.instance_17 = new lib.DotGrow("synched",0);
	this.instance_17.setTransform(1006.4,620.65,2.5168,2.5168,0,0,0,0.4,0.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(114).to({_off:false},0).wait(107));

	// Layer_12_copy
	this.instance_18 = new lib.DotGrow("synched",0);
	this.instance_18.setTransform(923.3,856.2,2.6314,2.6314,0,0,0,0.2,0.3);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(113).to({_off:false},0).wait(108));

	// Layer_12
	this.instance_19 = new lib.DotGrow("synched",0);
	this.instance_19.setTransform(347.05,233.9,2.6314,2.6314,0,0,0,0.2,0.3);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(113).to({_off:false},0).wait(108));

	// Layer_11_copy
	this.instance_20 = new lib.DotGrow("synched",0);
	this.instance_20.setTransform(154,960.15,3.1353,3.1353,0,0,0,0.3,0.3);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(112).to({_off:false},0).wait(109));

	// Layer_11
	this.instance_21 = new lib.DotGrow("synched",0);
	this.instance_21.setTransform(136.85,281.1,2.5094,2.5094,0,0,0,0.2,0.3);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(112).to({_off:false},0).wait(109));

	// Layer_10_copy
	this.instance_22 = new lib.DotGrow("synched",0);
	this.instance_22.setTransform(855.75,365.3,1.7322,1.7322,0,0,0,0.3,0.3);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(111).to({_off:false},0).wait(110));

	// DotGrow
	this.instance_23 = new lib.DotGrow("synched",0);
	this.instance_23.setTransform(369.3,862.05,1.7322,1.7322,0,0,0,0.3,0.3);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(111).to({_off:false},0).wait(110));

	// Layer_10_copy
	this.instance_24 = new lib.DotGrow("synched",5);
	this.instance_24.setTransform(276.25,508.9,2.5505,2.5505,0,0,0,0.3,0.3);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(110).to({_off:false},0).wait(111));

	// Layer_10
	this.instance_25 = new lib.DotGrow("synched",0);
	this.instance_25.setTransform(645.1,68.15,2.5505,2.5505,0,0,0,0.3,0.3);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(110).to({_off:false},0).wait(111));

	// Layer_9_copy
	this.instance_26 = new lib.DotGrow("synched",0);
	this.instance_26.setTransform(948.45,420.3,2.2251,2.2251,0,0,0,0.2,0.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(109).to({_off:false},0).wait(112));

	// Layer_9
	this.instance_27 = new lib.DotGrow("synched",0);
	this.instance_27.setTransform(84,184.25,2.2251,2.2251,0,0,0,0.2,0.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(108).to({_off:false},0).wait(113));

	// Layer_8_copy
	this.instance_28 = new lib.DotGrow("synched",0);
	this.instance_28.setTransform(735.8,662.25,1.7304,1.7304,0,0,0,0.1,0.1);

	this.instance_29 = new lib.DotGrow("synched",0);
	this.instance_29.setTransform(724.8,901.8,1.7304,1.7304,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_29},{t:this.instance_28}]},107).wait(114));

	// Layer_8
	this.instance_30 = new lib.DotGrow("synched",0);
	this.instance_30.setTransform(617.5,172.25,1.7304,1.7304,0,0,0,0.1,0.1);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(106).to({_off:false},0).wait(115));

	// Layer_7_copy_copy
	this.instance_31 = new lib.DotGrow("synched",20);
	this.instance_31.setTransform(491.45,856.25,2.2101,2.2101,0,0,0,0.2,0.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(105).to({_off:false},0).wait(116));

	// Layer_7_copy
	this.instance_32 = new lib.DotGrow("synched",0);
	this.instance_32.setTransform(788.55,784.2,1.3973,1.3973,0,0,0,0.3,0.1);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(104).to({_off:false},0).wait(117));

	// Layer_7
	this.instance_33 = new lib.DotGrow("synched",0);
	this.instance_33.setTransform(546.15,318.15,2.1373,2.1373,0,0,0,0.2,0.1);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(103).to({_off:false},0).wait(118));

	// Layer_6_copy
	this.instance_34 = new lib.DotGrow("synched",0);
	this.instance_34.setTransform(558.35,594.05,1.6762,1.6762,0,0,0,0.3,0.3);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(101).to({_off:false},0).wait(120));

	// Layer_6
	this.instance_35 = new lib.DotGrow("synched",25);
	this.instance_35.setTransform(883.4,965,2.5698,2.5698,0,0,0,0.3,0.3);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(100).to({_off:false},0).wait(121));

	// Layer_5_copy
	this.instance_36 = new lib.DotGrow("synched",0);
	this.instance_36.setTransform(573.05,883.25,2.1594,2.1594,0,0,0,0.1,0.1);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(98).to({_off:false},0).wait(123));

	// Layer_5
	this.instance_37 = new lib.DotGrow("synched",0);
	this.instance_37.setTransform(891.85,766.8,1.8628,1.8628,0,0,0,0.1,0.1);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(97).to({_off:false},0).wait(124));

	// Layer_4_copy
	this.instance_38 = new lib.DotGrow("synched",0);
	this.instance_38.setTransform(679.8,342.1,1.9697,1.9697,0,0,0,0.2,0.1);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(95).to({_off:false},0).wait(126));

	// Layer_4
	this.instance_39 = new lib.DotGrow("synched",0);
	this.instance_39.setTransform(796.05,504.55,2.7782,2.7782,0,0,0,0.1,0.1);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(93).to({_off:false},0).wait(128));

	// Layer_3_copy
	this.instance_40 = new lib.DotGrow("synched",0);
	this.instance_40.setTransform(404,756.7,1.6636,1.6636,0,0,0,0.1,0.2);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(91).to({_off:false},0).wait(130));

	// Layer_3
	this.instance_41 = new lib.DotGrow("synched",0);
	this.instance_41.setTransform(446.9,480.8,2.6901,2.6901,0,0,0,0.1,0.2);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(90).to({_off:false},0).wait(131));

	// Layer_2_copy_copy
	this.instance_42 = new lib.DotGrow("synched",31);
	this.instance_42.setTransform(240.65,59.45,1.4912,1.4912,0,0,0,22.7,-6.3);
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(88).to({_off:false},0).wait(133));

	// Layer_2_copy
	this.instance_43 = new lib.DotGrow("synched",0);
	this.instance_43.setTransform(192.9,145.65,1.4912,1.4912,0,0,0,0.3,0.1);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(86).to({_off:false},0).wait(135));

	// Layer_2
	this.instance_44 = new lib.DotGrow("synched",0);
	this.instance_44.setTransform(171.35,645.3,1.9346,1.9346,0,0,0,0.2,0.1);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(84).to({_off:false},0).wait(137));

	// PeriodDot_copy
	this.instance_45 = new lib.DotGrow("synched",0);
	this.instance_45.setTransform(826.75,625.05,1.9273,1.9704,0,0,0,0.3,0.1);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(81).to({_off:false},0).wait(140));

	// PeriodDot
	this.instance_46 = new lib.DotGrow("synched",0);
	this.instance_46.setTransform(449.65,211.2,1.5653,1.6003,0,0,0,0.3,0.1);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(77).to({_off:false},0).wait(144));

	// PeriodDot_copy
	this.instance_47 = new lib.DotGrow("synched",0);
	this.instance_47.setTransform(300.4,585.85,1.2819,1.2819,0,0,0,0.3,0.1);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(73).to({_off:false},0).wait(148));

	// PeriodDot
	this.instance_48 = new lib.DotGrow("synched",0);
	this.instance_48.setTransform(565.15,735.35,1.9346,1.9346,0,0,0,0.3,0.1);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(70).to({_off:false},0).wait(151));

	// PeriodDot_copy
	this.instance_49 = new lib.DotGrow("synched",0);
	this.instance_49.setTransform(772.65,271.8,1.9346,1.9346,0,0,0,0.2,0.1);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(66).to({_off:false},0).wait(155));

	// PeriodDot
	this.instance_50 = new lib.DotGrow("synched",0);
	this.instance_50.setTransform(650.1,717.85,1.9346,1.9346,0,0,0,0.2,0.1);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(62).to({_off:false},0).wait(159));

	// PeriodDot_copy
	this.instance_51 = new lib.DotGrow("synched",0);
	this.instance_51.setTransform(655.4,546.9,1.168,1.168,0,0,0,0.1,0.1);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(57).to({_off:false},0).wait(164));

	// PeriodDot
	this.instance_52 = new lib.DotGrow("synched",0);
	this.instance_52.setTransform(932.3,218.45,2.4086,2.4086,0,0,0,0.1,0.1);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(53).to({_off:false},0).wait(168));

	// PeriodDot_copy
	this.instance_53 = new lib.DotGrow("synched",0);
	this.instance_53.setTransform(428.7,1001.1,2.0584,2.0584,0,0,0,0.1,0.1);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(48).to({_off:false},0).wait(173));

	// PeriodDot
	this.instance_54 = new lib.DotGrow("synched",0);
	this.instance_54.setTransform(208.15,792.75,2.0584,2.0584,0,0,0,0.1,0.1);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(44).to({_off:false},0).wait(177));

	// PeriodDot_copy
	this.instance_55 = new lib.DotGrow("synched",0);
	this.instance_55.setTransform(619.2,460,1.3529,1.3529,0,0,0,0.1,0);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(39).to({_off:false},0).wait(182));

	// PeriodDot
	this.instance_56 = new lib.DotGrow("synched",0);
	this.instance_56.setTransform(692.75,803.2,1.3529,1.3529,0,0,0,0.1,0);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(33).to({_off:false},0).wait(188));

	// PeriodDot_copy
	this.instance_57 = new lib.DotGrow("synched",0);
	this.instance_57.setTransform(182.6,423.95,1.5109,1.5109);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(27).to({_off:false},0).wait(194));

	// PeriodDot
	this.instance_58 = new lib.DotGrow("synched",0);
	this.instance_58.setTransform(253.65,367.6,1.5109,1.5109);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(15).to({_off:false},0).wait(206));

	// Fill
	this.instance_59 = new lib.Fill("synched",0);
	this.instance_59.setTransform(512.55,512.5);
	this.instance_59.alpha = 0;
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(187).to({_off:false},0).to({alpha:1},21).wait(13));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1199.5,1156.2);
// library properties:
lib.properties = {
	id: '61C6914CC9162B40BAF64D1BF7D1B9E6',
	width: 1024,
	height: 1024,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['61C6914CC9162B40BAF64D1BF7D1B9E6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;