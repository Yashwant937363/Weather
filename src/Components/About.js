import React from 'react';

function AboutSection() {
  // Define internal CSS styles as an object
  const styles = {
    aboutSection: {
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
      maxWidth: '600px',
      margin: '20px auto', 
    },
    term: {
      marginTop: '20px',
    },
    heading: {
      fontSize: '18px',
      marginBottom: '5px',
      color: '#333',
    },
    paragraph: {
      fontSize: '16px',
      color: '#666',
    },
  };

  return (
    <>
      <div style={styles.aboutSection}>
        <div style={styles.term}>
          <h3 style={styles.heading}>State Management</h3>
          <p style={styles.paragraph}>
            The component demonstrates the use of the useState hook to manage various pieces of state within a functional component. State is used to store and update data that can change over time, such as weather information, city name, and styling variables like rotationDegree and direction.
          </p>
        </div>
        <div style={styles.term}>
          <h3 style={styles.heading}>Asynchronous Data Fetching</h3>
          <p style={styles.paragraph}>
            The component showcases how to fetch data asynchronously from external APIs using the fetch function and the async/await pattern. It demonstrates error handling for API requests, ensuring a robust user experience.
          </p>
        </div>
        <div style={styles.term}>
          <h3 style={styles.heading}>Lifecycle Management with useEffect</h3>
          <p style={styles.paragraph}>
            useEffect is used to manage the component's lifecycle. The component triggers data fetching and manipulation functions when specific dependencies (e.g., city, weatherData, curDate, Hours, Minutes, sunrise, sunset) change. This ensures that data is updated when needed and avoids unnecessary re-rendering.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Dynamic Styling with Inline CSS</h3>
          <p style={styles.paragraph}>
            Inline CSS within the style tag is employed for dynamic styling based on the component's state. For instance, it rotates a day/night indicator (rotationDegree) and changes the flex direction (direction) of a section based on the time of day.
          </p>
        </div>
        <div style={styles.term}>
          <h3 style={styles.heading}>Conditional Rendering</h3>
          <p style={styles.paragraph}>
            The component conditionally renders content based on the availability of data. If weatherData is null (indicating that data is being fetched), it displays a loading message and spinner. This approach ensures a smooth user experience.
          </p>
        </div>
        <div style={styles.term}>
          <h3 style={styles.heading}>User Interaction Handling</h3>
          <p style={styles.paragraph}>
            The component includes a search bar that allows users to input a city name. User input triggers an event handler (updateWeather) that updates the city state and initiates a data fetch.
          </p>
        </div>
        <div style={styles.term}>
          <h3 style={styles.heading}>Data Formatting and Display</h3>
          <p style={styles.paragraph}>
            It demonstrates how to format and display data fetched from external APIs, including temperature, sunrise/sunset times, wind direction, and more. Data is presented clearly and meaningfully to the user.
          </p>
        </div>
        <div style={styles.term}>
          <h3 style={styles.heading}>Error Handling</h3>
          <p style={styles.paragraph}>
            The component includes error handling for API requests. It logs error messages to the console and maintains a user-friendly interface even when data fetching fails.
          </p>
        </div>
        <div style={styles.term}>
          <h3 style={styles.heading}>Mathematical Calculations</h3>
          <p style={styles.paragraph}>
            The component calculates the degree of rotation for the day/night indicator based on sunrise and sunset times. This involves mathematical calculations to determine the position of the sun/moon icon.
          </p>
        </div>
        <div style={styles.term}>
          <h3 style={styles.heading}>Reactivity</h3>
          <p style={styles.paragraph}>
            The component reacts to changes in the fetched data and updates its display accordingly. For example, it adjusts the layout of elements based on whether it's daytime or nighttime.
          </p>
        </div>
      </div>
      <div style={styles.aboutSection}>
        <h2>About Weather Data</h2>
        <p>
          Weather data provides important information to help you understand the current weather conditions. Here's what each term means in simple language:
        </p>

        <div style={styles.term}>
          <h3 style={styles.heading}>Cloud Percentage</h3>
          <p style={styles.paragraph}>
            This tells you how much of the sky is covered by clouds. When it's at its maximum, the sky is fully cloudy, and you might not see the sun or the blue sky.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Temperature</h3>
          <p style={styles.paragraph}>
            Temperature measures how hot or cold it is outside. It can vary from very cold to very hot, affecting how comfortable you might feel.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Feels Like</h3>
          <p style={styles.paragraph}>
            This is what it actually feels like outside, considering factors like humidity and wind. It might be the same as the temperature, or it can feel warmer or cooler.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Humidity</h3>
          <p style={styles.paragraph}>
            Humidity measures how much moisture is in the air. High humidity can make it feel muggy, while low humidity makes the air feel dry.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Minimum Temperature</h3>
          <p style={styles.paragraph}>
            This is the lowest temperature expected during the day or night. It can help you plan for cooler times.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Maximum Temperature</h3>
          <p style={styles.paragraph}>
            This is the highest temperature expected. It can indicate whether it will be a warm or cool day.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Wind Speed</h3>
          <p style={styles.paragraph}>
            Wind speed measures how fast the wind is blowing. It can range from gentle breezes to strong gusts.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Wind Direction</h3>
          <p style={styles.paragraph}>
            This tells you where the wind is coming from. It helps you know which direction the wind is blowing.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Sunrise</h3>
          <p style={styles.paragraph}>
            Sunrise is the moment when the sun appears above the horizon in the morning, marking the start of the day.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Sunset</h3>
          <p style={styles.paragraph}>
            Sunset is the time when the sun goes below the horizon in the evening, marking the end of the day.
          </p>
        </div>
      </div>
    </>

  );
}

export default AboutSection;
