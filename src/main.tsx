import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './components/main/index.tsx'
import { BG_HOME } from './assets/img'
import { netlifyImageUrl } from './lib/netlifyImage'

const heroPreload = document.createElement('link')
heroPreload.rel = 'preload'
heroPreload.as = 'image'
heroPreload.fetchPriority = 'high'
heroPreload.href = netlifyImageUrl(BG_HOME, 1920)
document.head.appendChild(heroPreload)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LandingPage/>
  </StrictMode>,
)
