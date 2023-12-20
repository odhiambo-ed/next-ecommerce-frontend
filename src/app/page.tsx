import HeroSlider from '@/components/HeroSlider'
import NewProducts from '@/components/NewProducts'
import Reviews from '@/components/Reviews'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSlider />
      <NewProducts />
      <Reviews />
    </main>
  )
}
