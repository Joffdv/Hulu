import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <h1>header</h1>
      <Image
        className="object-contain"
        src="hulu-white.png"
        width={200}
        height={100}
      />
    </header>
  )
}