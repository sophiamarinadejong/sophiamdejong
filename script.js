$(document).ready(function(){
	
	
		$('.crop-img').on({
		click: function(){
			var filename = $(this).attr('src');

			var number = filename.match(/\d+/)[0];
			var caption = captions[number];
			console.log(caption);
			$('#slideshow .caption').empty().text(caption);


			$('#slideshow').css({
				'background-image': 'url(big-images/'+number+'.jpg)'
			}).show();

		}
	});


	$('#slideshow').on({
		click: function(){
			$(this).hide();

		}
	});

	$('a.video-link').on({
		click: function(e){
			e.preventDefault();
			var id = $(this).attr('data-id');
			var top = $(this).position().top;
			var left = $(this).position().left;
			console.log(top, left);
			$('.container').append(
				$('<div>').addClass('video').css({
					top: top,
					left: left
				}).append(	$('<div>').addClass('close') ).on({
					click: function(){
						
						$(this).remove();
					}
				})
				.append(
					$('<iframe>').attr({
						frameborder: 1,
						allowfullscreen: true,
						src: 'https://www.youtube.com/embed/'+id+'?autoplay=1',
						width: 720,
						height: 410, // * 0.6
					})
				)
			);

		}
	});	
});



var captions = {
	'1': '"Flora&Corpo" poster design',
	'2': '"El cielo" poster design ',
	'3': '"My baby is an idiot poster design"',
	'4': '"Lost" poster design',
	'5': '"Tri parti" poster design',
	'6': '"Double Exposure" poster design',
	'7': 'Poster design for a secret location techno and experimental music party and in Moscow, Russia',
	'8': 'Poster design for a secret location techno and experimental music party and in Moscow, Russia',
	'9': 'Poster design for a secret location techno and experimental music party and in Moscow, Russia',
	'10': 'Newspaper design based on  the japanese view of the Cherry Blossoms flowers in the WWII',
	'101': 'Newspaper design based on  the japanese view of the Cherry Blossoms flowers in the WWII',
	'102': 'Newspaper design based on  the japanese view of the Cherry Blossoms flowers in the WWII',
	'103': 'Newspaper design based on  the japanese view of the Cherry Blossoms flowers in the WWII',
	'11': 'Poster design for Isotoop January edition with Rrose, Lucy, Fjäder and Van Anh. Isotoop is a Rottterdam based techno events cicle bringing music and art exhibitions together. http://www.isotoop.nl/',
	'14': 'Analogue technique with plaster bands to have the shape of the torso, technique with alginate powder and plaster to have the shape of the left hand, technique with liquid latex and plaster to have the shape of the right hand and the forearm, technique with modelling clay to have the shape of part of the waist and part of the upper back, technique with air drying clay to have the shape of backside and pelvis, technique with air cotton textile and textile dryer to have the shape of the upper leg',
	'15': ' ',
	'16': '"The Twilight" Tarot card re-design',
	'17': '"Ouroboros"',
	'18': '"Fuego en mi origen" poster design',
	'19': 'Founded in 2015 by avid and visionary minds, London based techno organisation: Unmasked, is born. Bringing together and uniting as one the people with the music. A journey into a nocturnal space, which glides through the confines between electronic, industrial techno music. Showcased through the transcendent sound system of Funktion One and a live visual sense, each without compromise. Proposing rising artists, selected for their quality of sound and performance. Delivering DJ sets synergising cdj with vinyl, live hybrid performances and authenticity behind the console.',
	'20': 'Founded in 2015 by avid and visionary minds, London based techno organisation: Unmasked, is born. Bringing together and uniting as one the people with the music. A journey into a nocturnal space, which glides through the confines between electronic, industrial techno music. Showcased through the transcendent sound system of Funktion One and a live visual sense, each without compromise. Proposing rising artists, selected for their quality of sound and performance. Delivering DJ sets synergising cdj with vinyl, live hybrid performances and authenticity behind the console.',
	'21': '"Aries" poster design',
	'22': '"Libra" poster design',
	'25': '"After silence that nearest which comes to expressing the inexpressible" poster design',
	'26': '"Consumed-Self" Plaster, oil, acrylic, cigarettes sculpture.',
	'27': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music. http://www.metamorph.nyc',
	'28': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music. http://www.metamorph.nyc',
	'29': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music. http://www.metamorph.nyc',
	'30': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music. http://www.metamorph.nyc',
	'31': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music. http://www.metamorph.nyc',
	'32': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music. http://www.metamorph.nyc',
	'33': 'Metamorph is a New York based immersive experience that utilizes music and live visuals to incubate a shift in perception in the field of experimental music. http://www.metamorph.nyc',
	'34': '"Tango" poster design',
	'35':'Monument 91: +plattform. Podcast series https://soundcloud.com/monument-podcast/monument-91-plattform',
	'36':'Monument 87: I/Y. Podcast series https://soundcloud.com/monument-podcast/monument-87-iy ',
	'37': 'Urban Sound/Landscape project based on the experience of sound and its architecture made by a translation of a sound recording of Den Haag Central Station in a rush hour, converted to a spectrogram with relief and the sound is the interpretation of the spectrogram.',
	'38': 'Silkscreened poster inspired by the manifest Electro Library written by El Lissitzky. The process is from a 3D typographical maquette to a 2D poster.',
	'39': '"Anti-Art" is a fanzine based on six degrees of inpiration: ballet, constructivism, punk music, dark art, Gabriel Grün, and Les Incoherents art movement',
	'41': '"Anti-Art" is a fanzine based on six degrees of inpiration: ballet, constructivism, punk music, dark art, Gabriel Grün, and Les Incoherents art movement',
	'43': '"Anti-Art" is a fanzine based on six degrees of inpiration: ballet, constructivism, punk music, dark art, Gabriel Grün, and Les Incoherents art movement',
	'44': '"Anti-Art" is a fanzine based on six degrees of inpiration: ballet, constructivism, punk music, dark art, Gabriel Grün, and Les Incoherents art movement',
	'46': '"Untitled" poster design',
	'222': '',
	'223': '(+31) 06 14 90 65 68 sophiamarinadejongy@gmail.com https://www.facebook.com/RBDS100/ https://www.instagram.com/sophia.de.jong/ https://soundcloud.com/neithme/ ',
	'224': 'Born and raised in Buenos Aires, Argentina, The Hague based graphic designer, visual artist and ballet dancer immersed in emotional and conceptual art, focused in the field of body movement and it’s language and the combination with experiemental sound and different media platforms.',
	}

