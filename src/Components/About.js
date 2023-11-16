import React from 'react';

function AboutSection() {
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
          <h3 style={styles.heading}>Redux Integration</h3>
          <p style={styles.paragraph}>
            The component utilizes Redux for state management. Hooks like useSelector and useDispatch are employed to efficiently manage and update the application state.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Asynchronous Data Fetching and Error Handling</h3>
          <p style={styles.paragraph}>
            Asynchronous data fetching is implemented with conditional rendering based on loading status. Error handling ensures a smooth user experience, displaying error messages and providing a reset option.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Dynamic Styling with Inline CSS</h3>
          <p style={styles.paragraph}>
            Inline styles are used for dynamic styling, such as adjusting the rotation of the day/night indicator and flex direction based on the time of day.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>User Interaction Handling</h3>
          <p style={styles.paragraph}>
            The component includes a search bar allowing users to input a city name. User input triggers an event handler for data fetching and updates.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Component Lifecycle Management</h3>
          <p style={styles.paragraph}>
            useEffect is employed to manage side effects, such as updating sunrise and sunset times and calculating the degree of rotation for the day/night indicator.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Mathematical Calculations</h3>
          <p style={styles.paragraph}>
            The component performs mathematical calculations to determine the degree of rotation for the day/night indicator based on sunrise and sunset times.
          </p>
        </div>

        <div style={styles.term}>
          <h3 style={styles.heading}>Additional Weather Information</h3>
          <p style={styles.paragraph}>
            Weather-related information, including temperature, feels-like temperature, cloud percentage, wind speed, wind direction, humidity, and sunrise/sunset times, is displayed to provide a comprehensive overview.
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