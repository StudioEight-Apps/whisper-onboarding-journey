import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Screen0Splash from "./screens/Screen0Splash";
import Screen1Positioning from "./screens/Screen1Positioning";
import Screen2CognitiveLoad from "./screens/Screen2CognitiveLoad";
import Screen3InnerDialogue from "./screens/Screen3InnerDialogue";
import Screen4StressResponse from "./screens/Screen4StressResponse";
import Screen5VoiceSelection from "./screens/Screen5VoiceSelection";
import Screen6LanguageAlignment from "./screens/Screen6LanguageAlignment";
import Screen7VoiceReveal from "./screens/Screen7VoiceReveal";
import Screen8WidgetExplanation from "./screens/Screen8WidgetExplanation";
import Screen9CreateAccount from "./screens/Screen9CreateAccount";
import Screen10StartJournaling from "./screens/Screen10StartJournaling";
import Screen11Paywall from "./screens/Screen11Paywall";

const OnboardingFlow = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    watchDrag: false,
    duration: 25
  });
  const [currentScreen, setCurrentScreen] = useState(0);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setCurrentScreen((prev) => Math.min(prev + 1, 11));
    }
  }, [emblaApi]);

  const handleComplete = () => {
    console.log("Onboarding complete!");
  };

  const screens = [
    <Screen0Splash key="0" onContinue={scrollNext} />,
    <Screen1Positioning key="1" onContinue={scrollNext} />,
    <Screen2CognitiveLoad key="2" onContinue={scrollNext} />,
    <Screen3InnerDialogue key="3" onContinue={scrollNext} />,
    <Screen4StressResponse key="4" onContinue={scrollNext} />,
    <Screen5VoiceSelection key="5" onContinue={scrollNext} />,
    <Screen6LanguageAlignment key="6" onContinue={scrollNext} />,
    <Screen7VoiceReveal key="7" onContinue={scrollNext} />,
    <Screen8WidgetExplanation key="8" onContinue={scrollNext} />,
    <Screen9CreateAccount key="9" onContinue={scrollNext} />,
    <Screen10StartJournaling key="10" onContinue={scrollNext} />,
    <Screen11Paywall key="11" onContinue={handleComplete} />,
  ];

  return (
    <div className="w-full max-w-md mx-auto h-screen overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {screens.map((screen, index) => (
          <div 
            key={index} 
            className="flex-[0_0_100%] min-w-0 h-full"
          >
            {screen}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingFlow;
