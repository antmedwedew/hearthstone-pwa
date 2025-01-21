import { Button } from '@ui/button/Button.tsx';
import { Settings } from 'lucide-react';

function Home() {
  return (
    <>
      <Button>
        <Settings />
      </Button>
      <Button>Start</Button>
      <Button variant="secondary">start</Button>
      <Button variant="gray">start</Button>
    </>
  );
}

export default Home;
