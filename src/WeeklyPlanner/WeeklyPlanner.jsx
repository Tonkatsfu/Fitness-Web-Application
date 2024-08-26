import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WeeklyPlanner.module.css';

function WeeklyPlanner() {
    const [activeItem, setActiveItem] = useState('WeeklyPlanner');
    const [workout, setWorkout] = useState([]);
    const [dayType, setDayType] = useState('');
    const [workoutDate, setWorkoutDate] = useState(new Date().toISOString().split('T')[0]);
    const [exercises, setExercises] = useState([]);
    const [showExerciseInputs, setShowExerciseInputs] = useState(false);
    const [newExercise, setNewExercise] = useState({ name: '', sets: "", reps: "" });
    const navigate = useNavigate();

    function handleAddExercise() {
        setShowExerciseInputs(!showExerciseInputs);
    }

    function handleExerciseChange(e) {
        const { name, value } = e.target;
        setNewExercise(prevState => ({
            ...prevState,
            [name]: name === 'sets' || name === 'reps' ? Number(value) : value
        }));
    }

    function handleSaveExercise() {
        setExercises([...exercises, newExercise]);
        setNewExercise({ name: '', sets: 0, reps: 0 });
        setShowExerciseInputs(false);
    }

    function handleAddWorkout() {
        const newWorkout = {
            type: dayType,
            date: workoutDate,
            exercises: exercises
        };

        setWorkout([...workout, newWorkout]);
        setDayType("");
        setWorkoutDate(new Date().toISOString().split('T')[0]);
        setExercises([]); 
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.logo}>FitTrack</div>
                <div className={styles.profileSection}>
                    <img src='src/assets/hannidp.jpg' alt="Profile" className={styles.profilePicture} />
                    <p className={styles.profileName}>Hanni Pham</p>
                </div>
                <div className={styles.navButtons}>
                    <div 
                        className={`${styles.navItem} ${activeItem === 'Dashboard' ? styles.active : ''}`}
                        onClick={() => {
                            setActiveItem('Dashboard');
                            navigate('/overview');
                        }}
                    >
                        <img src='src/assets/icons/dashboard.png' alt="Dashboard" className={styles.dashboard} />
                        <p className={styles.dashboardTitle}>Dashboard</p>
                    </div>
                    <div 
                        className={`${styles.navItem} ${activeItem === 'Macros' ? styles.active : ''}`}
                        onClick={() => setActiveItem('Macros')}
                    >
                        <img src='src/assets/icons/calorie.png' alt="Calorie" className={styles.dashboard} />
                        <p className={styles.dashboardTitle}>Macros</p>
                    </div>
                    <div 
                        className={`${styles.navItem} ${activeItem === 'Weekly Planner' ? styles.active : ''}`}
                        onClick={() => {
                            setActiveItem('Weekly Planner');
                            navigate('/weeklyplanner');
                        }}
                    >
                        <img src='src/assets/icons/weeklyPlanner.png' alt="WeeklyPlanner" className={styles.dashboard} />
                        <p className={styles.dashboardTitle}>Weekly Planner</p>
                    </div>
                </div>
            </div>

            <div className={styles.rightWrapper}>
                <div className={styles.rightContainer}>
                    <div className={styles.searchBar}>
                        <input 
                            className={styles.searchBarBox} 
                            placeholder='Looking for something?'
                        />
                    </div>
                    <div className={styles.rightSideContainer}>
                        <div className={styles.createButton} onClick={handleAddWorkout}>
                            <p className={styles.createButtonText}>+ Create a Plan</p>
                        </div>
                        <div className={styles.socials}>
                            <img src='src/assets/icons/facebook.png' alt="Facebook" className={styles.facebook}/>
                            <img src='src/assets/icons/linkedIn.png' alt="LinkedIn" className={styles.linkedin}/>
                            <img src='src/assets/icons/instagram.png' alt="Instagram" />
                        </div>
                        <div className={styles.rightSideProfile}>
                            <img src='src/assets/hannidp.jpg' alt="Profile" className={styles.profilePictureRight} />
                            <p className={styles.profileNameRight}>Hanni Pham</p>
                            <img src='src/assets/icons/logout.png' alt="Logout" className={styles.logoutButton} />
                        </div>
                    </div>
                </div>

                <div className={styles.weeklyPlannerContainer}>
                    <div className={styles.weeklyPlannerContainerBox}>
                        <div className={styles.workoutType}>
                            <div 
                                className={styles.upperDay} 
                                onClick={() => setDayType('Upper')}
                            >
                                Upper
                            </div>
                            <div 
                                className={styles.lowerDay} 
                                onClick={() => setDayType('Lower')}
                            >
                                Lower
                            </div>
                            <div 
                                className={styles.pushDay} 
                                onClick={() => setDayType('Push')}
                            >
                                Push
                            </div>
                            <div 
                                className={styles.pullDay} 
                                onClick={() => setDayType('Pull')}
                            >
                                Pull
                            </div>
                            <div 
                                className={styles.legsDay} 
                                onClick={() => setDayType('Legs')}
                            >
                                Legs
                            </div>
                        </div>
                        <button className={styles.addExerciseButton} onClick={handleAddExercise}>
                            + Add Exercise
                        </button>
                        {showExerciseInputs && (
                            <div className={styles.exerciseInputs}>
                                <input
                                    type="text"
                                    name="name"
                                    value={newExercise.name}
                                    onChange={handleExerciseChange}
                                    placeholder="Exercise Name"
                                />
                                <input
                                    type="number"
                                    name="sets"
                                    value={newExercise.sets}
                                    onChange={handleExerciseChange}
                                    placeholder="Sets"
                                />
                                <input
                                    type="number"
                                    name="reps"
                                    value={newExercise.reps}
                                    onChange={handleExerciseChange}
                                    placeholder="Reps"
                                />
                                <button onClick={handleSaveExercise}>Save Exercise</button>
                            </div>
                        )}
                    </div>

                    <div className={styles.exerciseList}>
                        <div className={styles.exerciseListBox}>
                            <p className={styles.exerciseHeader}>Exercises:</p>
                            <ul>
                                {exercises.map((exercise, index) => (
                                    <li key={index}>
                                        {exercise.name} - {exercise.sets} sets x {exercise.reps} reps
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WeeklyPlanner;
