import React from 'react';
import styles from './index.module.css';
import passwordgen from './images/pwgen.png';
import habitTracker from './images/habit.png';
import ghostHunters from './images/ghost.png';
import converter from './images/converter.png';
import triviani from './images/triviani.png'
import artemis from './images/artemis.png'
import meowChat from './images/meowChat.png'

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
                                    href="https://github.com/sumshuss/randompasswordgen"
                                    
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://animated-squirrel-4fb828.netlify.app/"
                                    
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
                                    href="https://github.com/SuperBrava/LAP-2-Project-Front-End"
                                    
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://habit-tracker-lap-two.netlify.app/"
                                  
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
                                    href="https://github.com/NovaDA/Ghost_Hunters_FE"
                                
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://paranormal-testimonies.netlify.app/index.html"
                                
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
                                    href="https://github.com/sumshuss/unitconveter"
                                   
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://sage-marshmallow-bb77fe.netlify.app/"
                                   
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
                                    href="https://github.com/sigltech/Triviani-Quiz-App"
                                
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://triviani-quiz.netlify.app/"
                                
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
                                src={meowChat}
                                alt="meowchat"
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>Meow Chat</h3>
                            <p className={styles.projectDescription}>
                               Meow chat is a chat application that allows users to communicate with each other. it allows users to see live chat messages from their friends
                            </p>

                            <p>
                                For this app, I used React, Sass, HTML and Javascript. I also used firebase to store user data.
                            </p>
                            <div className={styles.buttons}>
                                <a
                                    className={styles.button}
                                    href="https://github.com/sumshuss/react-chat-app"
                                
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://meowchatsum.netlify.app/"
                                
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
                                src={artemis}
                                alt="ghost hunters main page"
                            />
                        </div>
                        <div className={styles.flipCardBack}>
                            <h3>Artemis Camping</h3>
                            <p className={styles.projectDescription}>
                               Love hiking, but planning a trip requires too much apps? With Artemis Camping, users can plan their camping trip, create a list of necessities, find out the weather, create a route and view the map all in one application! Planning a nice hike has never been easier with Artemis camping!
                            </p>

                            <p>
                                For this app, we used React and Redux, as well as CSS for the front end. We also created a backend using the Django framework (python)
                            </p>
                            <div className={styles.buttons}>
                                <a
                                    className={styles.button}
                                    href="https://github.com/wingyuen2022/artemis-frontend"
                                
                                >
                                    Github
                                </a>

                                <a
                                    className={styles.button}
                                    href="https://artemis-camping.netlify.app/"
                                
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
