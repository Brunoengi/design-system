import Image from 'next/image'

export type AvatarImageProps = {
  src: string,
  altDescription: string | ''
}

const AvatarImage = ({ src, altDescription }:AvatarImageProps) => {
  return (
  <div>
    <Image
      src={src}
      alt={altDescription}
      className='rounded-full'
      width={100}
      height={100}
    />
  </div>
  )
}

export default AvatarImage