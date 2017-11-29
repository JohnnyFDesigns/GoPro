(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._6019899_R_Z007A = function() {
	this.initialize(img._6019899_R_Z007A);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1500,346);


(lib._6019899_R_Z010A = function() {
	this.initialize(img._6019899_R_Z010A);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,515);


(lib.CTA = function() {
	this.initialize(img.CTA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,42);


(lib.GreyBorder = function() {
	this.initialize(img.GreyBorder);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);


(lib.LOGO = function() {
	this.initialize(img.LOGO);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,90);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6019899_R_Z007A();
	this.instance.parent = this;
	this.instance.setTransform(0,226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,226,1500,346), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6019899_R_Z010A();
	this.instance.parent = this;
	this.instance.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(3,0,970,515), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("A18KyIAA1jMAr5AAAIAAVjg");
	this.shape.setTransform(140.5,69);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281.1,138);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBvQgKgDgGgHQgGgGgEgJQgDgJAAgMIAAiBQAAgMADgJQAEgJAGgHQAGgGAKgDQAJgDALAAQAMAAAJADQAJADAHAGQAGAHAEAJQADAJAAAMIAACBQAAAMgDAJQgEAJgGAGQgHAHgJADQgJADgMAAQgLAAgJgDgAgKhNQgEAFAAAIIAACBQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIIAAiBQAAgIgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape.setTransform(200.5,95.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AARBvIgFhEQgBgJgFgFQgEgEgGAAIgMAAIAABWIgjAAIAAjdIAvAAQALAAAKADQAJADAHAGQAHAHAEAKQAEAMAAAOIAAAXQAAAQgEAMQgFAJgJAHQAIAFADAHQAFAIABALIAGBEgAgQgEIAMAAQAHAAAFgEQAFgFAAgPIAAgcQAAgOgFgGQgFgEgHAAIgMAAg");
	this.shape_1.setTransform(186.1,95.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBvIAAjdIAvAAQALAAAKADQAKADAGAGQAIAHADAKQAEAMAAAOIAAAaQAAAPgEALQgDAJgIAHQgGAGgKADQgKADgLAAIgMAAIAABWgAgOgEIAMAAQAHAAAFgEQAFgFAAgPIAAgcQAAgOgFgGQgFgEgHAAIgMAAg");
	this.shape_2.setTransform(171.6,95.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUBvQgKgDgGgHQgGgGgEgJQgDgJAAgMIAAiBQAAgMADgJQAEgJAGgHQAGgGAKgDQAJgDALAAQAMAAAJADQAJADAHAGQAGAHAEAJQADAJAAAMIAACBQAAAMgDAJQgEAJgGAGQgHAHgJADQgJADgMAAQgLAAgJgDgAgKhNQgEAFAAAIIAACBQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIIAAiBQAAgIgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_3.setTransform(157,95.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUBvQgKgDgGgHQgGgGgEgJQgDgJAAgMIAAiBQAAgMADgJQAEgJAGgHQAGgGAKgDQAJgDALAAQAMAAAJADQAJADAHAHQAGAGAEAJQADAJAAAMIAAAGIgjAAIAAgGQAAgIgEgFQgEgFgHAAQgGAAgEAFQgEAFAAAIIAACBQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIIAAguIgPAAIAFgdIAtAAIAABLQAAAMgDAJQgEAJgGAGQgHAHgJADQgJADgMAAQgLAAgJgDg");
	this.shape_4.setTransform(142.5,95.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARBvIAAhiIghAAIAABiIgjAAIAAjdIAjAAIAABeIAhAAIAAheIAjAAIAADdg");
	this.shape_5.setTransform(121,95.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBvIAAi/IgcAAIAAgeIBdAAIgGAeIgZAAIAAC/g");
	this.shape_6.setTransform(107.2,95.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBvIAAjdIAiAAIAADdg");
	this.shape_7.setTransform(96.6,95.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARBwIgRh6IgRB6IgkAAIgjjfIAkAAIARCFIASiFIAjAAIASCFIARiFIAkAAIgjDfg");
	this.shape_8.setTransform(82.5,95.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIBVAAIAAAeIgyAAIAABAIAtAAIAAAdIgtAAIAABEIAyAAIAAAeg");
	this.shape_9.setTransform(59.7,95.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AARBvIgFhEQgBgJgFgFQgFgEgFAAIgNAAIAABWIgjAAIAAjdIAwAAQALAAAKADQAKADAGAGQAIAHADAKQAEAMAAAOIAAAXQAAAQgEAMQgFAJgJAHQAHAFAFAHQADAIABALIAHBEgAgRgEIANAAQAHAAAFgEQAFgFAAgPIAAgcQAAgOgFgGQgFgEgHAAIgNAAg");
	this.shape_10.setTransform(45.9,95.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUBvQgKgDgGgHQgGgGgEgJQgDgJAAgMIAAiBQAAgMADgJQAEgJAGgHQAGgGAKgDQAJgDALAAQAMAAAJADQAJADAHAGQAGAHAEAJQADAJAAAMIAACBQAAAMgDAJQgEAJgGAGQgHAHgJADQgJADgMAAQgLAAgJgDgAgKhNQgEAFAAAIIAACBQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIIAAiBQAAgIgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_11.setTransform(31,95.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIBVAAIAAAeIgyAAIAABGIAqAAIgGAdIgkAAIAABcg");
	this.shape_12.setTransform(17.9,95.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIBVAAIAAAeIgyAAIAABAIAtAAIAAAdIgtAAIAABEIAyAAIAAAeg");
	this.shape_13.setTransform(5.1,95.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgzBvIAAjdIAuAAQALAAAKADQAKADAGAGQAIAHADAKQAEAMAAAOIAAAHQAAAQgEALQgFALgIAHQALAFAFAMQAGAMAAATIAAALQAAAPgEAKQgEALgHAHQgHAGgKADQgJADgLAAgAgQBRIAQAAQAHAAAEgEQAGgGAAgOIAAgUQAAgPgGgFQgEgEgHAAIgQAAgAgQgQIALAAQAHAAAEgFQAGgFAAgOIAAgQQAAgOgGgGQgEgEgHAAIgLAAg");
	this.shape_14.setTransform(-8.8,95.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AARBvIgFhEQgBgJgFgFQgFgEgFAAIgMAAIAABWIgjAAIAAjdIAvAAQALAAAJADQAKADAHAGQAHAHAEAKQAEAMAAAOIAAAXQAAAQgFAMQgEAJgIAHQAGAFAEAHQAEAIACALIAFBEgAgQgEIAMAAQAHAAAEgEQAGgFAAgPIAAgcQAAgOgGgGQgEgEgHAAIgMAAg");
	this.shape_15.setTransform(247.5,61.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIBVAAIAAAeIgyAAIAABAIAtAAIAAAdIgtAAIAABEIAyAAIAAAeg");
	this.shape_16.setTransform(233.9,61.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUBwIgmjfIAlAAIAVCRIAWiRIAlAAIgpDfg");
	this.shape_17.setTransform(220.2,61.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIBVAAIAAAeIgyAAIAABAIAtAAIAAAdIgtAAIAABEIAyAAIAAAeg");
	this.shape_18.setTransform(207.1,61.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAOBvIghh5IABA3IAABCIghAAIAAjdIAnAAIAgB5IAAg3IAAhCIAhAAIAADdg");
	this.shape_19.setTransform(192.8,61.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIBVAAIAAAeIgyAAIAABAIAtAAIAAAdIgtAAIAABEIAyAAIAAAeg");
	this.shape_20.setTransform(172.5,61.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AARBvIgmhjIAABjIgjAAIAAjdIAjAAIAABgIAmhgIAnAAIgtBsIAuBxg");
	this.shape_21.setTransform(159.1,61.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgQBvIAAjdIAiAAIAADdg");
	this.shape_22.setTransform(146.8,61.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIAjAAIAAC/IAyAAIgGAeg");
	this.shape_23.setTransform(136.9,61.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVBvQgIgDgHgHQgGgGgDgJQgEgJAAgMIAAgLIAjAAIAAALQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIIAAgIQAAgVgfgcQgQgNgHgMQgEgIgDgJQgDgKAAgLIAAgJQAAgMAEgJQADgJAGgHQAHgGAJgDQAKgDALAAQALAAAJADQAKADAGAGQAGAHAEAJQADAJAAAMIAAAGIgjAAIAAgGQAAgIgEgFQgEgFgGAAQgHAAgEAFQgEAFAAAIIAAAIQAAAIADAHQACAHAFAGQAEAGASAQQAPANAHALQAFAIACAJQADAJAAAMIAAAJQAAAMgDAJQgEAJgGAGQgHAHgJADQgKADgLAAQgLAAgKgDg");
	this.shape_24.setTransform(116.4,61.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIBVAAIAAAeIgyAAIAABAIAtAAIAAAdIgtAAIAABEIAyAAIAAAeg");
	this.shape_25.setTransform(103.3,61.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AARBvIgFhEQgBgJgFgFQgFgEgFAAIgNAAIAABWIgiAAIAAjdIAvAAQALAAAJADQAKADAHAGQAIAHADAKQAEAMAAAOIAAAXQAAAQgFAMQgEAJgIAHQAGAFAEAHQAEAIACALIAFBEgAgRgEIANAAQAHAAAEgEQAGgFAAgPIAAgcQAAgOgGgGQgEgEgHAAIgNAAg");
	this.shape_26.setTransform(89.5,61.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUBuQgJgEgHgGQgGgGgEgKQgDgJAAgLIAAiwIAjAAIAACwQAAAIAEAFQAEAEAGAAQAHAAAEgEQAEgFAAgIIAAiwIAjAAIAACwQAAALgDAJQgEAKgGAGQgGAGgKAEQgJADgMAAQgLAAgJgDg");
	this.shape_27.setTransform(74.4,62);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSBvIAAi/IgdAAIAAgeIBfAAIgHAeIgZAAIAAC/g");
	this.shape_28.setTransform(60.7,61.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAOBvIghh5IABA3IAABCIgiAAIAAjdIAoAAIAgB5IgBg3IAAhCIAiAAIAADdg");
	this.shape_29.setTransform(46.7,61.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIBVAAIAAAeIgyAAIAABAIAtAAIAAAdIgtAAIAABEIAyAAIAAAeg");
	this.shape_30.setTransform(33,61.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUBwIgmjfIAlAAIAVCRIAWiRIAlAAIgpDfg");
	this.shape_31.setTransform(19.3,61.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgxBvIAAjdIAvAAQALAAAKADQAKADAGAGQAIAHADAKQAEAMAAAOIAABvQAAAPgEAKQgDALgIAHQgGAGgKADQgKADgLAAgAgOBRIAMAAQAHAAAFgEQAFgGAAgOIAAhxQAAgOgFgGQgFgEgHAAIgMAAg");
	this.shape_32.setTransform(5,61.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAWBwIgHgzIgcAAIgIAzIglAAIAqjfIAlAAIAmDfgAAKAfIgJhAIgKBAIATAAg");
	this.shape_33.setTransform(-9.4,61.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgVBvQgIgDgHgHQgGgGgDgJQgEgJAAgMIAAgLIAjAAIAAALQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIIAAgIQAAgVgfgcQgQgNgHgMQgFgIgCgJQgDgKAAgLIAAgJQAAgMAEgJQADgJAGgHQAHgGAJgDQAKgDALAAQALAAAJADQAKADAGAGQAHAHADAJQADAJAAAMIAAAGIgjAAIAAgGQAAgIgEgFQgEgFgGAAQgHAAgEAFQgEAFAAAIIAAAIQAAAIADAHQACAHAFAGQAEAGASAQQAPANAHALQAFAIADAJQACAJAAAMIAAAJQAAAMgDAJQgDAJgHAGQgHAHgJADQgKADgLAAQgLAAgKgDg");
	this.shape_34.setTransform(148.3,28.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgHAnIgIgqIAAgjIAfAAIAAAjIgHAqg");
	this.shape_35.setTransform(137.6,21);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIBVAAIAAAeIgyAAIAABAIAtAAIAAAdIgtAAIAABEIAyAAIAAAeg");
	this.shape_36.setTransform(127.9,28.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIBVAAIAAAeIgyAAIAABGIAqAAIgGAdIgkAAIAABcg");
	this.shape_37.setTransform(115.3,28.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgRBvIAAjdIAiAAIAADdg");
	this.shape_38.setTransform(104.5,28.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIAjAAIAAC/IAyAAIgHAeg");
	this.shape_39.setTransform(94.6,28.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgqBvIAAjdIBVAAIAAAeIgyAAIAABAIAtAAIAAAdIgtAAIAABEIAyAAIAAAeg");
	this.shape_40.setTransform(75.2,28.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AARBvIgFhEQgBgJgFgFQgFgEgFAAIgMAAIAABWIgjAAIAAjdIAvAAQALAAAJADQAKADAHAGQAHAHAEAKQAEAMAAAOIAAAXQAAAQgFAMQgEAJgJAHQAIAFADAHQAFAIABALIAFBEgAgQgEIAMAAQAHAAAEgEQAGgFAAgPIAAgcQAAgOgGgGQgEgEgHAAIgMAAg");
	this.shape_41.setTransform(61.3,28.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgUBuQgJgEgHgGQgGgGgEgKQgDgJAAgLIAAiwIAjAAIAACwQAAAIAEAFQAEAEAGAAQAHAAAEgEQAEgFAAgIIAAiwIAjAAIAACwQAAALgDAJQgEAKgGAGQgGAGgKAEQgJADgMAAQgLAAgJgDg");
	this.shape_42.setTransform(46.3,28.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSBvIAAi/IgdAAIAAgeIBfAAIgHAeIgZAAIAAC/g");
	this.shape_43.setTransform(32.5,28.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgxBvIAAjdIAvAAQALAAAKADQAKADAGAGQAIAHADAKQAEAMAAAOIAAAaQAAAPgEALQgDAJgIAHQgGAGgKADQgKADgLAAIgMAAIAABWgAgOgEIAMAAQAHAAAFgEQAFgFAAgPIAAgcQAAgOgFgGQgFgEgHAAIgMAAg");
	this.shape_44.setTransform(19.3,28.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAWBwIgHgzIgcAAIgIAzIglAAIAqjfIAlAAIAmDfgAAKAfIgJhAIgKBAIATAAg");
	this.shape_45.setTransform(4.9,28.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUBvQgKgDgGgHQgGgGgEgJQgDgJAAgMIAAiBQAAgMADgJQAEgJAGgHQAGgGAKgDQAJgDALAAQAMAAAJADQAJADAHAGQAGAHAEAJQADAJAAAMIgjAGIAAgGQAAgIgEgFQgEgFgHAAQgGAAgEAFQgEAFAAAIIAACBQAAAIAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgIIAAgLIAjAAIAAALQAAAMgDAJQgEAJgGAGQgHAHgJADQgJADgMAAQgLAAgJgDg");
	this.shape_46.setTransform(-9.1,28.2);

	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(121.5,64.5,1.135,1.094,0,0,0,140.5,69);
	this.instance.alpha = 0.801;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38,-11,319.1,151);


// stage content:
(lib._4988_970x250_html = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Border/CTA/logo
	this.instance = new lib.LOGO();
	this.instance.parent = this;
	this.instance.setTransform(40,94,0.698,0.698);

	this.instance_1 = new lib.GreyBorder();
	this.instance_1.parent = this;

	this.instance_2 = new lib.CTA();
	this.instance_2.parent = this;
	this.instance_2.setTransform(789,208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(137));

	// Layer 2
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(809.7,105.7,1,1,0,0,0,140.5,66.5);
	this.instance_3.alpha = 0;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:121.5,regY:64.5,x:790.7,y:103.7,alpha:0.071},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.929},0).wait(1).to({alpha:1},0).wait(99).to({alpha:0.941},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0},0).wait(8));

	// Layer 1
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(489.1,367.1,1,1,0,0,0,493.9,367.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:488,regY:257.5,x:483.2,y:253.2},0).wait(1).to({y:249.3},0).wait(1).to({y:245.4},0).wait(1).to({x:483.3,y:241.4},0).wait(1).to({y:237.4},0).wait(1).to({y:233.5},0).wait(1).to({y:229.6},0).wait(1).to({y:225.6},0).wait(1).to({y:221.6},0).wait(1).to({x:483.4,y:217.7},0).wait(1).to({y:213.7},0).wait(1).to({y:209.8},0).wait(1).to({y:205.8},0).wait(1).to({y:201.9},0).wait(1).to({y:197.9},0).wait(1).to({x:483.5,y:194},0).wait(1).to({y:190},0).wait(1).to({y:186.1},0).wait(1).to({y:182.1},0).wait(1).to({y:178.2},0).wait(1).to({y:174.2},0).wait(1).to({y:170.3},0).wait(1).to({x:483.6,y:166.3},0).wait(1).to({y:162.4},0).wait(1).to({y:158.4},0).wait(1).to({y:154.5},0).wait(1).to({y:150.5},0).wait(1).to({y:146.6},0).wait(1).to({x:483.7,y:142.6},0).wait(1).to({y:138.7},0).wait(1).to({y:134.8},0).wait(1).to({y:130.8},0).wait(1).to({y:126.9},0).wait(1).to({y:122.9},0).wait(1).to({x:483.8,y:119},0).wait(1).to({y:115},0).wait(1).to({y:111},0).wait(1).to({y:107.1},0).wait(1).to({y:103.1},0).wait(1).to({y:99.2},0).wait(1).to({y:95.2},0).wait(1).to({x:483.9,y:91.3},0).wait(1).to({y:87.3},0).wait(1).to({y:83.4},0).wait(1).to({y:79.4},0).wait(1).to({y:75.5},0).wait(1).to({y:71.5},0).wait(1).to({x:484,y:67.6},0).wait(1).to({y:63.6},0).wait(1).to({y:59.7},0).wait(1).to({y:55.7},0).wait(1).to({y:51.8},0).wait(1).to({y:47.9},0).wait(1).to({x:484.1,y:43.9},0).wait(1).to({y:39.9},0).wait(1).to({y:36,alpha:0.917},0).wait(1).to({y:32,alpha:0.833},0).wait(1).to({y:28.1,alpha:0.75},0).wait(1).to({y:24.2,alpha:0.667},0).wait(1).to({y:20.2,alpha:0.583},0).wait(1).to({x:484.2,y:16.2,alpha:0.5},0).wait(1).to({y:12.3,alpha:0.417},0).wait(1).to({y:8.3,alpha:0.333},0).wait(1).to({y:4.4,alpha:0.25},0).wait(1).to({y:0.5,alpha:0.167},0).wait(1).to({y:-3.5,alpha:0.083},0).wait(1).to({x:484.3,y:-7.5,alpha:0},0).wait(70));

	// Layer 3
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(220,286.5,1,1,0,0,0,750,562.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).wait(1).to({regY:399,x:226.6,y:123},0).wait(1).to({x:233.1},0).wait(1).to({x:239.7},0).wait(1).to({x:246.2},0).wait(1).to({x:252.8},0).wait(1).to({x:259.3},0).wait(1).to({x:265.8},0).wait(1).to({x:272.4},0).wait(1).to({x:278.9},0).wait(1).to({x:285.5},0).wait(1).to({x:292},0).wait(1).to({x:298.6},0).wait(1).to({x:305.1},0).wait(1).to({x:311.6},0).wait(1).to({x:318.2},0).wait(1).to({x:324.7},0).wait(1).to({x:331.3},0).wait(1).to({x:337.8},0).wait(1).to({x:344.4},0).wait(1).to({x:350.9},0).wait(1).to({x:357.5},0).wait(1).to({x:364},0).wait(1).to({x:370.5},0).wait(1).to({x:377.1},0).wait(1).to({x:383.6},0).wait(1).to({x:390.2},0).wait(1).to({x:396.7},0).wait(1).to({x:403.3},0).wait(1).to({x:409.8},0).wait(1).to({x:416.3},0).wait(1).to({x:422.9},0).wait(1).to({x:429.4},0).wait(1).to({x:436},0).wait(1).to({x:442.5},0).wait(1).to({x:449.1},0).wait(1).to({x:455.6},0).wait(1).to({x:462.1},0).wait(1).to({x:468.7},0).wait(1).to({x:475.2},0).wait(1).to({x:481.8},0).wait(1).to({x:488.3},0).wait(1).to({x:494.9},0).wait(1).to({x:501.4},0).wait(1).to({x:508},0).wait(1).to({x:514.5},0).wait(1).to({x:521},0).wait(1).to({x:527.6},0).wait(1).to({x:534.1},0).wait(1).to({x:540.7},0).wait(1).to({x:547.2},0).wait(1).to({x:553.8},0).wait(1).to({x:560.3},0).wait(1).to({x:566.8},0).wait(1).to({x:573.4},0).wait(1).to({x:579.9},0).wait(1).to({x:586.5},0).wait(1).to({x:593},0).wait(1).to({x:599.6},0).wait(1).to({x:606.1},0).wait(1).to({x:612.6},0).wait(1).to({x:619.2},0).wait(1).to({x:625.7},0).wait(1).to({x:632.3},0).wait(1).to({x:638.8},0).wait(1).to({x:645.4},0).wait(1).to({x:651.9},0).wait(1).to({x:658.4},0).wait(1).to({x:665},0).wait(1).to({x:671.5},0).wait(1).to({x:678.1},0).wait(1).to({x:684.6},0).wait(1).to({x:691.2},0).wait(1).to({x:697.7},0).wait(1).to({x:704.2},0).wait(1).to({x:710.8},0).wait(1).to({x:717.3},0).wait(1).to({x:723.9},0).wait(1).to({x:730.4},0).wait(1).to({x:737},0).wait(1).to({x:743.5},0).wait(1).to({x:750},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(483.2,124.7,971.9,515);
// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_6019899_R_Z007A.jpg", id:"_6019899_R_Z007A"},
		{src:"images/_6019899_R_Z010A.jpg", id:"_6019899_R_Z010A"},
		{src:"images/CTA.png", id:"CTA"},
		{src:"images/GreyBorder.png", id:"GreyBorder"},
		{src:"images/LOGO.png", id:"LOGO"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;