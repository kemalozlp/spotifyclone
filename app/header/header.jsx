import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <div className="header-search">
        <Image width={60} height={60} src="/image/spotifylogo.png" alt=""  />
      </div>
    </div>
  )
}