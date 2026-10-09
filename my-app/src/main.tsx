import { createRoot } from 'react-dom/client'
import './index.css'
import Clock from './Clock';

createRoot(document.getElementById('root')!).render(
    <Clock  />
);
