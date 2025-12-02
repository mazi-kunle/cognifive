import React, { useState, useEffect } from "react";
import {
  Menu,
  Mic,
  Play,
  Pause,
  RotateCcw,
  Trash2,
  FileText,
  Settings,
  List,
  ChevronLeft,
} from "lucide-react";

const Dictation = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [transcription, setTranscription] = useState(
    "The patient John Doe. The patient presents for routine physical. He reports feeling a feeling well. He trains seems to essential any coughs. Vital stable. Lungs clear. Is heart steady heart regular. Extended DI regular. Recommended lifestyle lifestyle modifications include..."
  );

  // Timer effect
  useEffect(() => {
    let interval;
    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording, isPaused]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleRecordToggle = () => {
    if (!isRecording) {
      setIsRecording(true);
      setIsPaused(false);
      setRecordingTime(0);
    } else {
      setIsRecording(false);
      setIsPaused(false);
    }
  };

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsRecording(false);
    setIsPaused(false);
    setRecordingTime(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-10h2v2h-2v-2zm0 4h2v4h-2v-4z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-800">
                Clinical <span className="text-teal-500">Dictation</span>
              </span>
            </div>

            {/* Menu button */}
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Back Button */}
        <button className="flex items-center space-x-2 text-gray-600 hover:text-teal-500 mb-6 transition">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm sm:text-base">Back to Dashboard</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Recording Interface */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="flex flex-col items-center">
              {/* Recording Button */}
              <button
                onClick={handleRecordToggle}
                className={`w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full flex items-center justify-center mb-6 sm:mb-8 transition-all shadow-xl hover:shadow-2xl ${
                  isRecording && !isPaused
                    ? "bg-red-500 hover:bg-red-600 animate-pulse"
                    : isRecording && isPaused
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-teal-500 hover:bg-teal-600"
                }`}>
                <Mic
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-white"
                  strokeWidth={2}
                />
              </button>

              {/* Status Text */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
                {isRecording && !isPaused
                  ? "Recording..."
                  : isPaused
                  ? "Paused"
                  : "Record"}
              </h3>

              {/* Waveform Visualization */}
              {isRecording && !isPaused && (
                <div className="flex items-center justify-center space-x-1 mb-6 h-12">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-teal-500 rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 40 + 10}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: "0.8s",
                      }}></div>
                  ))}
                </div>
              )}

              {/* Timer */}
              <p className="text-2xl sm:text-3xl font-mono text-gray-700 mb-6 sm:mb-8">
                {formatTime(recordingTime)} / 1000 min
              </p>

              {/* Control Buttons */}
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-8">
                <button
                  onClick={handlePauseToggle}
                  disabled={!isRecording}
                  className="p-3 sm:p-4 bg-gray-200 rounded-full hover:bg-gray-300 active:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed">
                  {isPaused ? (
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                  ) : (
                    <Pause className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                  )}
                </button>
                <button
                  onClick={handleReset}
                  className="p-3 sm:p-4 bg-gray-200 rounded-full hover:bg-gray-300 active:bg-gray-400 transition">
                  <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
                <button className="p-3 sm:p-4 bg-gray-200 rounded-full hover:bg-gray-300 active:bg-gray-400 transition">
                  <Trash2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Transcription Panel */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
              Transcription
            </h2>

            {/* Patient Info */}
            <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Patient:</span> John Doe
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Appointment:</span> Annual
                    Checkup
                  </p>
                </div>
              </div>
            </div>

            {/* Transcription Text Area */}
            <div className="flex-1 mb-6">
              <textarea
                value={transcription}
                onChange={(e) => setTranscription(e.target.value)}
                className="w-full h-64 sm:h-80 lg:h-96 p-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none text-gray-700 leading-relaxed"
                placeholder="Your transcription will appear here..."
              />
            </div>

            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <button className="p-2 text-gray-600 hover:text-teal-500 transition">
                  <FileText className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-teal-500 transition">
                  <List className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-teal-500 transition">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 px-6 py-3 border-2 border-teal-500 text-teal-500 rounded-lg font-semibold hover:bg-teal-50 active:bg-teal-100 transition">
                Save Draft
              </button>
              <button className="flex-1 px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 active:bg-teal-700 transition shadow-sm hover:shadow-md">
                Finalize Document
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictation;
