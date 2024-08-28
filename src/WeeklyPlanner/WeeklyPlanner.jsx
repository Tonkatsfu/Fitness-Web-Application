import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WeeklyPlanner.module.css';

function WeeklyPlanner() {
    const [activeItem, setActiveItem] = useState('WeeklyPlanner');
    const [activeToolbox, setActiveToolbox] = useState('dayTypeContainer');
    const navigate = useNavigate();

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
                                className={`${styles.dayTypeContainer} ${activeToolbox === 'dayTypeContainer' ? styles.activeToolbox : ''} `}
                                onClick={() => setActiveToolbox('dayTypeContainer')}
                            >
                                <img src='src/assets/icons/dayType.png' alt="DayType" className={styles.dayTypeImg}></img>
                                <span className={`${styles.dayTypeText} ${activeToolbox === 'dayTypeContainer' ? styles.activeToolbox : ''} `}>Choose a Workout Day Type</span>
                            </div>

                            <div 
                                className={`${styles.addWorkoutContainer} ${activeToolbox === 'addWorkoutContainer' ? styles.activeToolbox : ''}`}
                                onClick={() => setActiveToolbox('addWorkoutContainer')}
                            >
                                <img src='src/assets/icons/addWorkout.png' alt="Add Workout" className={styles.addWorkoutImg}></img>
                                <span className={`${styles.addWorkoutText} ${activeToolbox === 'addWorkoutContainer' ? styles.activeToolbox : ''} `}>Add Workout</span>
                            </div>

                            <div 
                                className={`${styles.repsSetsContainer} ${activeToolbox === 'repsAndSetsContainer' ? styles.activeToolbox : ''}`}
                                onClick={() => setActiveToolbox('repsAndSetsContainer')}
                            >
                                <img src='src/assets/icons/repsandSets.png' alt="Reps and Sets" className={styles.repsAndSetsImg}></img>
                                <span className={`${styles.repsAndSetsText} ${activeToolbox === 'repsAndSetsContainer' ? styles.activeToolbox : ''} `}>Reps and Sets</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.exerciseList}>
                        <div className={styles.exerciseListBox}>
                            <div className={styles.dayTypeButtons}>
                                <div className={styles.upperDay}>Upper</div>
                                <div className={styles.lowerDay}>Lower</div>
                                <div className={styles.pushDay}>Push</div>
                                <div className={styles.pullDay}>Pull</div>
                                <div className={styles.legDay}>Legs</div>
                            </div>

                            <div className={styles.dayTypeNext}>
                                <div className={styles.nextButton}>Next</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WeeklyPlanner;
