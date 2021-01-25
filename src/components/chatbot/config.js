import { createChatBotMessage } from "react-chatbot-kit";
import Option from "./Option";
import Wka from "./Wka";
import Graph from "./Graph";
import Config from "./config.json";

const config = {
  initialMessages: [
    createChatBotMessage(`Willkommen zum Service der 404Bandits!`, {
      widget: "SearchOptions",
    }),
  ],

  botName: "AweSomeO 3000",
  customStyles: { botMessageBox: { width: "100%", height: "300px" } },
  widgets: [
    {
      widgetName: "SearchOptions",
      widgetFunc: (props) => <Option {...props} />,
      props: Config.searchOption,
    },

    {
      widgetName: "Leistung",
      widgetFunc: (props) => <Option {...props} />,
      props: Config.Leistung,
    },

    {
      widgetName: "Baudauer",
      widgetFunc: (props) => <Option {...props} />,
      props: Config.Baudauer,
    },

    {
      widgetName: "Graphen",
      widgetFunc: (props) => <Option {...props} />,
      props: Config.Graphen,
    },

    {
      widgetName: "MinLeistung",
      widgetFunc: (props) => <Wka {...props} />,
      props: Config.MinLeistung,
    },

    {
      widgetName: "MaxLeistung",
      widgetFunc: (props) => <Wka {...props} />,
      props: Config.MaxLeistung,
    },

    {
      widgetName: "MinBaudauer",
      widgetFunc: (props) => <Wka {...props} />,
      props: Config.MinBaudauer,
    },

    {
      widgetName: "MaxBaudauer",
      widgetFunc: (props) => <Wka {...props} />,
      props: Config.MaxBaudauer,
    },

    {
      widgetName: "LeistungsGraph",
      widgetFunc: (props) => <Graph {...props} />,
      props: Config.LeistungsGraph,
    },

    {
      widgetName: "NabenRotorGraph",
      widgetFunc: (props) => <Graph {...props} />,
      props: Config.NabenRotorGraph,
    },

    {
      widgetName: "PLZGraph",
      widgetFunc: (props) => <Graph {...props} />,
      props: Config.PLZGraph,
    },

    {
      widgetName: "BaudauerGraph",
      widgetFunc: (props) => <Graph {...props} />,
      props: Config.Baudauergraph,
    },

    {
      widgetName: "BaudauerProZeitGraph",
      widgetFunc: (props) => <Graph {...props} />,
      props: Config.BaudauerProZeitgraph,
    },
  ],
};

export default config;
