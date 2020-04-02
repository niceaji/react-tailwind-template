import React from 'react';
function App() {
  return (
      
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={require('./profile.jpg')} alt="Display" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          React + Tailwind 템플릿
        </div>
        <p className="text-gray-700 text-base">
          리액트도 좋지만 tailwind까지 결합되니 정말 좋네요. <span></span>
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#react</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#create-react-app</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">#tailwind</span>
      </div>
    </div>
  );
}
export default App;