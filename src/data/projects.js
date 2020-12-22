import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS = [
    {
        id: 1,
        title: 'Gitlet: A Git Clone',
        description: 'A lighter version-control system with all the local capabilities of Git, allowing users to save accessible backups of previous versions of a file, locally preventing potential data loss while being privacy-friendly',
        link: 'https://github.com/ogatica017/gitlet',
        image: project1
    },
    {
        id: 2,
        title: 'Bearmaps',
        description: 'Manipulated real-world mapping data from Google Maps API to create the backend of a mapping application that generates an image of a specified region and finds the optimal route between two locations using A* search',
        link: 'https://github.com/ogatica017/bearmaps',
        image: project2
    },
    {
        id: 3,
        title: 'Reinforcement Learning Pac-Man',
        description: 'Implemented Q-learning which enabled a Pac-Man agent to use reinforcement learning and search for an optimal policy to a Markov Decision Process through trial and error, learning to avoid ghosts while maximizing game score',
        link: 'https://github.com/ogatica017/rl_pacman',
        image: project3
    }
];

export default PROJECTS;