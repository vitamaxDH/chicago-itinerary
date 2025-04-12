# Chicago Trip Itinerary with Maps

An interactive web-based itinerary for a 4-day trip to Chicago with maps, locations, daily schedules, and real-time weather data.

## Overview

This project provides a comprehensive trip planner for a visit to Chicago, featuring:

- Interactive map using Leaflet.js and OpenStreetMap
- Day-by-day itinerary with times, activities, and locations
- Color-coded map markers matching each day's schedule
- Mobile-responsive design
- Actual driving routes between destinations using OpenRouteService
- Real-time weather forecasts using OpenWeatherMap API
- Additional suggested places of interest

## Features

### Interactive Map
- Displays locations for each day with numbered markers
- Color-coded by day (blue for Day 1, green for Day 2, etc.)
- Click markers for location information
- Shows actual driving routes between destinations

### Daily Itineraries
- Detailed schedules for each day
- Includes time ranges, activities, locations, and notes
- Easy switching between days

### Weather Information
- Real-time weather forecasts from OpenWeatherMap
- Shows temperature, conditions, humidity, and wind speed
- Fallback to historical averages if forecast unavailable

### Trip Visualizations
- Timeline view showing activities for each day
- Gantt chart displaying the timing of all activities
- Easy-to-read visual representation of the trip schedule

### Responsive Design
- Works on desktop and mobile devices
- Horizontal scrolling tables for smaller screens
- Adaptable layout for various screen sizes

## Technology Stack

- **HTML/CSS/JavaScript**: Core web technologies
- **Leaflet.js**: Open-source JavaScript library for interactive maps
- **OpenStreetMap**: Free, editable map of the world
- **OpenRouteService API**: For actual driving directions
- **OpenWeatherMap API**: For real-time weather forecasts
- **TailwindCSS**: Utility-first CSS framework for styling

## How to Use

1. Open `chicago_itinerary.html` in any modern web browser
2. Use the day buttons to switch between different days of the trip
3. Click on map markers to see information about each location
4. Scroll through the daily itineraries for detailed schedules
5. Check the weather panel for current conditions and forecasts
6. View the trip visualizations for a timeline or Gantt chart view
7. Check "Other Places of Interest" for additional attractions

## Project Structure

- `chicago_itinerary.html`: Main HTML file containing the structure
- `chicago_script.js`: JavaScript file containing all functionality
- `styles.css`: CSS styles for the itinerary
- `README.md`: This documentation file

## API Keys

This project uses:
- **Leaflet.js with OpenStreetMap**: No API key required
- **OpenRouteService API**: Uses a demo key (limited requests per day)
- **OpenWeatherMap API**: Uses a demo key (limited requests per day)

For production use, it's recommended to replace the demo API keys with your own.

## License

This project is open-source and available for personal use.

## Author

Created for planning a Chicago trip in April 2025.
