import React, { useState } from 'react';
import { CheckCircle, Circle, AlertCircle, ChevronLeft, ChevronRight, Info, Lightbulb, Recycle, Leaf, DropletOff, Heart,Trash2,ShieldCheck,Users } from 'lucide-react';
import Sidebar from '../../components/Sidebar/Sidebar'; // Import Sidebar

const Wraps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showImpact, setShowImpact] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  
  const disposalSteps = [
    {
      icon: "alert",
      title: "Natural Breakdown Over Time",
      description: "Biodegradable pads made from natural fibers decompose over months to a few years.",
      impact: "Reduces long-term waste accumulation compared to plastic-based pads."
    },
    {
      icon: "alert",
      title: "Moisture Affects Decomposition Rate",
    description: "Humidity and rain can accelerate or slow down the breakdown process.",
    impact: "Proper composting conditions ensure faster, efficient decomposition."
  },
    {
      icon: "alert",
      title: "Minimal Environmental Impact",
      description: "Unlike plastic-based pads, biodegradable ones do not release toxins into the soil.",
      impact: "Prevents chemical contamination and microplastic pollution."
    },
    {
      icon: "alert",
      title: "Requires Proper Composting Methods",
      description: "Pads should be disposed of in designated compost pits or facilities.",
      impact: "Ensures effective breakdown without attracting pests or causing hygiene issues."
    },
  ];

  const solutionSteps = [
    {
        icon: <Trash2 className="w-8 h-8 text-gray-600" />,
        title: "Dispose in a Covered Bin",
        description: "Always wrap used sanitary pads in biodegradable paper and discard them in a closed bin.",
        benefit: "Prevents odor, maintains hygiene, and avoids contamination of surroundings."
      },
    {
        icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
        title: "Ensures Sanitary Safety",
        description: "Proper disposal reduces the risk of bacterial spread and infections.",
        benefit: "Keeps public and personal spaces clean, preventing health hazards."
      },
    {
        icon: <Recycle className="w-8 h-8 text-green-600" />,
        title: "Supports Waste Management Systems",
        description: "Disposing pads in the bin allows them to be collected and processed through waste management facilities.",
        benefit: "Enables proper segregation, reducing environmental pollution."
      },
    {
        icon: <Leaf className="w-8 h-8 text-green-600" />,
        title: "Encourages Eco-Friendly Disposal",
        description: "Using biodegradable wrapping materials minimizes plastic waste.",
        benefit: "Promotes sustainable disposal practices that are better for the environment."
      },
      {
        icon: <Users className="w-8 h-8 text-purple-600" />,
        title: "Easy & Accessible for Everyone",
        description: "Bins are available in most places, making this method simple and practical.",
        benefit: "Encourages more people to follow safe disposal habits."
      }
  ];

  const getIcon = (index) => {
    if (index < activeStep) {
      return <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-500" />;
    } else if (index === activeStep) {
      return <Circle className="w-6 h-6 md:w-8 md:h-8 text-blue-600 fill-blue-600" />;
    } else {
      return <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />;
    }
  };

  const nextStep = () => {
    if (activeStep < disposalSteps.length - 1) {
      setActiveStep(activeStep + 1);
      setShowImpact(false);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
      setShowImpact(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      {/* Sidebar Section */}
      <div className="w-[250px] bg-white shadow-md">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-5xl bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl p-6 border border-blue-100 mb-6">
          <h2 className="text-lg md:text-xl font-bold text-center text-blue-800 mb-6">
            Environmental Benefits of Proper Disposal
          </h2>
          
          <div className="flex flex-col">
            {disposalSteps.map((step, index) => (
              <div key={index} className={`flex transition-all duration-300 ease-in-out ${index === activeStep ? 'scale-100' : 'scale-95 opacity-80'}`}>
                {/* Left side - icons and line */}
                <div className="flex flex-col items-center">
                  <div 
                    className={`flex justify-center items-center w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md cursor-pointer transition-all duration-300 
                    ${index === activeStep ? 'bg-blue-100 ring-4 ring-blue-200' : (index < activeStep ? 'bg-green-100' : 'bg-gray-100')}`}
                    onClick={() => setActiveStep(index)}
                  >
                    {getIcon(index)}
                  </div>
                  {index < disposalSteps.length - 1 && (
                    <div className={`w-1 h-16 md:h-20 rounded-full transition-all duration-500 ${index < activeStep ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                  )}
                </div>
                
                {/* Right side - content */}
                <div 
                  className={`ml-3 md:ml-4 mb-4 p-2 md:p-3 rounded-lg cursor-pointer transition-all duration-300 flex-1
                    ${index === activeStep ? 'bg-white shadow-md border-l-4 border-blue-500' : 'hover:bg-white/50'}
                  `}
                  onClick={() => setActiveStep(index)}
                >
                  <h4 className={`text-sm md:text-base font-semibold ${index === activeStep ? 'text-blue-800' : 'text-gray-700'}`}>
                    {step.title}
                  </h4>
                  
                  {index === activeStep && (
                    <div className="mt-2 transition-all duration-500 ease-in-out">
                      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setShowImpact(!showImpact); }} 
                        className="mt-2 md:mt-3 flex items-center text-xs md:text-sm font-medium text-blue-600 hover:text-blue-800"
                      >
                        <Info className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {showImpact ? 'Hide Impact' : 'Show Impact'}
                      </button>
                      {showImpact && (
                        <div className="mt-2 text-xs md:text-sm bg-red-50 p-2 md:p-3 rounded-md border-l-4 border-red-400 text-red-900">
                          <strong>Impact:</strong> {step.impact}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-4">
            <button 
              onClick={prevStep}
              disabled={activeStep === 0}
              className={`px-4 py-2 rounded-lg flex items-center text-sm transition-all duration-300
                ${activeStep === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'}`}
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Previous
            </button>

            <span className="text-sm font-medium text-gray-500">{activeStep + 1} of {disposalSteps.length}</span>

            <button 
              onClick={nextStep}
              disabled={activeStep === disposalSteps.length - 1}
              className={`px-4 py-2 rounded-lg flex items-center text-sm transition-all duration-300
                ${activeStep === disposalSteps.length - 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'}`}
            >
              Next
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
        
        {/* Bring a Change Button */}
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="mx-auto px-6 py-3 mb-6 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center"
        >
          <Lightbulb className="w-5 h-5 mr-2" />
          {showSolution ? "Hide Benefits" : "Benefits"}
        </button>
        
        {/* Solutions Section */}
        {showSolution && (
          <div className="w-full max-w-5xl bg-gradient-to-br from-white to-green-50 rounded-xl shadow-xl p-6 border border-green-100 animate-fadeIn">
            <h2 className="text-lg md:text-xl font-bold text-center text-green-800 mb-6">
              Solutions for Responsible Waste Management
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {solutionSteps.map((solution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-500 overflow-hidden">
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-green-50 rounded-full mr-3">
                        {solution.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-green-800">
                        {solution.title}
                      </h3>
                    </div>
                    
                    <p className="text-xs md:text-sm text-gray-700 mb-3">
                      {solution.description}
                    </p>
                    
                    <div className="bg-green-50 p-2 md:p-3 rounded-md text-xs md:text-sm text-green-800">
                      <strong>Benefit:</strong> {solution.benefit}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="text-md font-semibold text-blue-800 mb-2 flex items-center">
                <Info className="w-5 h-5 mr-2" />
                Start Today
              </h3>
              <p className="text-sm text-gray-700">
                Small changes in your daily habits can create a massive positive impact on the environment. Begin with one solution and gradually adopt more sustainable practices.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wraps;