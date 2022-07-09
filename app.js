mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWVsbGVjcjk5IiwiYSI6ImNrem9xdWk0dTYyMWcydnBoZmc3b2pndXAifQ.bi0HBJXaB-UoPX-kPoo5Dg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.5795, 39.828175],
    // Longitude 1st, Latitude 2nd
    zoom: 4,
    minZoom: 4
});

map.on('load', () => {
    // Add a source for the state polygons.
    map.addSource('states', {
    'type': 'geojson',
    'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/ne_110m_admin_1_states_provinces_shp.geojson'
    });
     
    // Add a layer showing the state polygons.
    map.addLayer({
    'id': 'states-layer',
    'type': 'line',
    'source': 'states',
    'paint': {
        'line-color': '#000',
        'line-width': 2
    }
    });

map.on('load', 'states-layer', (e) => {
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(e.features[0].properties.name)
    .addTo(map);
    });
    });

    const alabama = document.createElement('div');
    alabama.className = 'marker';
    alabama.id = 'AL-marker';
   new mapboxgl.Marker(alabama)
    .setLngLat([-86.902298, 32.318230])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Sturgeon Fish</h3> <p> The Alambama sturgeon is a large bottom-feeding fish notable for the bony plates on its back and sides. It is one of the rarest and most endangered fish in the nation and may be close to extinction. </p>')) 
    .addTo(map);

    const arizona = document.createElement('div');
    arizona.className = 'marker';
    arizona.id = 'AZ-marker';
   new mapboxgl.Marker(arizona)
    .setLngLat([-111.093735, 34.048927])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Yaqui Chub</h3> <p>A small fresh-water fish that lives in the quiet waters of streams and has adapted well to living in ponds on the Refuge. </p>')) 
    .addTo(map);

    const arkansas = document.createElement('div');
    arkansas.className = 'marker';
    arkansas.id = 'AR-marker';
   new mapboxgl.Marker(arkansas)
    .setLngLat([-92.199997, 34.799999])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Ivory-Billed Woodpecker</h3> <p> Known to be the third largest woodpecker in the world and thought to have gone extinct in the mid twentieth century. It was rediscovered in Arkansas in 2004, but has not been relocated since.</p>')) 
    .addTo(map);

    const california = document.createElement('div');
    california.className = 'marker';
    california.id = 'CA-marker';
   new mapboxgl.Marker(california)
    .setLngLat([-119.417931, 36.778259])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Riparian Brush Rabbit</h3> <p>The riparian brush rabbit is a medium to small cottontail in the Leporidae family. Its colors vary from dark brown to gray above to white underneath.</p>')) 
    .addTo(map);

    const colorado = document.createElement('div');
    colorado.className = 'marker';
    colorado.id = 'CO-marker';
   new mapboxgl.Marker(colorado)
    .setLngLat([-105.358887, 39.113014])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Uncompahgre Fritillary Butterfly</h3> <p>The Uncompahgre fritillary is a small butterfly with a 2-3 cm wingspan. It was discovered in Colorado in 1978 and subsequently described as a new species.</p>')) 
    .addTo(map);

    const connecticut = document.createElement('div');
    connecticut.className = 'marker';
    connecticut.id = 'CT-marker';
   new mapboxgl.Marker(connecticut)
    .setLngLat([-72.699997, 41.599998])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Roseate tern</h3> <p>The roseate tern is about 40 centimeters in length, with light-gray wings and back. The roseate tern population is estimated to have fallen by 75% since the 1930s.</p>')) 
    .addTo(map);

    const delaware = document.createElement('div');
    delaware.className = 'marker';
    delaware.id = 'DE-marker';
   new mapboxgl.Marker(delaware)
    .setLngLat([-75.500000, 39.000000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Leatherback Sea Turtle</h3> <p>The leatherback sea turtle is the largest turtle in the world. They are the only species of sea turtle that lack scales and a hard shell. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world.</p>')) 
    .addTo(map);

    const florida = document.createElement('div');
    florida.className = 'marker';
    florida.id = 'FL-marker';
   new mapboxgl.Marker(florida)
    .setLngLat([-81.760254, 27.994402])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Florida Panther</h3> <p>Once common throughout the southeastern United States, fewer than 100 Florida panthers (Puma concolor coryi) are estimated to live in the wilds of south Florida today.</p>')) 
    .addTo(map);

    const georgia = document.createElement('div');
    georgia.className = 'marker';
    georgia.id = 'GA-marker';
   new mapboxgl.Marker(georgia)
    .setLngLat([-83.441162, 33.247875])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Reticulated flatwoods salamander</h3> <p>The reticulated flatwoods salamander is a long and slender salamander that can reach a body length of 5.2 inches. The main threat to the reticulated flatwoods salamander is loss of habitat due to agriculture and silviculture. </p>')) 
    .addTo(map);

    const idaho= document.createElement('div');
    idaho.className = 'marker';
    idaho.id = 'ID-marker';
   new mapboxgl.Marker(idaho)
    .setLngLat([-114.742043, 44.068203])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>S. Selkirk Mountain Caribou</h3> <p>The southern Selkirk subpopulation of woodland caribou were first listed as endangered in 1984. They are unique in that they occupy high elevation, forested areas with deep snowfall along the inland temperate rainforest. </p>')) 
    .addTo(map);

    const illinois= document.createElement('div');
    illinois.className = 'marker';
    illinois.id = 'IL-marker';
   new mapboxgl.Marker(illinois)
    .setLngLat([-89.000000, 40.000000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3> </h3> <p>Animal description</p>')) 
    .addTo(map);

    const indiana= document.createElement('div');
    indiana.className = 'marker';
    indiana.id = 'IN-marker';
   new mapboxgl.Marker(indiana)
    .setLngLat([-86.126976, 40.273502])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3> </h3> <p>Animal description</p>')) 
    .addTo(map);

    const iowa= document.createElement('div');
    iowa.className = 'marker';
    iowa.id = 'IA-marker';
   new mapboxgl.Marker(iowa)
    .setLngLat([-93.581543, 42.032974])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Crawfish Frog</h3> <p>The crawfish frog is a medium-sized, robust frog. The IUCN Red List states that crawfish frogs are probably in significant decline because of widespread habitat loss, mostly from the drainage of breeding ponds.</p>')) 
    .addTo(map);

    const kansas= document.createElement('div');
    kansas.className = 'marker';
    kansas.id = 'KS-marker';
   new mapboxgl.Marker(kansas)
    .setLngLat([-98.000000, 38.500000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3> </h3> <p>Animal description</p>')) 
    .addTo(map);

    const kentucky= document.createElement('div');
    kentucky.className = 'marker';
    kentucky.id = 'KY-marker';
   new mapboxgl.Marker(kentucky)
    .setLngLat([-84.270020, 37.839333])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Crawfish Frog</h3> <p>The crawfish frog is a medium-sized, robust frog. The IUCN Red List states that crawfish frogs are probably in significant decline because of widespread habitat loss, mostly from the drainage of breeding ponds.</p>')) 
    .addTo(map);

    const louisiana= document.createElement('div');
    louisiana.className = 'marker';
    louisiana.id = 'LA-marker';
   new mapboxgl.Marker(louisiana)
    .setLngLat([-92.329102, 30.391830])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Kemp’s Ridley Sea Turtle</h3> <p>Kemp’s ridleys are the smallest and most critically endangered sea turtle species in the world. Bycatch in commercial and recreational fishing gear is the biggest threat facing the turtles.</p>')) 
    .addTo(map);

    const maine= document.createElement('div');
    maine.className = 'marker';
    maine.id = 'ME-marker';
   new mapboxgl.Marker(maine)
    .setLngLat([-68.972168, 45.367584])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Roseate tern</h3> <p>The roseate tern is about 40 centimeters in length, with light-gray wings and back. The roseate tern population is estimated to have fallen by 75% since the 1930s.</p>')) 
    .addTo(map);

    const maryland= document.createElement('div');
    maryland.className = 'marker';
    maryland.id = 'MD-marker';
   new mapboxgl.Marker(maryland)
    .setLngLat([-76.641273, 39.045753])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3> </h3> <p>Animal description</p>')) 
    .addTo(map);
    
    const massachusetts= document.createElement('div');
    massachusetts.className = 'marker';
    massachusetts.id = 'MA-marker';
   new mapboxgl.Marker(massachusetts)
    .setLngLat([-71.382439, 42.407211])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Plymouth Redbelly Turtle</h3> <p>Redbelly turtles in Massachusetts are only known from ponds within Plymouth County. There are approximately 300 breeding age individuals known to exist in this population. </p>')) 
    .addTo(map);

    const michigan= document.createElement('div');
    michigan.className = 'marker';
    michigan.id = 'MI-marker';
   new mapboxgl.Marker(michigan)
    .setLngLat([-84.506836, 44.182205])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Hine’s Emerald Dragonfly</h3> <p>The Hines preferred habitat is groundwater-fed wetlands over dolomite or limestone bedrock, creating slightly alkaline water. With wetlands disappearing at a high rate, preserving its habitat has not been easy.</p>')) 
    .addTo(map);

    const minnesota= document.createElement('div');
    minnesota.className = 'marker';
    minnesota.id = 'MN-marker';
   new mapboxgl.Marker(minnesota)
    .setLngLat([-94.636230, 46.392410])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Karner Blue Butterfly</h3> <p>Karner blue butterflies were federally listed as endangered in 1992, because of dramatic declines in populations due to habitat loss and modifications, such as fire suppression.</p>')) 
    .addTo(map);

    const mississippi= document.createElement('div');
    mississippi.className = 'marker';
    mississippi.id = 'MS-marker';
   new mapboxgl.Marker(mississippi)
    .setLngLat([-90.000000, 33.000000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Mississippi Sandhill Crane</h3> <p>The endangered Mississippi sandhill crane is found only in a small non-migratory population in Mississippi. The population started decreasing as cities grew and took over their natural habitat, and natural predators moved closer to their nesting locations.</p>')) 
    .addTo(map);
    
    const missouri= document.createElement('div');
    missouri.className = 'marker';
    missouri.id = 'MO-marker';
   new mapboxgl.Marker(missouri)
    .setLngLat([-92.603760, 38.573936])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3> </h3> <p>Animal description</p>')) 
    .addTo(map);

    const montana= document.createElement('div');
    montana.className = 'marker';
    montana.id = 'MT-marker';
   new mapboxgl.Marker(montana)
    .setLngLat([-109.533691, 46.965260])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Black-Footed Ferret</h3> <p>Black-footed ferrets are North America’s only native ferret species and one of most endangered mammals of the continent. Currently there are 340 black-footed ferrets in the wild and 301 in captivity.</p>')) 
    .addTo(map);

    const nebraska= document.createElement('div');
    nebraska.className = 'marker';
    nebraska.id = 'NE-marker';
   new mapboxgl.Marker(nebraska)
    .setLngLat([-100.000000, 41.500000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Whooping Crane</h3> <p>Named for its whooping sound, the whooping crane is the tallest North American bird. It is estimated that there are only around 300 Whooping Cranes left in the wild due to hunting and habitat loss.</p>')) 
    .addTo(map);

    const nevada= document.createElement('div');
    nevada.className = 'marker';
    nevada.id = 'NV-marker';
   new mapboxgl.Marker(nevada)
    .setLngLat([-117.224121, 39.876019])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Pahrump Poolfish</h3> <p>Originally, the Pahrump Poolfish was known only from Manse Spring on the Manse Ranch in Nye County. It was eliminated from this spring in 1975 when the water dried up due to excessive groundwater pumping for irrigation.</p>')) 
    .addTo(map);

    const newHampshire= document.createElement('div');
    newHampshire.className = 'marker';
    newHampshire.id = 'NH-marker';
   new mapboxgl.Marker(newHampshire)
    .setLngLat([-71.500000, 44.000000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Karner Blue Butterfly</h3> <p>Karner blue butterflies were federally listed as endangered in 1992, because of dramatic declines in populations due to habitat loss and modifications, such as fire suppression.</p>')) 
    .addTo(map);

    const newJersey= document.createElement('div');
    newJersey.className = 'marker';
    newJersey.id = 'NJ-marker';
   new mapboxgl.Marker(newJersey)
    .setLngLat([-74.871826, 39.833851])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3> </h3> <p>Animal description</p>')) 
    .addTo(map);

    const newMexico= document.createElement('div');
    newMexico.className = 'marker';
    newMexico.id = 'NM-marker';
   new mapboxgl.Marker(newMexico)
    .setLngLat([-106.018066, 34.307144])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Jemez Mountains Salamander</h3> <p>The small and secretive Jemez Mountains salamander lives in the Valles Caldera of New Mexico’s Jemez Mountains. It is now found in only 38 percent of the sites it historically occupied due to habitat loss.</p>')) 
    .addTo(map);

    const newYork= document.createElement('div');
    newYork.className = 'marker';
    newYork.id = 'NY-marker';
   new mapboxgl.Marker(newYork)
    .setLngLat([-75.000000, 43.000000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3> </h3> <p>Animal description</p>')) 
    .addTo(map);

    const newCarolina= document.createElement('div');
    newCarolina.className = 'marker';
    newCarolina.id = 'NC-marker';
   new mapboxgl.Marker(newCarolina)
    .setLngLat([-80.793457, 35.782169])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Saint Francis’ Satyr Butterfly</h3> <p>The Saint Francis’ satyr is an endangered butterfly subspecies found only in North Carolina. Its populations have been reduced by habitat loss, particularly by loss of wetland openings along streams.</p>')) 
    .addTo(map);

    const newDakota= document.createElement('div');
    newDakota.className = 'marker';
    newDakota.id = 'ND-marker';
   new mapboxgl.Marker(newDakota)
    .setLngLat([-100.437012, 47.650589])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Whooping Crane</h3> <p>Named for its whooping sound, the whooping crane is the tallest North American bird. It is estimated that there are only around 300 Whooping Cranes left in the wild due to hunting and habitat loss.</p>')) 
    .addTo(map);

    const ohio= document.createElement('div');
    ohio.className = 'marker';
    ohio.id = 'OH-marker';
   new mapboxgl.Marker(ohio)
    .setLngLat([-82.996216, 40.367474])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3> </h3> <p>Animal description</p>')) 
    .addTo(map);

    const oklahoma= document.createElement('div');
    oklahoma.className = 'marker';
    oklahoma.id = 'OK-marker';
   new mapboxgl.Marker(oklahoma)
    .setLngLat([-96.921387, 36.084621])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Ozark Big-Eared Bat</h3> <p>The Ozark big-eared bat is an endangered species found only in a small number of caves in the southern central United States. The total population of Ozark big-eared bats is estimated to be less than 2,000 individuals.</p>')) 
    .addTo(map);

    const oregon= document.createElement('div');
    oregon.className = 'marker';
    oregon.id = 'OR-marker';
   new mapboxgl.Marker(oregon)
    .setLngLat([-120.500000, 44.000000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Loggerhead Sea Turtle</h3> <p>Loggerhead turtles are named for their large heads that support powerful jaw muscles. Increasing pollution of nearshore and offshore marine habitats threaten Loggerhead turtles.</p>')) 
    .addTo(map);

    const pennsylvania= document.createElement('div');
    pennsylvania.className = 'marker';
    pennsylvania.id = 'PA-marker';
   new mapboxgl.Marker(pennsylvania)
    .setLngLat([-77.194527, 41.203323])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Indiana Bat</h3> <p>The Indiana bat is a small,  migratory bat that hibernates colonially in caves and mines in the winter. The species was listed as endangered in the 1960s due to human disturbance of caves that bats use for winter hibernating.</p>')) 
    .addTo(map);

    const rhodeIsland= document.createElement('div');
    rhodeIsland.className = 'marker';
    rhodeIsland.id = 'RI-marker';
   new mapboxgl.Marker(rhodeIsland)
    .setLngLat([-71.742332, 41.742325])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Hawksbill Sea Turtle</h3> <p>Hawksbills are named for their pointed beak, play a key role in the function of marine ecosystems. They are most threatened by wildlife trade and face the unique threat of being hunted for their beautiful shell.</p>')) 
    .addTo(map);

    const southCarolina= document.createElement('div');
    southCarolina.className = 'marker';
    southCarolina.id = 'SC-marker';
   new mapboxgl.Marker(southCarolina)
    .setLngLat([-81.163727, 33.836082])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Kemp’s Ridley Sea Turtle</h3> <p>Kemp’s ridleys are the smallest and most critically endangered sea turtle species in the world. Bycatch in commercial and recreational fishing gear is the biggest threat facing the turtles.</p>')) 
    .addTo(map);

    const southDakota= document.createElement('div');
    southDakota.className = 'marker';
    southDakota.id = 'SD-marker';
   new mapboxgl.Marker(southDakota)
    .setLngLat([-100.000000, 44.500000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Black-Footed Ferret</h3> <p>Black-footed ferrets are North America’s only native ferret species and one of most endangered mammals of the continent. Currently there are 340 black-footed ferrets in the wild and 301 in captivity.</p>')) 
    .addTo(map);

    const tennessee= document.createElement('div');
    tennessee.className = 'marker';
    tennessee.id = 'TN-marker';
   new mapboxgl.Marker(tennessee)
    .setLngLat([-86.660156, 35.860119])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Nashville Crayfish</h3> <p>Crayfish play a valuable role in their ecosystem, as they are an important source of food for over 240 other species. With continuous growth of Nashville’s metropolitan areas comes damage and pollution to waterways that major threat to native species.</p>')) 
    .addTo(map);

    const texas= document.createElement('div');
    texas.className = 'marker';
    texas.id = 'TX-marker';
   new mapboxgl.Marker(texas)
    .setLngLat([-100.000000, 31.000000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Attwater’s Prairie-Chicken</h3> <p> The Attwater’s Prairie-Chicken is a ground-dwelling grouse of the coastal prairie ecosystem. It’s habitat once spanned over 6 million acres but now less than 1% of this fragmented coastal prairie remains.</p>')) 
    .addTo(map);

    const utah= document.createElement('div');
    utah.className = 'marker';
    utah.id = 'UT-marker';
   new mapboxgl.Marker(utah)
    .setLngLat([-111.950684, 39.419220])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Southwestern Willow Flycatcher</h3> <p>The small passerine, or perching bird, is less than 15 cm long from the tip of its bill to the tip of its tail. They are still common in most parts of their range though their populations declined by approximately 25% from 1966 to 2019.</p>')) 
    .addTo(map);

    const vermont= document.createElement('div');
    vermont.className = 'marker';
    vermont.id = 'VT-marker';
   new mapboxgl.Marker(vermont)
    .setLngLat([-72.699997, 44.000000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Indiana Bat</h3> <p>The Indiana bat is a small,  migratory bat that hibernates colonially in caves and mines in the winter. The species was listed as endangered in the 1960s due to human disturbance of caves that bats use for winter hibernating.</p>')) 
    .addTo(map);

    const virginia= document.createElement('div');
    virginia.className = 'marker';
    virginia.id = 'VA-marker';
   new mapboxgl.Marker(virginia)
    .setLngLat([-78.024902, 37.926868])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Hawksbill Sea Turtle</h3> <p>Hawksbills are named for their pointed beak, play a key role in the function of marine ecosystems. They are most threatened by wildlife trade and face the unique threat of being hunted for their beautiful shell.</p>')) 
    .addTo(map);

    const washington= document.createElement('div');
    washington.className = 'marker';
    washington.id = 'WA-marker';
   new mapboxgl.Marker(washington)
    .setLngLat([-120.740135, 47.751076])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Columbia Basin Pygmy Rabbit</h3> <p>The pygmy rabbit is the smallest rabbit species in North America, weighing up to a single pound. Conservation threats include loss and degradation of shrubsteppe due to conversion of the habitat to cropland and development.</p>')) 
    .addTo(map);

    const westVirginia= document.createElement('div');
    westVirginia.className = 'marker';
    westVirginia.id = 'WV-marker';
   new mapboxgl.Marker(westVirginia)
    .setLngLat([-80.500000, 39.000000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Diamond Darter</h3> <p>The diamond darter is a small fish that is so rare it was thought to be extinct until it was rediscovered in the Elk River in West Virginia in 1980. Fewer than 125 of the fish have been seen over the past 30 years.</p>')) 
    .addTo(map);

    const wisconsin= document.createElement('div');
    wisconsin.className = 'marker';
    wisconsin.id = 'WI-marker';
   new mapboxgl.Marker(wisconsin)
    .setLngLat([-89.500000, 44.500000])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Rusty Patched Bumble Bee</h3> <p>The rusty patched bumble bee is a species native to eastern North America. This bee’s population has declined from an estimated 87% of its historic range in recent years due to  habitat loss and climate change. </p>')) 
    .addTo(map);

    const wyoming= document.createElement('div');
    wyoming.className = 'marker';
    wyoming.id = 'WY-marker';
   new mapboxgl.Marker(wyoming)
    .setLngLat([-107.290283, 43.075970])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(
        '<h3>Wyoming Toad</h3> <p>One of the most endangered amphibians in the world, the Wyoming toad was once abundant in Wyoming’s wetlands. In 1994, Wyoming toads were extinct in the wild, and only one captive population remained. </p>')) 
    .addTo(map);