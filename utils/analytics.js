import { ReactGAImplementation } from "react-ga4";

const initializeGA = () => {
    ReactGAImplementation.initialize(process.env.NEXT_PUBLIC_MEASUREMENT_ID);
    console.log("GA initialized");
}

const trackGAEvent = (category, action, label) => {
    console.log("GA Event: ", category, ":", action, ":", label)
    ReactGAImplementation.event({ category, action, label });
}

export default { initializeGA, trackGAEvent }