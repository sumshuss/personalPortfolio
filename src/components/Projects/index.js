import React from 'react';

import styles from './index.module.css';
import passwordgen from './images/pwgen.png';
import habitTracker from './images/habit.png';
import ghostHunters from './images/ghost.png';
import converter from './images/converter.png';
import triviani from './images/triviani.png'

const Projects = () => {
    return (
        <>
            <section className={styles.projects}>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <img
                                className={styles.imageStyles}
                                src={passwordgen}
                                alt="password generator with 4 random passwords"
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>Password Generator</h3>
                            <p className={styles.projectDescription}>
                                This was one of the very first projects I have built. After finishing Scrimba's front end developer course, I create a very basic random password generator that generates 4 random passwords for the user to choose. 
                            </p>
                            <p>
                            I used HTML, CSS and javascript to build this website.
                            </p>
                            <div className={styles.buttons}>
                                <a
                                    className={styles.button}
                                    href="https://github.com/Izgardon/Lap-1-Portfolio-Project-Client"
                                    
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://london-journal.netlify.app/"
                                    
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <img
                                className={styles.imageStyles}
                                src={habitTracker}
                                alt="habit tracker application login"
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>Habit Tracker</h3>
                            <p className={styles.projectDescription}>
                                The habit tracker allows users to track their habits and generate new habits! It has a log in system where users can create an account or log in if they have an an existing account. It can help users track good or bad habits incase they want to stop a particular habit or continue one. </p>
                                
                            <p>
                                 The front end of this app was built using HTML, CSS and javascript. For the backend, we used a SQL database and used express to help us make API calls to the frontend
                            </p>



                            <div className={styles.buttons}>
                                <a
                                    className={styles.button}
                                    href="https://github.com/millman97/lap-2-frontend"
                                    
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://fp-habit-tracker.netlify.app"
                                  
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <img
                                className={styles.imageStyles}
                                src={ghostHunters}
                                alt="ghost hunters main page"
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>Paranormal testimonies</h3>
                            <p className={styles.projectDescription}>
                                Love scary stories? With paranormal testimonies, users can write their own scary stories or read stories from other anonymous users. If users want some motivation, they can also generate their very own 2 sentence horror stories. Users can also comment and react to posts.
                            </p>

                            <p>
                                For this app, we used HTML, CSS and Javascript for the front end. For the back end, we used Express to make api calls and to also store posts, comments, usernames and reactions
                            </p>
                            <div className={styles.buttons}>
                                <a
                                    className={styles.button}
                                    href="https://github.com/Gioele-M/lap3_quiz_project_client"
                                
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://dumbfounded.netlify.app/"
                                
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <img
                                className={styles.imageStyles}
                                src={converter}
                                alt="Units converter"
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>Unit converter</h3>
                            <p className={styles.projectDescription}>
                                Struggling to convert your units? This app allows users to convert their units. They just input their desired number and the results will show up at the bottom.
                            </p>

                            <p>
                                This app was created using HTML, CSS and javascript.
                            </p>
                            <div className={styles.buttons}>
                                <a
                                    className={styles.button}
                                    href="https://github.com/alicekres/random-blogs"
                                   
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://blog-project-gukxpvjva-alicekres.vercel.app/"
                                   
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            <img
                                className={styles.imageStyles}
                                src={triviani}
                                alt="ghost hunters main page"
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>The triviani quiz game</h3>
                            <p className={styles.projectDescription}>
                                Want to test you knowledge on some trivia questions? The triviani quiz game allows users to play a quiz game that test their knowledge on trivial questions. They can choose the amount of questions and also the topics!
                            </p>

                            <p>
                                For this app, we used React, Redux and also created an express backend to store user information such as points and username. 
                            </p>
                            <div className={styles.buttons}>
                                <a
                                    className={styles.button}
                                    href="https://github.com/Gioele-M/lap3_quiz_project_client"
                                
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://dumbfounded.netlify.app/"
                                
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Projects;
