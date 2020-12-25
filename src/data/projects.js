import versionControl from '../assets/version_control.png';
import map from '../assets/map.png';
import pacMan from '../assets/pac_man.png';

const PROJECTS = [
    {
        id: 1,
        title: 'Gitlet: A Git Clone',
        description: 'A lighter version-control system with all the local capabilities of Git, allowing users to save accessible backups of previous versions of a file, locally preventing potential data loss while being privacy-friendly.',
        link: 'https://github.com/ogatica017/gitlet',
        image: versionControl
    },
    {
        id: 2,
        title: 'Bearmaps',
        description: 'Manipulated real-world mapping data from Google Maps API to create the backend of a mapping application that generates an image of a specified region and finds the optimal route between two locations using A* search.',
        link: 'https://github.com/ogatica017/bearmaps',
        image: map
    },
    {
        id: 3,
        title: 'Reinforcement Learning Pac-Man',
        description: 'Implemented Q-learning which enabled a Pac-Man agent to use reinforcement learning and search for an optimal policy to a Markov Decision Process through trial and error, learning to avoid ghosts while maximizing game score.',
        link: 'https://github.com/ogatica017/rl_pacman',
        image: pacMan
    }
];

export default PROJECTS;