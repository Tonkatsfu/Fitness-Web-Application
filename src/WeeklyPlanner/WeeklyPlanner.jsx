import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WeeklyPlanner.module.css';

function WeeklyPlanner() {
    const [activeItem, setActiveItem] = useState('WeeklyPlanner');
    const [activeToolbox, setActiveToolbox] = useState('dayTypeContainer');
    const [activeDayType, setActiveDayType] = useState("");
    const [dayType, setDayType] = useState('');
    const [workoutName, setWorkoutName] = useState('');
    const [workouts, setWorkouts] = useState([]);
    const [numsets, setNumSets] = useState(0);
    const [sets, setSets] = useState([]);
    const navigate = useNavigate();

    const handleSetNumberChange = (e) => {
        const numberOfSets = parseInt(e.target.value) || 0;
        setNumSets(numberOfSets);
        setSets(new Array(numberOfSets).fill({ weight: '', reps: '' }));
    };

    const handleSetChange = (index, field, value) => {
        const updatedSets = [...sets];
        updatedSets[index] = { ...updatedSets[index], [field]: value };
        setSets(updatedSets);
    };

    const handleAddWorkout = () => {
        const newWorkout = {name : workoutName,
                            sets: sets }

        setWorkouts([...workouts, newWorkout]);
        setWorkoutName("");
        setNumSets(0);
        setSets([]);
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
                        className={`${styles.navItem} ${activeItem === 'WeeklyPlanner' ? styles.active : ''}`}
                        onClick={() => {
                            setActiveItem('WeeklyPlanner');
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
                        <div className={styles.createButton}>
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
                            <img src='src/assets/icons/logout.png' alt="Logout" className={styles.logoutButton} 
                            onClick={() => {navigate('/Login')}}/>
                        </div>
                    </div>
                </div>

                <div className={styles.weeklyPlannerToolbox}>
                    <div className={styles.weeklyPlannerToolboxBox}>
                        <div className={styles.tools}>
                            <div 
                                className={`${styles.dayTypeContainer} ${activeToolbox === 'dayTypeContainer' ? styles.activeToolbox : ''}`}
                            >
                                <img src='src/assets/icons/dayType.png' alt="DayType" className={styles.dayTypeImg}></img>
                                <span className={styles.dayTypeText}>Choose a Workout Day Type</span>
                            </div>

                            <div 
                                className={`${styles.addWorkoutContainer} ${activeToolbox === 'addWorkoutContainer' ? styles.activeToolbox : ''}`}
                            >
                                <img src='src/assets/icons/addWorkout.png' alt="Add Workout" className={styles.addWorkoutImg}></img>
                                <span className={styles.addWorkoutText}>Add Workout</span>
                            </div>

                            <div 
                                className={`${styles.repsSetsContainer} ${activeToolbox === 'repsAndSetsContainer' ? styles.activeToolbox : ''}`}
                            >
                                <img src='src/assets/icons/repsandSets.png' alt="Reps and Sets" className={styles.repsAndSetsImg}></img>
                                <span className={styles.repsAndSetsText}>Reps and Sets</span>
                            </div>
                        </div>
                    </div>

                    {activeToolbox === 'dayTypeContainer' && (
                        <div className={`${styles.exerciseList} ${styles.show}`}>
                            <div className={styles.exerciseListBox}>
                                <div className={styles.dayTypeButtons}>
                                    <div className={`${styles.upperDay} ${activeDayType === 'upperDay' ? styles.activeDayType : ''}`} 
                                    onClick={() => {
                                        setDayType('Upper');
                                        setActiveDayType('upperDay');
                                    }}>
                                        Upper
                                    </div>
                                    <div className={`${styles.lowerDay} ${activeDayType === 'lowerDay' ? styles.activeDayType : ''}`} 
                                    onClick={() => {
                                        setDayType('Lower');
                                        setActiveDayType('lowerDay');
                                    }}>
                                        Lower
                                    </div>
                                    <div className={`${styles.pushDay} ${activeDayType === 'pushDay' ? styles.activeDayType : ''}`} 
                                    onClick={() => {
                                        setDayType('Push');
                                        setActiveDayType('pushDay');
                                    }}>
                                        Push
                                    </div>
                                    <div className={`${styles.pullDay} ${activeDayType === 'pullDay' ? styles.activeDayType : ''}`} 
                                    onClick={() => {
                                        setDayType('Pull');
                                        setActiveDayType('pullDay');
                                    }}>
                                        Pull
                                    </div>
                                    <div className={`${styles.legDay} ${activeDayType === 'legDay' ? styles.activeDayType : ''}`} 
                                    onClick={() => {
                                        setDayType('Leg');
                                        setActiveDayType('legDay');
                                    }}>
                                        Leg
                                    </div>
                                </div>
                                <div className={styles.dayTypeNext}>
                                    <div className={styles.nextButton}
                                    onClick={() => setActiveToolbox("addWorkoutContainer")}>
                                        Next
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeToolbox === 'addWorkoutContainer' && (
                        <div className={`${styles.exerciseList} ${styles.show}`}>
                            <div className={styles.exerciseNameBox}>
                                <div className={styles.exerciseNameContainer}>
                                    <input 
                                        className={styles.inputExercise} 
                                        placeholder='Input workout name'
                                        value={workoutName}
                                        onChange={(e) => setWorkoutName(e.target.value)}
                                    />
                                </div>
                                <div className={styles.dayTypeNext}>
                                    <div className={styles.nextButton}
                                    onClick={() => setActiveToolbox("repsAndSetsContainer")}>
                                        Next
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                    {activeToolbox === 'repsAndSetsContainer' && (
                        <div className={`${styles.exerciseList} ${styles.show}`}>
                            <div className={styles.setsAndRepsBox}>
                                <div className={styles.setsAndRepsContainer}>
                                    <input 
                                        className={styles.inputExercise} 
                                        type='number' 
                                        placeholder='Number of sets'
                                        value={numsets}
                                        onChange={handleSetNumberChange}
                                    />
                                </div>
                                
                                <div className={styles.exerciseSets}>
                                    {sets.map((set, index) => (
                                        <div key={index} className={styles.setRow}>
                                            <input 
                                                type="number"
                                                placeholder={`Set ${index + 1} Weight`}
                                                className={styles.inputWeight}
                                                value={set.weight}
                                                onChange={(e) => handleSetChange(index, 'weight', e.target.value)}>
                                            </input>
                                            <input
                                                type="number"
                                                placeholder={`Set ${index + 1} Reps`}
                                                className={styles.inputReps}
                                                value={set.reps}
                                                onChange={(e) => handleSetChange(index, 'reps', e.target.value)}>
                                            </input>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.addWorkoutSubmit}>
                                    <div className={styles.addWorkoutButton} 
                                    onClick={() => {
                                        handleAddWorkout();
                                        setActiveToolbox("addWorkoutContainer");}}>
                                            Submit
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}

                    <div className={styles.workoutList}>
                        <div className={styles.workoutListBox}>
                            <div className={styles.workoutTitle}>
                                <h1>{dayType} Day:</h1>
                            </div>

                            <div className={styles.exerciseName}>
                                <ol>
                                    {workouts.map((workout, index) => (
                                        <li key={index} className={styles.workoutItem}>
                                            <strong>{workout.name}</strong>
                                            <ul>
                                               {workout.sets.map((set, i) => (
                                                <li key={i} className={styles.setItem}>
                                                    Set {i+1}: {set.weight} kg x {set.weight} reps
                                                </li>
                                               ))} 
                                            </ul>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>   
        </div>
    );
}

export default WeeklyPlanner;
