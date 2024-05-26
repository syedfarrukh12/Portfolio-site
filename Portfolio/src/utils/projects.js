import r3id from '../assets/r3id.png'
import oav from '../assets/oav.jpg'
import caresolace from '../assets/caresolace.png'
import coworks from '../assets/coworks.png'
import foretrace from '../assets/foretrace.jpg'
import predictview from '../assets/predictview.jpeg'


export const projectsList = [
    {
        title: "Restor3d",
        description: `A dynamic medical device company rooted in Durham, North Carolina. 
        During my tenure, I collaborated with a talented team of Software Engineers on 
        the development of their web application. Our collective efforts were dedicated to enhancing
         and streamlining medical procedures, contributing to Restor3d's commitment to innovation in healthcare.`,
        image: r3id,
        technologies: [
            'NodeJs', 'ExpressJs', 'GraphQL', 'ReactJs', 'Google Cloud', 'Prisma', 'PostresQL'
        ]
    },
    {
        title: "One Auction View",
        description: `One Auction View provides a platfrom where you can buy auction vehicles listed on all sites in the United States.
        Worked as a full stack engineer creating a tons of new features using microservices and integrated them with frontend app. 
        Created a scraping feature to scrap data from auction sites with Puppeteer. Scraping module is built on NestJs. `,
        image: oav,
        technologies: [
            'NodeJs', 'NestJs', 'RESTful APIs', 'ReactJs', 'CosmosDB', 'Puppeteer', 'Redux Thunk'
        ]
    },
    {
        title: "CareSolace",
        description: `Care Solace is the mental health care coordination service of choice for K-12 school districts, 
        higher education institutions, municipalities and employers. Worked there as a front-end engineer in ReactJs, 
        Tailwind css and using component library called Material UI`,
        image: caresolace,
        technologies: [
            'RESTful APIs', 'ReactJs', 'Tailwind css', 'Material UI'
        ]
    },
    {
        title: "CoWorks",
        description: `Coworks is a management tool for automating the coworking experience. Worked there as a full stack developer, creating innovative features
        including IOT based api called Doordeck. Worked on Ruby on rails on backend and integrated with ReactJs on front-end.`,
        image: coworks,
        technologies: [
            'Ruby on Rails', 'RESTful APIs', 'ReactJs', 'Serializers'
        ]
    },
    {
        title: "Foretrace",
        description: `A highly technical cyber security company based in MaryLand, Columbia.
        During my tenure, I worked as a sole Developer for mostly front-end of the application. Also created a few backend
         features deployed with the help of AWS services such as AWS Lambda functions, Appsync etc.`,
        image: foretrace,
        technologies: [
            'NodeJs', 'AWS Lambda', 'GraphQL', 'AWS Appsync', 'ReactJs'
        ]
    },
    {
        title: "PredictView",
        description: `PredictView is a cutting-edge health technology company dedicated to improving mental wellness with 
        its AI-based solutions to engage people who are seeking self-insights with options to access the help they need. 
        Worked as a full stack engineer mainly focusing on backend, cloud logging and test automation.
        `,
        image: predictview,
        technologies: [
            'NodeJs', 'NestJs', 'ExpressJs', 'NextJs', 'React', 'GCP', 'Cloud Logging', 'PostgreSQL', 'Material-UI', 'Microservice Architecture', 'Jest', 'RTL'
        ]
    },
]