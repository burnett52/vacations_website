// Set dimensions and margins for the charts
const margin = { top: 30, right: 30, bottom: 70, left: 60 };
const width = 600 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Load CSV data and create visualizations
d3.csv("data/vacations.csv").then(data => {
    data.forEach(d => {
        d.Latitude = +d.Latitude;
        d.Longitude = +d.Longitude;
    });

    // Generate the Season Distribution Bar Chart
    createSeasonBarChart(data);

    // Generate the Location Scatter Plot with World Map
    createLocationScatterPlotWithMap(data);
}).catch(error => {
    console.error("Error loading CSV data:", error);
});

// Function to create a bar chart showing the count of destinations by season
function createSeasonBarChart(data) {
    // Group data by season
    const seasonCounts = d3.nest()
        .key(d => d.Season)
        .rollup(v => v.length)
        .entries(data);

    // Create SVG for bar chart
    const svg = d3.select("#season-bar-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Set up X and Y scales
    const x = d3.scaleBand()
        .domain(seasonCounts.map(d => d.key))
        .range([0, width])
        .padding(0.2);
    const y = d3.scaleLinear()
        .domain([0, d3.max(seasonCounts, d => d.value)])
        .nice()
        .range([height, 0]);

    // Add X and Y axes
    svg.append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));
    svg.append("g")
        .call(d3.axisLeft(y));

    // Create bars for each season
    svg.selectAll(".bar")
        .data(seasonCounts)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.key))
        .attr("y", d => y(d.value))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.value))
        .attr("fill", "#69b3a2");

    // Add labels
    svg.selectAll(".label")
        .data(seasonCounts)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", d => x(d.key) + x.bandwidth() / 2)
        .attr("y", d => y(d.value) - 5)
        .attr("text-anchor", "middle")
        .text(d => d.value);
}

// Function to create a scatter plot showing geographic distribution with a world map background
function createLocationScatterPlotWithMap(data) {
    // Define the projection and path for the map
    const projection = d3.geoNaturalEarth1()
        .scale(150)
        .translate([width / 2 + margin.left, height / 2 + margin.top]);
    const path = d3.geoPath().projection(projection);

    // Create SVG for scatter plot
    const svg = d3.select("#location-scatter-plot")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Load and draw the world map
    d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(worldData => {
        // Draw the map
        svg.selectAll("path")
            .data(worldData.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", "#d3d3d3") // Light gray color for map
            .attr("stroke", "#333"); // Darker stroke for country borders

        // Plot each point based on latitude and longitude
        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => projection([d.Longitude, d.Latitude])[0])
            .attr("cy", d => projection([d.Longitude, d.Latitude])[1])
            .attr("r", 3)
            .attr("fill", "#ff6347")
            .attr("opacity", 0.7);

        // Add labels for axes
        svg.append("text")
            .attr("x", width / 2)
            .attr("y", height + margin.bottom - 10)
            .attr("text-anchor", "middle")
            .text("Longitude");

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -height / 2)
            .attr("y", -margin.left + 15)
            .attr("text-anchor", "middle")
            .text("Latitude");
    }).catch(error => {
        console.error("Error loading world map data:", error);
    });
}
