import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Overview.module.css';

function Overview() {
    const [activeItem, setActiveItem] = useState('Dashboard');
    const [calories, setCalories] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        let calorieGoal = 800;
        let increment = 8;
        let currentCalories = 0;

        const interval = setInterval(() => {
            currentCalories += increment;
            if (currentCalories >= calorieGoal) {
                currentCalories = calorieGoal;
                clearInterval(interval);
            }
            setCalories(currentCalories);
        }, 20); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.logo}>
                    FitTrack
                </div>

                <div className={styles.profileSection}>
                    <img src='src/assets/hannidp.jpg' alt="Profile" className={styles.profilePicture} />
                    <p className={styles.profileName}>Hanni Pham</p>
                </div>

                <div className={styles.navButtons}>
                    <div 
                        className={`${styles.navItem} ${activeItem === 'Dashboard' ? styles.active : ''}`}
                        onClick={() => setActiveItem('Dashboard')}
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
                            placeholder='Looking for something?'>
                        </input>
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
                            <img src='src/assets/icons/logout.png' alt="Logout" className={styles.logoutButton} />
                        </div>
                    </div>
                </div>

                <div className={styles.dashboardContainer}>
                    <div className={styles.macrosDashboard}>
                        <p className={styles.macrosTitle}>Calories</p>
                        <div className={styles.macrosBar}>
                            <div className={styles.outer}>
                                <div className={styles.inner}>
                                    <div className={styles.calorieCountDashboard}>
                                        {calories} Left
                                    </div>
                                </div>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="80" cy="80" r="70" stroke-linecap="round" 
                                    style={{ 
                                        strokeDasharray: 472, 
                                        strokeDashoffset: 472 * (1 - calories / 800) 
                                    }}
                                />
                            </svg>
                        </div>

                        <div className={styles.otherMacrosBar}>
                            <div className={styles.otherMacroBar}>
                                    <div className={styles.otherMacroName}>Protein</div>
                                    <div className={styles.otherMacroBarContainer}>
                                        <div className={styles.otherMacroBarContainerPer}></div>
                                    </div>
                            </div>

                            <div className={styles.otherMacroBar}>
                                    <div className={styles.otherMacroName}>Carbohydrates</div>
                                    <div className={styles.otherMacroBarContainer1}>
                                        <div className={styles.otherMacroBarContainerPer1}></div>
                                    </div>
                            </div>

                            <div className={styles.otherMacroBar}>
                                    <div className={styles.otherMacroName}>Fats</div>
                                    <div className={styles.otherMacroBarContainer2}>
                                        <div className={styles.otherMacroBarContainerPer2}></div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.weeklyPlannerDashboard}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
