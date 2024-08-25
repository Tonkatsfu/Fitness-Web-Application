import React from 'react';
import styles from './Overview.module.css';

function Overview() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <div className={styles.logo}>
                    F i t T r a c k
                </div>

                <div className={styles.profileSection}>
                    <img src='src/assets/hannidp.jpg' alt="Profile" className={styles.profilePicture}/>
                    <p className={styles.profileName}>Hanni Pham</p>
                </div>

                <div className={styles.navButtons}>
                    <div className={styles.navItem1}>
                        <img src='src/assets/icons/dashboard.png' alt="Dashboard" className={styles.dashboard} />
                        <p className={styles.dashboardTitle}>Dashboard</p>
                    </div>
                    <div className={styles.navItem2}>
                        <img src='src/assets/icons/calorie.png' alt="Calorie" className={styles.dashboard} />
                        <p className={styles.dashboardTitle}>Macros</p>
                    </div>
                    <div className={styles.navItem3}>
                        <img src='src/assets/icons/weeklyPlanner.png' alt="WeeklyPlanner" className={styles.dashboard} />
                        <p className={styles.dashboardTitle}>Weekly Planner</p>
                    </div>
                </div>
            </div>

            <div className={styles.rightContainer}>
                
            </div>
        </div>
    );
}

export default Overview;
