import { useState } from 'react';
import SetupScreen from '@/components/SetupScreen';
import GameScreen from '@/components/GameScreen';

type Screen = 'setup' | 'game';

const Index = () => {
  const [screen, setScreen] = useState<Screen>('setup');
  const [playerName, setPlayerName] = useState('');
  const [opponentName, setOpponentName] = useState('');

  const handleStart = (name: string, opponent: string) => {
    setPlayerName(name);
    setOpponentName(opponent);
    setScreen('game');
  };

  if (screen === 'game') {
    return (
      <GameScreen
        playerName={playerName}
        opponentName={opponentName}
        onExit={() => setScreen('setup')}
      />
    );
  }

  return <SetupScreen onStart={handleStart} />;
};

export default Index;
