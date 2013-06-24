function MainWindow() {

	var _this = this;
	
	/*
	 * Please have a look at the Wikitude website for licensing questions.
	 * You need a valid license key to get rid of Watermarking and intro-animation
	 * 
	 * The license key used in this project is ONLY valid for this project and must not
	 * be used for your project.
	 * 
	 * http://www.wikitude.com/products/wikitude-sdk/pricing/
	 */ 
	var WikitudeLicenseKey = "kDc867UKvVb4YuftUQio+qnZAWWyXBy6sYPisyGa7zWb6Tn3Ot3MpH6k8JXfGArpibd/dTLVpIchtwpXLSrE2tXgqH7dWnnUMryhUXzejWY0Nr3E0p3wq/4BGeOvkP3vEp9o8OQx3uwy8rSeqLbU7s7c0yXYOQXR3ghyLt6yQR1TYWx0ZWRfX2eVB3YBo0fXnhFQ53ghQoYtMhjgz2Cdt6dR2OvjpY/PQU7oNVYZH6RYl6KydgIR5hNzMDsh5k8QixEMi/zJzXtvY5WLnCS97s8zH+BqtD2iRJRk/pbHyHFz7mDKWUgOJeAoYky69lwSqfMMyFdwFKc455OCguJmrAOMk5FO+M6eg3xwEJtcYtp+3qq9nv405y6wroo64aG/wiDXLTBct+bQc3zeFs8hvMbFteHkJ+ubhV7N+i4NrnOAx+Cc4oDxyjdicyVWmxIDfYUDq4KFA/kEa4vhC8dS9iqeEvWh5eHV9kHwsVRfwnG17mmPnQifgxbhK+cQ2Rqpp1mADcaeetKdHJYLXl7mnJHaGsFuEDQpJYlXEzmGtNmM4wtCh8mcl8lLcfnxKgx/OfbzbV8bP74EFcgtTGM7H31Hb83GOryeQnngoqXl/3vAjklErQNWHE+eBJfYf9UCu60LXTrHDBwvGIO/kr3wliwgu4DAgo7I72gTtb8iVX6m8XBReyCYNCtADWGTmrknSGaNDGTbZzp0ZwEKLwnVG0s8g45aCpUYjerBsHe1XjQ=";
	
	var windowTitle = 'Wikitude Module Samples';

	var self = Ti.UI.createWindow({
		backgroundColor : 'transparent',
		navBarHidden : false,
		title : windowTitle,
		exitOnClose : true
	});
	
	// sample meta-information
	this.samples = [
					// Image Recognition
					{
						windowTitle : 'Image Recognition',
						samples: [ 
							{ title: '1. Image on Target', 		file: '1_ImageRecognition_1_ImageOnTarget/index.html' },
							{ title: '2. Multiple Targets', 	file: '1_ImageRecognition_2_MultipleTargets/index.html' },
							{ title: '3. Interactivity', 		file: '1_ImageRecognition_3_Interactivity/index.html'},
							{ title: '4. Bonus-Sparkles', 		file: '1_ImageRecognition_4_Bonus-Sparkles/index.html'}
						 ]
					},
					
					// 3D and Image Recognition
					{
						windowTitle : '3D and Image Recognition',
						samples: [ 
							{ title: '1. 3D Model on Target', 		file: '2_3dAndImageRecognition_1_3dModelOnTarget/index.html' },
							{ title: '2. Appearing Animation', 	file: '2_3dAndImageRecognition_2_AppearingAnimation/index.html' },
							{ title: '3. Interactivity', 		file: '2_3dAndImageRecognition_3_Interactivity/index.html'}
						]
					},
					
					// Point Of Interest
					{
						windowTitle : 'Point Of Interest',
						samples: [ 
							{ title: '1. POI at lcoation', 		file: '3_PointOfInterest_1_PoiAtLocation/index.html' },
							{ title: '2. POI with Label', 		file: '3_PointOfInterest_2_PoiWithLabel/index.html' },
							{ title: '3. Multiple POIs', 		file: '3_PointOfInterest_3_MultiplePois/index.html'},
							{ title: '4. Selecting POIs', 		file: '3_PointOfInterest_4_SelectingPois/index.html'}
							
						]
					},
					
					// Obtain POI data
					{
						windowTitle : 'Obtain POI data',
						samples: [ 
							{ title: '1. Load from webservice', 		file: '4_ObtainPoiData_1_FromWebservice/index.html' },
							{ title: '2. Load from local resource', 	file: '4_ObtainPoiData_2_FromLocalResource/index.html' }
						]
					},

					// Demos
					{
						windowTitle : 'Demos',
						samples: [ 
							{ title: '1. Image Recognition and Geo', 		file: '6_Demo_1_ImageRecognitionAndGeo/index.html' },
							{ title: '2. Solar System (Geo)', 				file: '6_Demo_2_SolarSystem(Geo)/index.html' },
							{ title: '3. Solar System (Image Recognition)', file: '6_Demo_3_SolarSystem(ImageRecognition)/index.html'}
						]
					}
				]
				;
					
	
	var list = [];
	
	// add samples to list
	for (var i=0; i<this.samples.length; i++) {
		list.push( 
			{ 	title: _this.samples[i].windowTitle, 
				callback : function(index) {
					var SamplesListWindow = require('/ui/windows/SamplesListWindow');
					new SamplesListWindow( WikitudeLicenseKey, _this.samples[index].windowTitle, _this.samples[index].samples ).open();
				} 
			});
	}
	
	// add 'Launch World via URL' to list
	list.push(
		{ 	title: "Launch World via Url", 
			callback : function(index) {
				var LaunchViaUrlWindow = require('/ui/windows/LaunchViaUrlWindow');
				new LaunchViaUrlWindow( WikitudeLicenseKey, 'Launch World via Url' ).open();
			} 
		}
	);

	// create listview
	var listView = Ti.UI.createTableView({
		data : list
	});

	// add click-listener
	listView.addEventListener('click', function(e) {
		list[e.index].callback(e.index);
	});

	var view = Ti.UI.createView({
    	height: '100%',
    	layout: 'vertical'
	});
	
	view.add(listView);
	self.add(view);

	return self;
}

module.exports = MainWindow;
