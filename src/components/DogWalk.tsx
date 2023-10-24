import { useState } from 'react';
import { Button } from '@mui/material';

function DogWalk() {
    const [zipCode, setZipCode] = useState('');
    const [recommendation, setRecommendation] = useState<string | null>(null);
    const [temperature, setTemperature] = useState<number | null>(null);
    const [weatherCondition, setWeatherCondition] = useState<string | null>(null);
    const [windSpeed, setWindSpeed] = useState<number | null>(null);
    const [recommendationText] = useState<string | null>(null);


    const fetchWeatherRecommendation = async () => {
        console.log("Function called");
        try {
            const response = await fetch(`https://flask-co-lab-portfolio.onrender.com//weather?zip=${zipCode}`);
            const data = await response.json();
            console.log("Recieved Data:", data);
            {recommendationText && <p>Recommendation: {recommendationText}</p>};
            
            if (data.recommendation) {
                setRecommendation(data.recommendation.recommendation);
            }
            
            if (data.recommendation && data.recommendation.temperature !== undefined) {
                setTemperature(data.recommendation.temperature);
            }
            
            if (data.weather_condition) {
                setWeatherCondition(data.weather_condition);
            }
            if (data.wind_speed !== undefined) {
                setWindSpeed(data.wind_speed);
            }
                  
    
            if (data.error) {
                alert(data.error);
            }
        } catch (error) {
            console.error('Failed to fetch weather data:', error);
            alert('An error occurred. Please try again.');
        }
    };
    

    return (
        <section className="p-6 rounded-md md:p-6">
            <div className="dog-walk-container">
    
                {/* First Box */}
                <div id="dogwalk" className="box info-box bg-gray-200 p-6 rounded-lg mb-6 shadow-md">
                    <h1 className="text-4xl mb-4 mt-5 flex justify-center font-serif">Dog Walker</h1>
                    <h3 className="text-xl mt-5 flex justify-center font-serif">
                    Wondering if the weather's right for a dog walk? We've got you covered! By using real-time data from the Open Weather Map, we can tell you if it's a good time to grab that leash.
                    </h3>
                    <h3 className='text-xl mt-5 flex justify-center font-serif'>Please allow for ~30seconds for the data to populate!
                    </h3>

                
    
                    {/* Second Box */}
                    <div className="box input-and-results-box bg-white bg-opacity-60 p-4 md:p-6 rounded-lg shadow-md mt-5">
                        <div className='text-2xl mb-4 mt-5 flex flex-col md:flex-row justify-center font-serif items-center'>
                            <input
                                className='w-11/12 md:w-auto mb-4 md:mb-0 md:mr-5 border rounded px-3 py-2'
                                type="text"
                                placeholder="Enter your Zip Code"
                                value={zipCode}
                                onChange={e => setZipCode(e.target.value)}
                            />
                            <Button className='rounded py-2 px-6'
                                style={{ 
                                    backgroundColor: '#5FBEFF', 
                                    color: 'white',
                                    textTransform: 'none'
                                }}    onClick={fetchWeatherRecommendation}>Get Info
                            </Button>
                        </div>
                        <div className="weather-info text-xl flex flex-col items-center space-y-2 font-serif">
                            {recommendation && <p className='text-4xl text-center'>{recommendation}</p>}
                            {temperature && <p className='text-xl text-center'>Temperature: {temperature.toFixed(2)}°F</p>}
                            {weatherCondition && <p className='text-xl text-center'>Weather Condition: {weatherCondition}</p>}
                            {windSpeed && <p className='text-xl text-center'>Wind Speed: {windSpeed.toFixed(2)} mph</p>}
                        </div>
                    </div>
                </div>
    
            </div>
        </section>
    );
    
}

export default DogWalk;