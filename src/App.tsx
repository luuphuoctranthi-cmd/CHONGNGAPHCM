import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SpatialOverview } from './components/SpatialOverview';
import { HydrologySimulator } from './components/HydrologySimulator';
import { EcoCellExplorer } from './components/EcoCellExplorer';
import { CircularLifeCycle } from './components/CircularLifeCycle';
import { StemEducationHub } from './components/StemEducationHub';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('spatial');
  const [isDark, setIsDark] = useState<boolean>(false);

  // Sync dark class on documentElement
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* 3-Zone Top Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        setIsDark={setIsDark}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'spatial' && (
          <SpatialOverview
            onSelectSimulation={() => setActiveTab('hydrology')}
            onSelectEcoCell={() => setActiveTab('ecocell')}
          />
        )}

        {activeTab === 'hydrology' && <HydrologySimulator />}

        {activeTab === 'ecocell' && <EcoCellExplorer />}

        {activeTab === 'circular' && <CircularLifeCycle />}

        {activeTab === 'stem' && <StemEducationHub />}
      </main>

      {/* Footer */}
      <Footer onSelectTab={(tab) => setActiveTab(tab)} />
    </div>
  );
}
