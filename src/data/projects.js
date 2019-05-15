// Assembled as JSON from text

const SOFTWARE_PROJECTS = {
    name: "Software & Web Development Projects",
    projects: [
        {
            name: "Stuff Sharing",
            id: "stuff",
            imgsrc: "https://user-images.githubusercontent.com/47155673/57749020-f4b10480-770e-11e9-8f69-f2aba069ead8.jpg",
            description:
                "Peer sharing marketplace website built on EJS, with Node/Express backend.",
            longDescription:
                "Peer sharing marketplace website built on EJS, with Node/Express backend. It features multiple routes manged by Express routing and interactions with a realtime database. User authentication is implemented using Passport.\nRefer to the Github repository for an overview of the features and routes designed for the web app.",
            whatWasUsed: ["Node", "Express", "EJS", "PostgreSQL", "Passport"],
            btns: [
                {
                    text: "View Website",
                    link: "https://cs2102postreg.herokuapp.com"
                },
                {
                    text: "View on Github",
                    link: "https://github.com/perrythewang/CS2102_main"
                }
            ]
        },
        {
            name: "This Website",
            id: "projects-app",
            imgsrc: "https://user-images.githubusercontent.com/47155673/57749594-3b9ff980-7711-11e9-948f-2706b5a79a39.png",
            description: "Project portfolio website developed in React.",
            longDescription:
                "Project portfolio web app designed with some of the core features and components for React websites in general, such as a landing page, a navigation bar, cards displayed in a responsive grid, and handling routing with URL parameters.\nThe web app is developed with React and uses Redux for state management and React Router for routing.",
            whatWasUsed: ["React", "Redux", "Semantic UI"],
            btns: [{ text: "View on Github", link: "https://github.com/perrywzm/projects" }]
        },
        {
            name: "HYSYS Optimizer",
            id: "hysysopt",
            imgsrc: "https://user-images.githubusercontent.com/47155673/57748672-8a4b9480-770d-11e9-9778-ea7c2fe31609.PNG",
            description:
                "Optimizes plant design in the HYSYS process simulation software.",
            longDescription:
                "HYSYS is a chemical process simulator used to mathematically model chemical processes such as when designing simple separation sections up to entire refineries. When designing plants, there may be many variables which affect how the plant performs.\nThis Python package provides a way to optimize these variables automatically with the particle swarm optimization algorithm, testing thousands of plant configurations without user intervention.\nIt accesses the HYSYS app by the exposed HYSYS application interface, which allows us to programmatically control the app externally.",
            whatWasUsed: [
                "Python",
                "HYSYS Application Interface",
                "Particle Swarm Optimization"
            ],
            btns: [
                {
                    text: "View on Github",
                    link:
                        "https://github.com/perrywzm/hysysopt/blob/master/Example.ipynb"
                }
            ]
        }
    ]
};

const ML_PROJECTS = {
    name: "Machine Learning & AI Projects",
    projects: [
        {
            name: "DCGAN Cat Generator",
            id: "dcgan1",
            imgsrc: 'https://user-images.githubusercontent.com/47155673/57729004-ba704480-76c7-11e9-97f0-996ddb54ce45.jpg',
            description:
                "Generates pictures of cats using generative adversarial networks.",
            longDescription: "Uses the Deep Convolutional Generative Adversarial Network architecture to generate pictures of cat faces from random noise.\nThe dataset used is from https://www.kaggle.com/crawford/cat-dataset, which has almost 10000 annotated images of cats.",
            whatWasUsed: ["Python", "GANs", "ConvNets", "Tensorflow 2.0", "Keras API", "Computer Vision"],
            btns: [
                {
                    text: "View on Github",
                    link:
                        "https://github.com/perrywzm/mlnotebooks/blob/master/DCGAN%20Cat%20Gen.ipynb"
                }
            ]
        },
        {
            name: "Stock Price Predictor (RNN)",
            id: "stocks-rnn",
            imgsrc: "https://user-images.githubusercontent.com/47155673/57748670-87e93a80-770d-11e9-9d6b-53fc953409a2.png",
            description:
                "Stock price prediction using time series analysis and RNN models.",
            longDescription: "Applies various time series analysis techniques to the classic stock price prediction problem. First, time series decomposition is applied to split the time series data into its trend, seasonality, and residual components.\nA recurrent neural network using gated recurrent units (GRU) receives the trend and residual components and learns to predict the price excluding seasonality. Finally, the seasonality is added back to the prediction to get the final model price prediction.\nData is obtained from the free IEX API. Only the daily closing price data is used in the model.",
            whatWasUsed: ["Python", "RNNs", "Tensorflow 2.0", "Keras API", "Time Series Analysis"],
            btns: [
                {
                    text: "View on Github",
                    link:
                        "https://github.com/perrywzm/mlnotebooks/blob/master/DCGAN%20Cat%20Gen.ipynb"
                }
            ]
        },
        {
            name: "Stock Price Predictor (Neural ODEs)",
            id: "stocks-neural-ode",
            imgsrc: "https://user-images.githubusercontent.com/47155673/57748670-87e93a80-770d-11e9-9d6b-53fc953409a2.png",
            description:
                "Stock price prediction using a neural ordinary differential equation model.",
            longDescription: "Applies various time series analysis techniques to the classic stock price prediction problem. First, time series decomposition is applied to split the time series data into its trend, seasonality, and residual components.\nInstead of an RNN model, a neural ODE model is used, which implements the ODE block. The ODE block formulates itself as an ODE, which takes on continuous dynamics instead of discrete dynamics in the typical networks with discrete layers.\nFinally, the seasonality is added back to the prediction to get the final model price prediction.\nData is obtained from the free IEX API. Only the daily closing price data is used in the model.",
            whatWasUsed: ["Python", "Neural ODEs", "Tensorflow 2.0", "Keras API", "Time Series Analysis"],
            btns: [
                {
                    text: "Under Construction",
                    link: "none"
                }
            ]
        },
        {
            name: "Neural Machine Translation",
            id: "nmt",
            imgsrc: "https://user-images.githubusercontent.com/47155673/57749238-d0a1f300-770f-11e9-90d5-572605106c5c.png",
            description:
                "Simple language translation model using a transformer.",
            longDescription: "Uses the transformer sequence-to-sequence model architecture to perform translation of sentences from English to French. It uses the attention mechanism for both the encoder and the decoder. The encoder first determines a latent representation of the input English sentence, which is then interpreted by the decoder to French.\nDataset is available at: http://www.statmt.org/europarl/v7/fr-en.tgz",
            whatWasUsed: ["Python", "Keras", "Transformer", "Seq2seq", "Natural Language Processing"],
            btns: [
                {
                    text: "Under Construction",
                    link: "none"
                }
            ]
        },
    ]
};

export const PROJECTS = [SOFTWARE_PROJECTS, ML_PROJECTS];
