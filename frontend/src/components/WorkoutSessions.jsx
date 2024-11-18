//import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Our Programs</h1>
        <p>
        The diverse range of programs, from group exercises, corporate training to personalized training, caters to varying fitness levels and goals. Members get variety and the option of customization as each gym offers a diversity of exercise options and specialized programs, allowing members to choose activities that align with their interests and fitness objectives. Personalized training programs ensure workouts are tailored to individual needs, maximizing results. Participating in group exercises fosters a sense of community among members, providing social support and encouragement, which can be instrumental in maintaining consistency in their fitness journey.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      
      <div className="wrapper">
      <h1>Corporate Membership</h1>
      <p>
        Do not have time to go to the gym? We get the gym to you. Gym India offers corporate membership programs tailored for companies looking to promote employee wellness and fitness. These programs are designed to encourage a healthier workforce by providing BMI screening, diet and nutrition counselling, fitness activities and seminars for building a healthier lifestyle.
      </p>
      <h1>Personal Training</h1>
      <p>
       Gym India is known for the competent personal trainers and extraordinary personal training offered by them. The individuals seeking for serious goal-oriented fitness, personalized guidance, motivation, and specialized workout plans, Gold’s Gym India personal training program is for them.
      </p>
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        The Featured Bootcamps section of your gym app highlights specialized fitness programs tailored to meet diverse fitness goals. Each bootcamp is designed by expert trainers and focuses on specific objectives, such as weight loss, strength building, endurance enhancement, or flexibility improvement.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Weight Loss Bootcamp</h4>
            <p>
            Focuses on high-intensity interval training (HIIT) and nutrition guidance to help users shed extra pounds quickly.
            </p>
          </div>
          <div>
            <h4>Strength Training Bootcamp</h4>
            <p>
            Emphasizes strength building with weightlifting, resistance bands, and bodyweight exercises for muscle growth.
          </p>
          </div>
          <div>
            <h4>Endurance Bootcamp</h4>
            <p>
            A mix of cardio and strength workouts designed to build stamina, including running, cycling, and rowing.
            </p>
          </div>
          <div>
            <h4>Functional Training Bootcamp</h4>
            <p>
            Exercises that mimic real-life movements for better daily function, incorporating compound lifts, core stability, and balance drills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
