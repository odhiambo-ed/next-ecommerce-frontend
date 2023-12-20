import Image from 'next/image'
import HeroSlider from '@/components/HeroSlider'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <HeroSlider />
    </main>
  )
}
