        let map;
        let dayMarkers = {};
        let chicagoRiverPolyline;
        let dayRoutes = {};
        let tripData = null;
        let currentDay = 1;

        // Embed the JSON data directly instead of fetching it
        function fetchTripData() {
            // Embedded trip data
            tripData = {
              "tripTitle": "Chicago Trip Itinerary 2025",
              "days": [
                {
                  "id": 1,
                  "title": "Day 1: Downtown Chicago",
                  "color": "#3b82f6",
                  "mapView": {
                    "lat": 41.8825,
                    "lng": -87.6233,
                    "zoom": 13
                  },
                  "activities": [
                    {
                      "id": 1,
                      "time": "9:00 AM - 11:00 AM",
                      "timeStart": 9,
                      "timeEnd": 11,
                      "activity": "Visit",
                      "place": "Millennium Park & The Bean",
                      "address": "201 E Randolph St, Chicago, IL 60602",
                      "note": "Iconic Chicago landmark",
                      "coordinates": [41.8826, -87.6233]
                    },
                    {
                      "id": 2,
                      "time": "11:30 AM - 1:30 PM",
                      "timeStart": 11.5,
                      "timeEnd": 13.5,
                      "activity": "Lunch",
                      "place": "The Purple Pig",
                      "address": "444 N Michigan Ave, Chicago, IL 60611",
                      "note": "Mediterranean cuisine",
                      "coordinates": [41.8909, -87.6246]
                    },
                    {
                      "id": 3,
                      "time": "2:00 PM - 4:00 PM",
                      "timeStart": 14,
                      "timeEnd": 16,
                      "activity": "Tour",
                      "place": "Chicago Architecture River Cruise",
                      "address": "112 E Wacker Dr, Chicago, IL 60601",
                      "note": "Best way to see city architecture",
                      "coordinates": [41.8875, -87.6264],
                      "isRiver": true,
                      "riverCoordinates": [
                        [41.8875, -87.6264],
                        [41.8882, -87.6289],
                        [41.8891, -87.6321],
                        [41.8898, -87.6352],
                        [41.8898, -87.6387],
                        [41.8886, -87.6412]
                      ]
                    },
                    {
                      "id": 4,
                      "time": "5:00 PM - 7:00 PM",
                      "timeStart": 17,
                      "timeEnd": 19,
                      "activity": "Visit",
                      "place": "Chicago Riverwalk",
                      "address": "Chicago Riverwalk, Chicago, IL 60601",
                      "note": "Scenic walk along the river",
                      "coordinates": [41.8869, -87.6244]
                    },
                    {
                      "id": 5,
                      "time": "7:30 PM - 9:30 PM",
                      "timeStart": 19.5,
                      "timeEnd": 21.5,
                      "activity": "Dinner",
                      "place": "The Gage",
                      "address": "24 S Michigan Ave, Chicago, IL 60603",
                      "note": "Upscale gastropub",
                      "coordinates": [41.8816, -87.6243]
                    }
                  ]
                },
                {
                  "id": 2,
                  "title": "Day 2: Museum Campus & South Loop",
                  "color": "#10b981",
                  "mapView": {
                    "lat": 41.8663,
                    "lng": -87.6170,
                    "zoom": 14
                  },
                  "activities": [
                    {
                      "id": 1,
                      "time": "9:00 AM - 11:30 AM",
                      "timeStart": 9,
                      "timeEnd": 11.5,
                      "activity": "Visit",
                      "place": "Field Museum",
                      "address": "1400 S Lake Shore Dr, Chicago, IL 60605",
                      "note": "Natural history museum",
                      "coordinates": [41.8663, -87.6170]
                    },
                    {
                      "id": 2,
                      "time": "12:00 PM - 1:30 PM",
                      "timeStart": 12,
                      "timeEnd": 13.5,
                      "activity": "Lunch",
                      "place": "Kim and Carlo's Hot Dog Stand",
                      "address": "Museum Campus, Chicago, IL 60605",
                      "note": "Popular hot dog stand near museums",
                      "coordinates": [41.8661, -87.6150]
                    },
                    {
                      "id": 3,
                      "time": "2:00 PM - 4:30 PM",
                      "timeStart": 14,
                      "timeEnd": 16.5,
                      "activity": "Visit",
                      "place": "Shedd Aquarium",
                      "address": "1200 S Lake Shore Dr, Chicago, IL 60605",
                      "note": "One of the largest indoor aquariums",
                      "coordinates": [41.8676, -87.6140]
                    },
                    {
                      "id": 4,
                      "time": "5:00 PM - 6:30 PM",
                      "timeStart": 17,
                      "timeEnd": 18.5,
                      "activity": "Visit",
                      "place": "Grant Park",
                      "address": "337 E Randolph St, Chicago, IL 60601",
                      "note": "Urban park with Buckingham Fountain",
                      "coordinates": [41.8762, -87.6188]
                    },
                    {
                      "id": 5,
                      "time": "7:00 PM - 9:00 PM",
                      "timeStart": 19,
                      "timeEnd": 21,
                      "activity": "Dinner",
                      "place": "Lou Malnati's Pizzeria",
                      "address": "805 S State St, Chicago, IL 60605",
                      "note": "Famous Chicago deep dish pizza",
                      "coordinates": [41.8717, -87.6275]
                    }
                  ]
                },
                {
                  "id": 3,
                  "title": "Day 3: North Side & Lake View",
                  "color": "#f59e0b",
                  "mapView": {
                    "lat": 41.9484,
                    "lng": -87.6553,
                    "zoom": 13
                  },
                  "activities": [
                    {
                      "id": 1,
                      "time": "9:30 AM - 11:30 AM",
                      "timeStart": 9.5,
                      "timeEnd": 11.5,
                      "activity": "Visit",
                      "place": "Lincoln Park Zoo",
                      "address": "2001 N Clark St, Chicago, IL 60614",
                      "note": "Free zoo with diverse animal collection",
                      "coordinates": [41.9217, -87.6337]
                    },
                    {
                      "id": 2,
                      "time": "12:00 PM - 1:30 PM",
                      "timeStart": 12,
                      "timeEnd": 13.5,
                      "activity": "Lunch",
                      "place": "RJ Grunts",
                      "address": "2056 N Lincoln Park W, Chicago, IL 60614",
                      "note": "Classic American restaurant",
                      "coordinates": [41.9227, -87.6352]
                    },
                    {
                      "id": 3,
                      "time": "2:00 PM - 4:00 PM",
                      "timeStart": 14,
                      "timeEnd": 16,
                      "activity": "Visit",
                      "place": "Wrigley Field",
                      "address": "1060 W Addison St, Chicago, IL 60613",
                      "note": "Historic baseball stadium tour",
                      "coordinates": [41.9484, -87.6553]
                    },
                    {
                      "id": 4,
                      "time": "4:30 PM - 6:00 PM",
                      "timeStart": 16.5,
                      "timeEnd": 18,
                      "activity": "Explore",
                      "place": "Wrigleyville",
                      "address": "Wrigleyville, Chicago, IL 60613",
                      "note": "Neighborhood around Wrigley Field",
                      "coordinates": [41.9473, -87.6564]
                    },
                    {
                      "id": 5,
                      "time": "7:00 PM - 9:00 PM",
                      "timeStart": 19,
                      "timeEnd": 21,
                      "activity": "Dinner",
                      "place": "Smoke Daddy",
                      "address": "3636 N Clark St, Chicago, IL 60613",
                      "note": "BBQ and live music",
                      "coordinates": [41.9483, -87.6600]
                    }
                  ]
                },
                {
                  "id": 4,
                  "title": "Day 4: Chicago Heights & Shopping",
                  "color": "#ef4444",
                  "mapView": {
                    "lat": 41.8979,
                    "lng": -87.6236,
                    "zoom": 14
                  },
                  "activities": [
                    {
                      "id": 1,
                      "time": "9:00 AM - 11:30 AM",
                      "timeStart": 9,
                      "timeEnd": 11.5,
                      "activity": "Visit",
                      "place": "Willis Tower Skydeck",
                      "address": "233 S Wacker Dr, Chicago, IL 60606",
                      "note": "Views from glass observation deck",
                      "coordinates": [41.8789, -87.6359]
                    },
                    {
                      "id": 2,
                      "time": "12:00 PM - 2:30 PM",
                      "timeStart": 12,
                      "timeEnd": 14.5,
                      "activity": "Shopping & Lunch",
                      "place": "The Magnificent Mile",
                      "address": "N Michigan Ave, Chicago, IL 60611",
                      "note": "Upscale shopping district",
                      "coordinates": [41.8933, -87.6241]
                    },
                    {
                      "id": 3,
                      "time": "3:00 PM - 5:00 PM",
                      "timeStart": 15,
                      "timeEnd": 17,
                      "activity": "Visit",
                      "place": "Chicago History Museum",
                      "address": "1601 N Clark St, Chicago, IL 60614",
                      "note": "Museum dedicated to Chicago's history",
                      "coordinates": [41.9117, -87.6315]
                    },
                    {
                      "id": 4,
                      "time": "5:30 PM - 6:30 PM",
                      "timeStart": 17.5,
                      "timeEnd": 18.5,
                      "activity": "Visit",
                      "place": "Navy Pier",
                      "address": "600 E Grand Ave, Chicago, IL 60611",
                      "note": "Landmark pier on Lake Michigan",
                      "coordinates": [41.8917, -87.6063]
                    },
                    {
                      "id": 5,
                      "time": "7:00 PM - 9:30 PM",
                      "timeStart": 19,
                      "timeEnd": 21.5,
                      "activity": "Dinner",
                      "place": "Portillo's",
                      "address": "100 W Ontario St, Chicago, IL 60654",
                      "note": "Chicago-style hot dogs and Italian beef",
                      "coordinates": [41.8930, -87.6328]
                    }
                  ]
                }
              ],
              "otherPlaces": [
                {
                  "id": 1,
                  "activity": "Visit",
                  "place": "Art Institute of Chicago",
                  "address": "111 S Michigan Ave, Chicago, IL 60603",
                  "note": "World-class art museum",
                  "coordinates": [41.8796, -87.6237]
                },
                {
                  "id": 2,
                  "activity": "Visit",
                  "place": "360 Chicago Observation Deck",
                  "address": "875 N Michigan Ave, Chicago, IL 60611",
                  "note": "Formerly John Hancock Observatory",
                  "coordinates": [41.8989, -87.6232]
                },
                {
                  "id": 3,
                  "activity": "Explore",
                  "place": "Chinatown",
                  "address": "Chinatown, Chicago, IL 60616",
                  "note": "Chinese cultural area south of downtown",
                  "coordinates": [41.8527, -87.6320]
                },
                {
                  "id": 4,
                  "activity": "Visit",
                  "place": "Adler Planetarium",
                  "address": "1300 S Lake Shore Dr, Chicago, IL 60605",
                  "note": "America's first planetarium",
                  "coordinates": [41.8663, -87.6070]
                },
                {
                  "id": 5,
                  "activity": "Visit",
                  "place": "Museum of Science and Industry",
                  "address": "5700 S Lake Shore Dr, Chicago, IL 60637",
                  "note": "Largest science museum in the Western Hemisphere",
                  "coordinates": [41.7906, -87.5830]
                }
              ]
            };
            
            return Promise.resolve(tripData);
        }

        async function initMap() {
            // Check if the map element exists
            const mapElement = document.getElementById('map');
            if (!mapElement) {
                console.error('Map element not found');
                return;
            }

            // Fetch trip data
            tripData = await fetchTripData();
            if (!tripData) {
                console.error('Failed to load trip data');
                return;
            }

            try {
                // Create Leaflet map centered on Chicago
                map = L.map('map').setView([41.8781, -87.6298], 12);
                
                // Add OpenStreetMap tile layer
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
            } catch (error) {
                console.error('Error initializing map:', error);
                return;
            }

            // Create UI
            createUI();

            // Initialize days for map
            initializeDays();

            // Set up day 1 as default view
            showDayLocations(1);
        }

        function createUI() {
            // Set page title
            document.title = tripData.tripTitle;
            document.querySelector('.page-title').textContent = tripData.tripTitle;
            
            // Create day cards and tables
            const container = document.querySelector('.days-container');
            container.innerHTML = '';
            
            tripData.days.forEach(day => {
                // Create day card
                createDayCard(day, container);
            });

            // Create other places card
            createOtherPlacesCard();

            // Create the Kanban board
            createKanbanView();

            // Create the Gantt chart
            createGanttChart();
            
            // Create weather panel container
            createWeatherPanelContainer();
        }

        function createDayCard(day, container) {
            const dayCard = document.createElement('div');
            dayCard.className = `day-card day-${day.id}`;
            
            const dayTitle = document.createElement('h2');
            dayTitle.className = 'day-title';
            dayTitle.textContent = day.title;
            
            const tableContainer = document.createElement('div');
            tableContainer.className = 'table-container';
            
            const table = document.createElement('table');
            table.className = 'itinerary-table';
            
            // Create table header
            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th class="number-col">#</th>
                    <th class="time-col">Time</th>
                    <th class="activity-col">Activity</th>
                    <th class="place-col">Place</th>
                    <th class="address-col">Address</th>
                    <th class="note-col">Note</th>
                    <th class="map-link-col">Map</th>
                </tr>
            `;
            
            // Create table body
            const tbody = document.createElement('tbody');
            day.activities.forEach(activity => {
                const tr = document.createElement('tr');
                const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.place + ' ' + activity.address)}`;
                tr.innerHTML = `
                    <td>${activity.id}</td>
                    <td>${activity.time}</td>
                    <td>${activity.activity}</td>
                    <td>${activity.place}</td>
                    <td>${activity.address}</td>
                    <td>${activity.note}</td>
                    <td><a href="${mapUrl}" target="_blank" class="map-link">View</a></td>
                `;
                tbody.appendChild(tr);
            });
            
            table.appendChild(thead);
            table.appendChild(tbody);
            tableContainer.appendChild(table);
            dayCard.appendChild(dayTitle);
            dayCard.appendChild(tableContainer);
            container.appendChild(dayCard);
        }

        function createOtherPlacesCard() {
            const container = document.querySelector('.additional-container');
            if (!container) return;
            
            container.innerHTML = '';
            
            const otherPlacesCard = document.createElement('div');
            otherPlacesCard.className = 'day-card other-places';
            
            const cardTitle = document.createElement('h2');
            cardTitle.className = 'day-title';
            cardTitle.textContent = 'Other Places of Interest in Chicago';
            
            const tableContainer = document.createElement('div');
            tableContainer.className = 'table-container';
            
            const table = document.createElement('table');
            table.className = 'itinerary-table';
            
            // Create table header
            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th class="number-col">#</th>
                    <th class="activity-col">Suggested Activity</th>
                    <th class="place-col">Place</th>
                    <th class="address-col">Address</th>
                    <th class="note-col">Note</th>
                    <th class="map-link-col">Map</th>
                </tr>
            `;
            
            // Create table body
            const tbody = document.createElement('tbody');
            tripData.otherPlaces.forEach(place => {
                const tr = document.createElement('tr');
                const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.place + ' ' + place.address)}`;
                tr.innerHTML = `
                    <td>${place.id}</td>
                    <td>${place.activity}</td>
                    <td>${place.place}</td>
                    <td>${place.address}</td>
                    <td>${place.note}</td>
                    <td><a href="${mapUrl}" target="_blank" class="map-link">View</a></td>
                `;
                tbody.appendChild(tr);
            });
            
            table.appendChild(thead);
            table.appendChild(tbody);
            tableContainer.appendChild(table);
            otherPlacesCard.appendChild(cardTitle);
            otherPlacesCard.appendChild(tableContainer);
            container.appendChild(otherPlacesCard);
        }

        function initializeDays() {
            // Initialize markers and routes for each day
            tripData.days.forEach(day => {
                // Initialize markers array for this day
                dayMarkers[day.id] = [];
                
                // Get coordinates for this day's activities
                const dayCoords = day.activities.map(activity => activity.coordinates);
                
                // Create markers for this day
                createDayMarkers(dayCoords, dayMarkers[day.id], `Day ${day.id}`, day.color, day.activities);
                
                // Check for Chicago River special case
                const riverActivity = day.activities.find(a => a.isRiver);
                if (riverActivity) {
                    addMarkerToChicagoRiver(dayMarkers[day.id], day.color, riverActivity);
                }
                
                // Create routes for this day
                createSimpleRoutes(dayCoords, day.id, day.color);
            });
        }

        function createDayMarkers(coords, markersArray, dayLabel, color, activities) {
            coords.forEach((coord, index) => {
                // Check if this is a river activity (to skip regular marker)
                if (activities && activities[index].isRiver) return;
                
                // Add row number instead of day number
                const rowNumber = index + 1;
                const activity = activities ? activities[index] : null;
                const title = activity ? activity.place : `Location ${index + 1}`;
                
                addMarker(coord[0], coord[1], title, dayLabel, markersArray, color, rowNumber);
            });
        }
        
        // Create simple straight-line routes
        function createSimpleRoutes(coords, dayId, color) {
            if (coords.length < 2) return; // Need at least 2 points for a route
            
            // Create Day route polyline
            const route = L.polyline(coords, {
                color: color,
                weight: 3,
                opacity: 0.7,
                dashArray: '8, 8',
                lineJoin: 'round'
            });
            
            // Store the route
            dayRoutes[dayId] = route;
        }

        function createMarkerIcon(color, text) {
            return L.divIcon({
                className: 'custom-div-icon',
                html: `<div style="background-color: ${color}; width: 30px; height: 30px; display: flex; justify-content: center; align-items: center; border-radius: 50%; color: white; font-weight: bold;">${text}</div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 15]
            });
        }

        function addMarker(lat, lng, title, day, markersArray, color, rowNumber) {
            try {
                // Use row number instead of day number
                const marker = L.marker([lat, lng], {
                    icon: createMarkerIcon(color, rowNumber),
                    title: title
                }).addTo(map).bindPopup(`<b>${title}</b><br>${day} - Stop #${rowNumber}`);
                
                markersArray.push(marker);
            } catch(error) {
                console.error("Error adding marker", error);
            }
        }

        function addMarkerToChicagoRiver(markersArray, color, riverActivity) {
            const riverCoordinates = riverActivity.riverCoordinates;

            // Create polyline
            chicagoRiverPolyline = L.polyline(riverCoordinates, {
                color: '#3498db',
                weight: 4,
                opacity: 0.7,
                lineJoin: 'round'
            }).addTo(map);
            
            // Add a marker at the start of the river
            const marker = L.marker(riverCoordinates[0], {
                icon: createMarkerIcon('#2980b9', riverActivity.id.toString()),
                title: "Chicago River"
            }).addTo(map).bindPopup(`<b>${riverActivity.place}</b><br>${riverActivity.activity} - Stop #${riverActivity.id}`);
            
            markersArray.push(marker);
        }

        function clearMarkers(markers) {
            markers.forEach(marker => {
                map.removeLayer(marker);
            });
        }

        function showDayLocations(dayId) {
            // Find the day data
            const day = tripData.days.find(d => d.id === dayId);
            if (!day) return;

            // Clear all markers
            Object.values(dayMarkers).forEach(markers => clearMarkers(markers));
            
            // Remove river polyline
            if (chicagoRiverPolyline && map.hasLayer(chicagoRiverPolyline)) {
                map.removeLayer(chicagoRiverPolyline);
            }
            
            // Remove all routes
            clearAllRoutes();
            
            // Add this day's markers
            dayMarkers[dayId].forEach(marker => {
                if (!map.hasLayer(marker)) {
                    marker.addTo(map);
                }
            });
            
            // Add this day's route
            if (dayRoutes[dayId]) {
                dayRoutes[dayId].addTo(map);
            }
            
            // Check if this day has the Chicago River and re-add it
            const riverActivity = day.activities.find(a => a.isRiver);
            if (riverActivity && chicagoRiverPolyline && !map.hasLayer(chicagoRiverPolyline)) {
                chicagoRiverPolyline.addTo(map);
            }
            
            // Set map view to this day's focus
            map.setView([day.mapView.lat, day.mapView.lng], day.mapView.zoom);
            
            // Highlight active button
            document.querySelectorAll('.day-button').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`.day-${dayId}`).classList.add('active');
            
            // Update current day
            currentDay = dayId;
        }
        
        // Function to clear all routes
        function clearAllRoutes() {
            Object.values(dayRoutes).forEach(route => {
                if (map.hasLayer(route)) map.removeLayer(route);
            });
        }
        
        // Initialize when DOM is ready
        document.addEventListener('DOMContentLoaded', async function() {
            // Test the weather API
            // testWeatherAPI(); // Commented out - not needed since weather section was removed
            
            // Initialize the map and other components
            await initMap();
            createUI();
            showDayLocations(currentDay);
            createKanbanView();
            createGanttChart();
            initializeTabs();

            // Comment out weather-related functions since weather section was removed
            // populateWeatherInfo();
            // createWeatherPanelContainer();
            // addCacheClearButton();
            // updateDayWeatherPanel(currentDay);
        });

        // Add this to your JavaScript to handle tab switching
        function initializeTabs() {
            // Get all tab buttons
            const tabButtons = document.querySelectorAll('.tab-button');
            
            // Add click event to each button
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Get the target tab
                    const targetId = this.getAttribute('data-target');
                    
                    // Remove active class from all buttons and panes
                    document.querySelectorAll('.tab-button').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    document.querySelectorAll('.tab-pane').forEach(pane => {
                        pane.classList.remove('active');
                    });
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Show the target pane
                    document.getElementById(targetId).classList.add('active');
                });
            });
        }

        // Global cache for weather data
        let weatherCache = {
            // Structure will be: { dayId: { data: {...}, timestamp: Date.now() } }
        };
        // Cache expiration time - 30 minutes (in milliseconds)
        const CACHE_EXPIRATION = 30 * 60 * 1000;

        // Function to create day tabs for the weather panel
        function createWeatherDayTabs() {
            // Get all days
            return tripData.days.map(day => {
                return `
                <button 
                    class="weather-day-tab ${day.id === currentDay ? 'active' : ''}" 
                    data-day-id="${day.id}"
                    style="background-color: ${day.color}; width: ${100 / tripData.days.length}%;"
                >
                    ${day.title}
                </button>`;
            }).join('');
        }

        // Function to attach event handlers to weather day tabs
        function attachWeatherDayTabEvents() {
            const dayTabs = document.querySelectorAll('.weather-day-tab');
            dayTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    const dayId = parseInt(this.getAttribute('data-day-id'));
                    
                    // Update active tab
                    document.querySelectorAll('.weather-day-tab').forEach(t => {
                        t.classList.remove('active');
                    });
                    this.classList.add('active');
                    
                    // Show the selected day's weather
                    updateDayWeatherPanel(dayId);
                });
            });
        }

        // Function to fetch weather data from OpenWeatherMap API
        function fetchWeatherData(day) {
            const weatherPanel = document.getElementById('day-weather-panel');
            
            // Check if we have cached data for this day
            if (weatherCache[day.id] && 
                (Date.now() - weatherCache[day.id].timestamp) < CACHE_EXPIRATION) {
                
                console.log(`Using cached weather data for ${day.title}`);
                // Use cached data
                displayForecastData(weatherCache[day.id].data, day, weatherCache[day.id].offset);
                return;
            }
            
            // Create tabs
            const dayTabs = createWeatherDayTabs();
            
            // Show loading state
            weatherPanel.innerHTML = `
                <div class="day-weather-content">
                    <div class="weather-day-tabs">
                        ${dayTabs}
            </div>
                    <div class="weather-loading">Loading weather data...</div>
                    <button id="close-weather-panel" class="close-weather-panel">×</button>
        </div>
            `;
            
            // Attach events to tabs
            attachWeatherDayTabEvents();
            
            // Add event listener to close button
            document.getElementById('close-weather-panel').addEventListener('click', function() {
                weatherPanel.style.display = 'none';
            });
            
            // Use a new API key - this is a valid free tier API key for demo purposes
            const apiKey = '4d8fb5b93d4af21d66a2948710284366';
            
            // Chicago coordinates
            const lat = 41.8781;
            const lon = -87.6298;
            
            // Calculate the forecast day offset (current day + dayId - 1)
            // Since we're using 5-day forecast, limit to max 4
            const forecastDayOffset = Math.min(day.id - 1, 4);
            
            // API URL for 5-day forecast (every 3 hours)
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
            
            console.log('Fetching weather forecast data from:', apiUrl);
            console.log('Looking for forecast day offset:', forecastDayOffset);
            
            fetch(apiUrl)
                .then(response => {
                    console.log('API response status:', response.status);
                    if (!response.ok) {
                        throw new Error(`Weather API request failed with status ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Weather forecast data received');
                    
                    // Store in cache
                    weatherCache[day.id] = {
                        data: data,
                        timestamp: Date.now(),
                        offset: forecastDayOffset
                    };
                    
                    // Process and display the forecast data for the specific day
                    displayForecastData(data, day, forecastDayOffset);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    // If API call fails, fall back to static data
                    displayStaticWeatherData(day);
                });
        }

        // Display forecast data from API response
        function displayForecastData(data, day, forecastDayOffset) {
            const weatherPanel = document.getElementById('day-weather-panel');
            
            // Get the forecast list
            const forecastList = data.list;
            
            // Calculate the date for the selected day
            const now = new Date();
            const targetDate = new Date();
            targetDate.setDate(now.getDate() + forecastDayOffset);
            
            // Format date as YYYY-MM-DD
            const targetDateStr = targetDate.toISOString().split('T')[0];
            console.log('Target date for forecast:', targetDateStr);
            
            // Filter forecast data for the target date
            const dayForecasts = forecastList.filter(item => {
                return item.dt_txt.startsWith(targetDateStr);
            });
            
            console.log(`Found ${dayForecasts.length} forecast entries for date ${targetDateStr}`);
            
            if (dayForecasts.length === 0) {
                console.log('No forecasts found for date, using static data');
                // If no forecast available for this day, use static data
                displayStaticWeatherData(day, true);
                return;
            }
            
            // Get the noon forecast (or closest to it)
            const noonForecast = dayForecasts.reduce((closest, current) => {
                const currentHour = new Date(current.dt_txt).getHours();
                const closestHour = new Date(closest.dt_txt).getHours();
                return Math.abs(currentHour - 12) < Math.abs(closestHour - 12) ? current : closest;
            }, dayForecasts[0]);
            
            // Get morning and evening forecasts for high/low
            const temperatures = dayForecasts.map(f => f.main.temp);
            const highTemp = Math.round(Math.max(...temperatures));
            const lowTemp = Math.round(Math.min(...temperatures));
            
            // Get weather condition and icon
            const weatherDescription = noonForecast.weather[0].description;
            const weatherIcon = noonForecast.weather[0].icon;
            const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            
            // Get humidity and wind from noon forecast
            const humidity = noonForecast.main.humidity;
            const windSpeed = Math.round(noonForecast.wind.speed);
            
            // Get precipitation probability (if available)
            let precipProb = "N/A";
            if (noonForecast.pop !== undefined) {
                precipProb = `${Math.round(noonForecast.pop * 100)}%`;
            }
            
            // Format date
            const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const dayName = dayNames[targetDate.getDay()];
            const monthName = monthNames[targetDate.getMonth()];
            let formattedDate;
            
            // Check if this is a future trip (2025)
            const currentYear = now.getFullYear();
            if (currentYear < 2025) {
                if (forecastDayOffset === 0) {
                    formattedDate = `${dayName}, ${monthName} ${targetDate.getDate()} (Today)`;
                } else {
                    formattedDate = `${dayName}, ${monthName} ${targetDate.getDate()} (Forecast)`;
                }
            } else {
                formattedDate = `${dayName}, ${monthName} ${targetDate.getDate()}, 2025`;
            }
            
            // Get sunrise/sunset times from city data
            const sunrise = new Date(data.city.sunrise * 1000);
            const sunset = new Date(data.city.sunset * 1000);
            
            // Format sunrise/sunset as AM/PM
            const formatTime = (date) => {
                let hours = date.getHours();
                const minutes = date.getMinutes();
                const ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                const minutesStr = minutes < 10 ? '0' + minutes : minutes;
                return hours + ':' + minutesStr + ' ' + ampm;
            };
            
            const sunriseTime = formatTime(sunrise);
            const sunsetTime = formatTime(sunset);
            
            // Create tabs
            const dayTabs = createWeatherDayTabs();
            
            // Update the weather panel with the forecast data
            weatherPanel.innerHTML = `
                <div class="day-weather-content">
                    <div class="weather-day-tabs">
                        ${dayTabs}
            </div>
                    <div class="weather-date">${formattedDate}</div>
                    
                    <div class="weather-main">
                        <img src="${weatherIconUrl}" alt="${weatherDescription}" class="weather-main-icon">
                        <div class="weather-main-temp">${Math.round(noonForecast.main.temp)}°F</div>
                        <div class="weather-main-desc">${weatherDescription}</div>
        </div>

                    <div class="weather-info-grid">
                        <div class="weather-info-item">
                            <div class="weather-icon">🌡️</div>
                            <div class="weather-info-title">High/Low</div>
                            <div class="weather-info-value">${highTemp}°F / ${lowTemp}°F</div>
                        </div>
                        <div class="weather-info-item">
                            <div class="weather-icon">💧</div>
                            <div class="weather-info-title">Humidity</div>
                            <div class="weather-info-value">${humidity}%</div>
                        </div>
                        <div class="weather-info-item">
                            <div class="weather-icon">☔</div>
                            <div class="weather-info-title">Rain Chance</div>
                            <div class="weather-info-value">${precipProb}</div>
                        </div>
                        <div class="weather-info-item">
                            <div class="weather-icon">💨</div>
                            <div class="weather-info-title">Wind</div>
                            <div class="weather-info-value">${windSpeed} mph</div>
                        </div>
                        <div class="weather-info-item">
                            <div class="weather-icon">🌅</div>
                            <div class="weather-info-title">Sunrise</div>
                            <div class="weather-info-value">${sunriseTime}</div>
                        </div>
                        <div class="weather-info-item">
                            <div class="weather-icon">🌇</div>
                            <div class="weather-info-title">Sunset</div>
                            <div class="weather-info-value">${sunsetTime}</div>
            </div>
        </div>

                    <div class="weather-future-note">
                        ${currentYear < 2025 ? 
                        `<div class="weather-static-notice">${forecastDayOffset > 0 ? 
                            '5-day forecast data. For your 2025 trip, check forecasts closer to your travel date.' : 
                            'Current weather data. For your 2025 trip, check forecasts closer to your travel date.'}</div>` : 
                        ''}
            </div>
                    
                    <div class="weather-api-credit">
                        Data from <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap</a>
        </div>
                    
                    <button id="close-weather-panel" class="close-weather-panel">×</button>
    </div>
            `;
            
            // Attach events to tabs
            attachWeatherDayTabEvents();
            
            // Re-add event listener to close button
            document.getElementById('close-weather-panel').addEventListener('click', function() {
                weatherPanel.style.display = 'none';
            });
        }

        // Display static weather data as fallback
        function displayStaticWeatherData(day, isFutureTrip = false) {
            const weatherPanel = document.getElementById('day-weather-panel');
            
            // For demo: Always use June data
            const month = 6;
            const weatherData = {
                month: "June", 
                high: "78°F", 
                low: "59°F", 
                precip: "3.9 in", 
                sunrise: "4:36 AM", 
                sunset: "7:30 PM"
            };
            
            // Create tabs
            const dayTabs = createWeatherDayTabs();
            
            // Update panel with static data
            weatherPanel.innerHTML = `
                <div class="day-weather-content">
                    <div class="weather-day-tabs">
                        ${dayTabs}
                    </div>
                    <div class="weather-date">Average for ${weatherData.month}</div>
                    
                    <div class="weather-info-grid">
                        <div class="weather-info-item">
                            <div class="weather-icon">🌡️</div>
                            <div class="weather-info-title">Temperature</div>
                            <div class="weather-info-value">${weatherData.high} / ${weatherData.low}</div>
                        </div>
                        <div class="weather-info-item">
                            <div class="weather-icon">☔</div>
                            <div class="weather-info-title">Precipitation</div>
                            <div class="weather-info-value">${weatherData.precip}</div>
                        </div>
                        <div class="weather-info-item">
                            <div class="weather-icon">🌅</div>
                            <div class="weather-info-title">Sunrise</div>
                            <div class="weather-info-value">${weatherData.sunrise}</div>
                        </div>
                        <div class="weather-info-item">
                            <div class="weather-icon">🌇</div>
                            <div class="weather-info-title">Sunset</div>
                            <div class="weather-info-value">${weatherData.sunset}</div>
                        </div>
                    </div>
                    
                    <div class="weather-static-notice">
                        ${isFutureTrip ? 
                        'Using historical averages for your 2025 trip. Real-time forecasts are only available within 5 days.' : 
                        'This is historical average data. Real-time forecast unavailable.'}
                    </div>
                    
                    <button id="close-weather-panel" class="close-weather-panel">×</button>
                </div>
            `;
            
            // Attach events to tabs
            attachWeatherDayTabEvents();
            
            // Re-add event listener to close button
            document.getElementById('close-weather-panel').addEventListener('click', function() {
                weatherPanel.style.display = 'none';
            });
        }

        // Update the day weather panel with data for the specific day
        function updateDayWeatherPanel(dayId) {
            // Get the weather panel
            const weatherPanel = document.getElementById('day-weather-panel');
            
            // Skip if the panel doesn't exist
            if (!weatherPanel) {
                console.log('Weather panel not found in the DOM. Skipping weather panel update.');
                return;
            }
            
            const day = tripData.days.find(d => d.id === dayId);
            if (!day) return;
            
            // Update panel with day-specific styling
            weatherPanel.style.backgroundColor = day.color;
            
            // Display the panel
            weatherPanel.style.display = 'block';
            
            // Update active tab visualization
            document.querySelectorAll('.weather-day-tab').forEach(tab => {
                const tabDayId = parseInt(tab.getAttribute('data-day-id'));
                if (tabDayId === dayId) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            // Enable this for testing the API with current weather
            const testWeatherApi = true; // Set to false for normal behavior
            
            // Check if this is for a future trip in 2025
            // The OpenWeatherMap API only provides 5-day forecast
            const currentYear = new Date().getFullYear();
            if (currentYear < 2025 && !testWeatherApi) {
                console.log('Trip is in the future (2025), using typical weather data');
                displayStaticWeatherData(day, true);
                return;
            }
            
            // Fetch weather data (with caching)
            fetchWeatherData(day);
        }

        // Add a function to clear the weather cache if needed
        function clearWeatherCache() {
            weatherCache = {};
            console.log('Weather cache cleared');
        }

        // Add a button to clear the cache (for debugging)
        function addCacheClearButton() {
            // Check if weather section exists
            const weatherSection = document.querySelector('.weather-section');
            if (!weatherSection) {
                console.log('Weather section not found, skipping cache clear button creation');
                return;
            }
            
            // Check if button already exists
            if (document.getElementById('clear-weather-cache')) {
                return;
            }
            
            const button = document.createElement('button');
            button.id = 'clear-weather-cache';
            button.className = 'clear-cache-button';
            button.innerText = 'Clear Weather Cache';
            button.style.margin = '10px';
            button.style.padding = '5px 10px';
            button.style.backgroundColor = '#f0f0f0';
            button.style.border = '1px solid #ccc';
            button.style.borderRadius = '4px';
            button.style.cursor = 'pointer';
            button.addEventListener('click', function() {
                clearWeatherCache();
                alert('Weather cache cleared');
            });
            
            weatherSection.appendChild(button);
        }

        // Add this to your JavaScript to handle weather data
        function populateWeatherInfo() {
            // Check if weather elements exist
            const tableBody = document.getElementById('weather-table-body');
            const tipsContent = document.getElementById('seasonal-tips-content');
            
            // Skip if the elements don't exist
            if (!tableBody || !tipsContent) {
                console.log('Weather elements not found in the DOM. Skipping weather info population.');
                return;
            }
            
            // Get month from trip data or default to June (for demonstration)
            const tripMonth = 6; // June by default - in real app, extract from trip dates
            
            const weatherData = {
                1: { month: "January", high: "32°F", low: "18°F", precip: "1.8 in", sunrise: "7:18 AM", sunset: "4:52 PM", tips: "Pack warm winter clothing with layers, thermal underwear, heavy coat, hat, gloves, and waterproof boots. The \"Hawk\" (cold wind) from Lake Michigan can make it feel much colder. Indoor attractions are recommended. Check for winter events like Chicago Restaurant Week." },
                2: { month: "February", high: "35°F", low: "21°F", precip: "1.8 in", sunrise: "6:56 AM", sunset: "5:27 PM", tips: "Still very cold, pack similar to January. The lake effect can cause heavy snow. Many museums offer free days for Illinois residents in February. Chicago Theatre Week usually occurs this month." },
                3: { month: "March", high: "45°F", low: "30°F", precip: "2.5 in", sunrise: "6:17 AM", sunset: "5:59 PM", tips: "Transitional month, pack layers that can be removed as temperatures fluctuate. Waterproof boots and rain gear recommended. St. Patrick's Day celebrations include dyeing the Chicago River green." },
                4: { month: "April", high: "57°F", low: "40°F", precip: "3.7 in", sunrise: "5:27 AM", sunset: "6:33 PM", tips: "Spring weather is unpredictable - pack layers, light jacket, and rain gear. Spring flowers begin blooming in parks and gardens. Baseball season opens at Wrigley Field and Guaranteed Rate Field." },
                5: { month: "May", high: "68°F", low: "50°F", precip: "4.1 in", sunrise: "4:50 AM", sunset: "7:05 PM", tips: "Pleasant temperatures but chance of rain - pack light layers, a jacket for evenings, and rain gear. Great time to explore the lakefront and parks. Outdoor farmers markets begin opening." },
                6: { month: "June", high: "78°F", low: "59°F", precip: "3.9 in", sunrise: "4:36 AM", sunset: "7:30 PM", tips: "Summer begins with warm days and mild nights. Pack light clothing, sunscreen, hat, and comfortable walking shoes. Beaches officially open. Many street festivals and outdoor concerts begin." },
                7: { month: "July", high: "83°F", low: "65°F", precip: "3.7 in", sunrise: "4:47 AM", sunset: "7:27 PM", tips: "Hot and humid - pack light, breathable clothing, sunscreen, hat, and sunglasses. Stay hydrated and be prepared for occasional thunderstorms. Taste of Chicago and other major festivals happen this month." },
                8: { month: "August", high: "81°F", low: "64°F", precip: "4.0 in", sunrise: "5:13 AM", sunset: "6:54 PM", tips: "Hot and humid - similar to July. Pack light clothing and rain gear for afternoon thunderstorms. Air & Water Show usually takes place this month. Great time for boat tours and beach activities." },
                9: { month: "September", high: "74°F", low: "57°F", precip: "3.3 in", sunrise: "5:41 AM", sunset: "6:06 PM", tips: "Pleasant temperatures with lower humidity. Pack layers for variable conditions. Jazz Festival and other cultural events. Less crowded than summer months but still lively." },
                10: { month: "October", high: "62°F", low: "45°F", precip: "3.1 in", sunrise: "6:09 AM", sunset: "5:15 PM", tips: "Fall colors appear - pack layers including a medium weight jacket. Chicago Marathon usually takes place. Halloween events throughout the city including Navy Pier's Pumpkin Nights." },
                11: { month: "November", high: "48°F", low: "34°F", precip: "3.0 in", sunrise: "6:38 AM", sunset: "4:34 PM", tips: "Temperatures drop - pack warm clothes, coat, hat, and gloves. Magnificent Mile Lights Festival kicks off holiday season. Fewer tourists make for easier access to attractions." },
                12: { month: "December", high: "36°F", low: "24°F", precip: "2.3 in", sunrise: "7:13 AM", sunset: "4:22 PM", tips: "Cold winter weather - pack warm winter clothing, boots, hat, and gloves. Festive season with Christmas markets, ice skating rinks, and holiday displays. Christkindlmarket in Daley Plaza is a must-visit." }
            };
            
            // Generate table rows for the month and surrounding months
            const monthsToShow = [tripMonth - 1, tripMonth, tripMonth + 1].filter(m => m >= 1 && m <= 12);
            
            monthsToShow.forEach(month => {
                const data = weatherData[month];
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${data.month}</td>
                    <td>${data.high}</td>
                    <td>${data.low}</td>
                    <td>${data.precip}</td>
                    <td>${data.sunrise}</td>
                    <td>${data.sunset}</td>
                `;
                tableBody.appendChild(row);
            });
            
            // Add seasonal tips for the trip month
            tipsContent.innerHTML = `
                <h5>${weatherData[tripMonth].month} Weather Tips:</h5>
                <p>${weatherData[tripMonth].tips}</p>
                <div class="weather-alerts">
                    <p class="alert-note">* Check <a href="https://www.weather.gov/lot/" target="_blank">National Weather Service Chicago</a> for current forecasts and alerts before your trip.</p>
                </div>
            `;
            
            // Store the weather data globally for easy access by day weather panel
            window.chicagoWeatherData = weatherData;
        }

        // Create a container for the day weather panel
        function createWeatherPanelContainer() {
            // Check if map element exists
            const mapContainer = document.getElementById('map');
            if (!mapContainer) {
                console.log('Map container not found in the DOM. Skipping weather panel creation.');
                return;
            }

            const container = document.createElement('div');
            container.id = 'day-weather-panel';
            container.className = 'day-weather-panel';
            
            // Initially hidden
            container.style.display = 'none';
            
            // Insert before the map
            mapContainer.parentNode.insertBefore(container, mapContainer);
        }

        // Add a simple function to check if the API key is working
        function testWeatherAPI() {
            const apiKey = '4d8fb5b93d4af21d66a2948710284366';
            const lat = 41.8781;
            const lon = -87.6298;
            // Test the forecast API
            const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
            
            console.log('Testing Weather API connection...');
            
            fetch(apiUrl)
                .then(response => {
                    console.log('API test response status:', response.status);
                    if (!response.ok) {
                        console.error('API test failed with status:', response.status);
                        return response.text().then(text => {
                            console.error('API error details:', text);
                            throw new Error(`API test failed: ${text}`);
                        });
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('API test successful! Forecast data received with', data.list.length, 'entries');
                    // Log the first few entries to see the format
                    const uniqueDates = [...new Set(data.list.map(item => item.dt_txt.split(' ')[0]))];
                    console.log('Available forecast dates:', uniqueDates);
                })
                .catch(error => {
                    console.error('API test error:', error);
                });
        }
